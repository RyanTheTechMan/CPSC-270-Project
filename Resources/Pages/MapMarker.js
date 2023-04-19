import {Pressable, View, StyleSheet, Text, Image} from "react-native";
import sharedStyles from "../Shared/styles";
import {createStackNavigator} from "@react-navigation/stack";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {useEffect} from "react";

const Stack = createStackNavigator();

function MapMarker({navigation, route}) {
  const marker = route.params.marker;

  // change title of navigation bar to the marker's name
  useEffect(() => {
    navigation.setOptions({title: marker.displayName});
  }, [navigation, marker.displayName]);

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: sharedStyles.header.backgroundColor,
        },
        headerBackTitleVisible: false,
        headerTintColor: sharedStyles.header.tintColor,
      }}
    >
      {/*Hide header back button for general*/}
      <Stack.Screen name="Overview" options={{headerLeft: null}}>
        {(props) => <Overview {...props} marker={marker} topNav={navigation}/>}
      </Stack.Screen>
      <Stack.Screen name="FloorPlan">
        {(props) => <FloorPlan {...props} marker={marker} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

export default MapMarker;

function MenuButton({title, icon, onPress}) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <MaterialCommunityIcons name={icon} size={24} color="#fff" />
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
}

function Overview({navigation, route, marker, topNav}) {
  marker.floorPlan = true;
  return (
    <View style={styles.container}>
      <Image source={{uri: marker.image}} style={styles.image} />
      <View style={styles.buttonContainer}>
        <MenuButton title="Navigate" icon="map-marker-right" onPress={() => console.log("navigate")} />
        {marker.floorPlan && ( <MenuButton title="Floor Plan" icon="floor-plan" onPress={() => navigation.navigate("FloorPlan")} /> )}
        <MenuButton title="More Info" icon="information-outline" onPress={() => console.log("more info")} />
      </View>
      <View style={styles.separator} />
      <Text style={styles.text}>{marker.description}</Text>
    </View>
  );
}

function FloorPlan({navigation, route, marker}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>some cool stuff</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  ...sharedStyles,
  container: {
    ...sharedStyles.container,
    alignSelf: 'auto',
    justifyContent: 'flex-start'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  button: {
    ...sharedStyles.button,
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5
  },
  buttonText: {
    ...sharedStyles.button_text,
    fontSize: 18,
  },
  image: {
    width: '100%',
    height: '30%',
    marginBottom: 50
  }
});