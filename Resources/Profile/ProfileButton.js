import React, {useState} from 'react';
import { Pressable, View, Text, Dimensions, Platform } from 'react-native';
import { Avatar } from 'react-native-elements';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  useAnimatedGestureHandler, diffClamp
} from 'react-native-reanimated';

import profileData from './ProfileData';
import sharedStyles from '../Shared/styles';
import ProfileOverlay from "../Pages/ProfileOverlay";
import {PanGestureHandler, TapGestureHandler} from "react-native-gesture-handler";
import {useHeaderHeight} from "@react-navigation/elements";

const profileButtonSize = 75;
const profileButtonBottomOffset = 18;
const maxY = 0.675; // Amount of screen height that the button can move up

const { width, height } = Dimensions.get('window');

const styles = {
  ...sharedStyles,
  profileButton: {
    alignSelf: 'center',
    zIndex: 1,
    width: profileButtonSize,
    height: profileButtonSize,
    bottom: profileButtonBottomOffset,
  },
  avatarContainer: {
    backgroundColor: 'rgba(0,0,0,1)',

    // iOS
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.4,
    shadowRadius: 10,

    // Android
    elevation: 7,
  },
  text: {
    fontSize: 10,
    color: sharedStyles.selected.color,
    alignSelf: 'center',
    transform: [{translateY: -18}],
  },
  overlay: {
    // height: height*2,
    // backgroundColor: 'blue',
    pointerEvents: 'none',
  },
  backgroundFullScreen: {
    position: 'absolute',
    top: 0,
    width: width,
    backgroundColor: 'black',
    pointerEvents: 'none',
  },
  background: {
    position: 'absolute',
    top: 0,
    width: width,
    transform: [{translateY: -height}],
    pointerEvents: 'none',
  }
};

function clamp(value, lowerBound, upperBound) {
  'worklet';
  return Math.min(Math.max(value, lowerBound), upperBound);
}

function RenderOverlay({buttonY, totalHeight}) {
  const overlayAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: clamp(buttonY.value, 0, maxY)*totalHeight-totalHeight - profileButtonSize - profileButtonBottomOffset/2}],
      opacity: buttonY.value/maxY
    };
  });

  const backgroundAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: buttonY.value/maxY,
      pointerEvents: buttonY.value > 0 ? 'auto' : 'none',
    };
  });

  return (
    <View style={styles.background}>
      <Animated.View style={[styles.backgroundFullScreen, backgroundAnimatedStyle]} />
      <Animated.View style={[styles.overlay, overlayAnimatedStyle]}>
        <ProfileOverlay />
      </Animated.View>
    </View>
  );
}

function ProfileButton({navigation}) {
  const totalHeight = -height-useHeaderHeight();

  const overlayOpen = useSharedValue(false);
  const buttonY = useSharedValue(0);

  const eventHandler = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
      ctx.moved = false
    },
    onActive: (event, ctx) => {
      buttonY.value = (event.translationY + (ctx.y || 0))/totalHeight;
      ctx.moved = true;
    },
    onEnd: (event, ctx) => {
      if (!overlayOpen.value && buttonY.value > 0.06) {
        buttonY.value = withSpring(maxY, {damping: 10, stiffness: 40, restDisplacementThreshold: 0.01, restSpeedThreshold: 0.01});
        overlayOpen.value = true;
        ctx.y = maxY*totalHeight;
      } else if (buttonY.value < 0.5) {
        buttonY.value = withSpring(0, {damping: 10, stiffness: 40, restDisplacementThreshold: 0.01, restSpeedThreshold: 0.01});
        overlayOpen.value = false;
        ctx.y = 0;
      } else {
        buttonY.value = withSpring(maxY, {damping: 10, stiffness: 40, restDisplacementThreshold: 0.01, restSpeedThreshold: 0.01});
        overlayOpen.value = true;
        ctx.y = maxY*totalHeight;
      }
    },
    onFinish: (event, ctx) => {
      if (!ctx.moved && !overlayOpen.value) {
        buttonY.value = withSpring(maxY, {damping: 10, stiffness: 40, restDisplacementThreshold: 0.01, restSpeedThreshold: 0.01});
        overlayOpen.value = true;
        ctx.y = maxY*totalHeight;
      }
    }
  })

  const animatedStyle = useAnimatedStyle(() => {
    let clampedPercentage = clamp(buttonY.value, 0, maxY);
    return {
      transform: [
        {translateY: clampedPercentage*totalHeight},
        {translateX: clamp((clamp(clampedPercentage,0.2,maxY)-0.2)*-0.6*width, -0.45*width, 0)},
        {scale: clampedPercentage === 0.0 ? 1.0 :
            clamp(clampedPercentage*width*0.008, 1.0, 1.8)},
      ],
    };
  });

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <PanGestureHandler onGestureEvent={eventHandler}>
        <Animated.View style={[styles.profileButton, animatedStyle]}>
          <Avatar
            rounded
            containerStyle={styles.avatarContainer}
            size={profileButtonSize}
            source={{ uri: profileData.profileImage }}
          />
        </Animated.View>
      </PanGestureHandler>
      <Text style={styles.text}>Profile</Text>
      <RenderOverlay buttonY={buttonY} totalHeight={totalHeight} />
    </View>
  );
}

export default ProfileButton;
