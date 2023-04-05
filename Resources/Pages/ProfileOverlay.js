import React from 'react';
import {Dimensions, Platform, Pressable, StyleSheet, Text, View} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {BlurView} from 'expo-blur'; // After dropping expo, switch to react-native-blur. A slight refactor will be required.
import {format} from "date-fns";
import Animated, {
  Easing,
  runOnJS,
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue, withDelay,
  withTiming,
} from 'react-native-reanimated';

import ProfileData from "../Profile/ProfileData";

const { width, height } = Dimensions.get('window');

function ProfileInfo({icon, text}) {
  return (
    <View style={styles.shortInfoContainer}>
      <FontAwesomeIcon name={icon} size={16} color="#333" />
      <Text style={styles.shortInfoDisplay}>{text}</Text>
    </View>
  );
}

// when under low, the bar is red, when near med, the bar is yellow, and when over high, the bar is green.
function StatBar({ title, value, max, displayMax = true, prefix = '', suffix = '', colorRange = {low: 0, med: 0, high: 0} }) {
  if (max === undefined) max = value;

  let hue;
  if (colorRange.low === colorRange.med && colorRange.med === colorRange.high) // if color range was not specified
    hue = 120 * (value / max);
  else if (value < colorRange.med)
    hue = 60 + 60 * ((value - colorRange.low) / (colorRange.med - colorRange.low));
  else
    hue = 60 - 60 * ((value - colorRange.med) / (colorRange.high - colorRange.med));
  hue = Math.min(Math.max(hue, 0), 120);

  const barColor = `hsl(${hue}, 100%, 35%)`;

  // Set the whole bar to a color if the max is 0 or less
  const barLength = value > 0 ? value / max : 1

  return (
    <View style={styles.statBarContainer}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}} >
        <Text style={styles.statBarTitle}>{title}</Text>
        <Text style={styles.statBarValue}>
          {prefix}{value}{suffix}{displayMax && (`/${prefix}${max}${suffix}`)}
        </Text>
      </View>
      <View style={styles.statBar}>
        <View
          style={{
            ...styles.statBarFill,
            backgroundColor: barColor,
            width: `${100 * barLength}%`,
          }}
        />
      </View>
    </View>
  );
}

function ProfileOverlay() {
  const name = ProfileData.displayName();
  const money = ProfileData.moneyBalance;
  const printAllowance = ProfileData.printAllowance;
  const printBalance = ProfileData.printBalance;
  const mealPlan = ProfileData.mealPlan;
  const mealPlanBalance = ProfileData.mealPlanBalance;
  const onCampus = ProfileData.onCampus;
  const dormRoomLocation = ProfileData.dormRoomLocation;
  const mailboxNumber = ProfileData.mailboxNumber;
  const mailboxUnlockCode = ProfileData.mailboxUnlockCode;
  const packageArrivedDate = ProfileData.packageArrivedDate;

  const [packageArrived, setPackageArrived] = React.useState(packageArrivedDate !== undefined && packageArrivedDate !== null);

  const packageDismiss = useSharedValue(0);

  const animatedPackageDismiss = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withTiming(packageDismiss.value * width, {duration: 1500}),
        }
      ],
      marginTop: withDelay(1500, withTiming(packageDismiss.value * -125, {duration: 1000, easing: Easing.out(Easing.exp)})),
    };
  });

  return (
    // The following view allows you to add a rounded border to the blurview. This is a workaround for the fact that the blurview doesn't support borderRadius.
    <View style={{overflow: 'hidden', borderRadius: 50, ...Platform.select({android: {backgroundColor: 'white'}})}}>
      <BlurView style={styles.container} intensity={100} tint="light">
        <View style={styles.header} />
        <View style={styles.userInfo}>
          <Text style={styles.name}>{name}</Text>
          {onCampus && (
            <View>
              <ProfileInfo icon="home" text={dormRoomLocation} />
              <View style={{marginTop: 10}} />
              <ProfileInfo icon="envelope" text={mailboxNumber} />
              <ProfileInfo icon="lock" text={mailboxUnlockCode} />
            </View>
          )}
        </View>
        {/*Below separator is not perfect for onCampus vs not*/}
        <View style={{...styles.separator, marginTop: onCampus ? 40 : 115}} />
        {onCampus && packageArrived && (
          <Animated.View style={[styles.packageContainer, animatedPackageDismiss]}>
            <FeatherIcon name="package" size={75} color="#000" style={styles.packageIcon} />
            <Text style={styles.packageText}>A package has arrived!</Text>
            <Text style={styles.packageDateArrived}>{format(packageArrivedDate, "MMMM d, yyyy")}</Text>
            <Pressable style={styles.packageClearButton} onPress={() => {
              packageDismiss.value = 1;
            }}>
              <Text style={styles.packageClearButtonText}>Dismiss</Text>
            </Pressable>
          </Animated.View>
        )}
        <View style={styles.stats}>
          <StatBar title="Money" value={money} displayMax={false} prefix={'$'} colorRange={{low: 50, med: 60, high: 100}}/>
          <StatBar title="Print Allotment" value={printBalance} max={printAllowance} prefix={'$'}/>
          <StatBar title="Meal Swipes" value={mealPlanBalance} max={mealPlan}/>
        </View>
      </BlurView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 50, // Currently not used, but will be when react-native-blur is used.
    padding: 16,
    height: height,
    width: width,
  },
  header: {
    backgroundColor: '#b7b7b7',
    flexDirection: 'row',
    width: 50,
    height: 6,
    borderRadius: 20,
    alignSelf: 'center',
    top: -8

  },
  userInfo: {
    marginLeft: 150,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  shortInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  shortInfoDisplay: {
    marginLeft: 4,
    fontSize: 14,
  },
  separator: {
    backgroundColor: '#ccc',
    height: 1,
  },
  stats: {
    flexDirection: 'column',
    justifyContent: 'space-between',

  },
  statBarContainer: {
    marginTop: 30,
  },
  statBarTitle: {
    fontSize: 20,
    fontWeight: '500',
  },
  statBar: {
    alignItems: 'center',
    marginTop: 4,
    backgroundColor: '#e7e7e7',
    height: 7,
    borderRadius: 20,
    flexDirection: 'row',
  },
  statBarFill: {
    height: 7,
    borderRadius: 20,
  },
  statBarValue: {
    fontSize: 15,
    paddingTop: 5,
  },
  packageContainer: {
    marginTop: 30,
    backgroundColor: '#B8BFD8',
    borderRadius: 20,
  },
  packageText: {
    fontSize: 20,
    fontWeight: '500',
    alignSelf: 'center',
    left: '10%',
    paddingVertical: 30,
  },
  packageDateArrived: {
    fontSize: 15,
    paddingBottom: 10,
    paddingLeft: 10,
    color: '#262626',
  },
  packageIcon: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  packageClearButton: {
    position: 'absolute',
    backgroundColor: '#475884',
    right: 0,
    bottom: 0,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    alignSelf: 'center',
    paddingHorizontal: 25,
    paddingVertical: 10,
    marginTop: 10,
  },
  packageClearButtonText: {
    fontSize: 15,
    color: '#fff',
    fontWeight: '500',
  }
});

export default ProfileOverlay;