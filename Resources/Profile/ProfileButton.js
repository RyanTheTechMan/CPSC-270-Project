import { Pressable, View, Text, Dimensions } from 'react-native';
import { Avatar } from 'react-native-elements';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  useAnimatedGestureHandler
} from 'react-native-reanimated';

import profileData from './ProfileData';
import sharedStyles from '../Shared/styles';
import ProfileOverlay from "../Pages/ProfileOverlay";
import {PanGestureHandler} from "react-native-gesture-handler";
import {useHeaderHeight} from "@react-navigation/elements";

const profileButtonSize = 75;
const profileButtonBottomOffset = 18;
const maxY = 0.65; // Amount of screen height that the button can move up

const { width, height } = Dimensions.get('window');

const styles = {
  ...sharedStyles,
  profileButton: {
    alignSelf: 'center',
    zIndex: 1,
    width: profileButtonSize,
    height: profileButtonSize,
    bottom: profileButtonBottomOffset,

    borderRadius: 500,

    backgroundColor: 'rgba(0,0,0,1)',

    // iOS
    shadowOffset: { width: 0, height: 12 },
    // shadowOpacity: 0.4, // CHANGES IN ANIMATION
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
    backgroundColor: 'rgba(0,0,0,0.7)',
  }
};

function clamp(value, lowerBound, upperBound) {
  'worklet';
  return Math.min(Math.max(value, lowerBound), upperBound);
}

// t = current time
// b = start value
// c = change in value
// d = duration
const easeInOut = (t, b, c, d) => {
  'worklet'
  t /= d/2;
  if (t < 1) return c/2*t*t + b;
  t--;
  return -c/2 * (t*(t-2) - 1) + b;
}

const easeInOut2D = (t, startX, startY, endX, endY) => {
  'worklet'
  let x = easeInOut(t, startX, endX-startX, 1);
  let y = easeInOut(t, startY, endY-startY, 1);
  return {x, y};
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
    <View>
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
        buttonY.value = withSpring(maxY, {damping: 20, stiffness: 40, restDisplacementThreshold: 0.01, restSpeedThreshold: 0.0001});
        overlayOpen.value = true;
        ctx.y = maxY*totalHeight;
      } else if (buttonY.value < 0.5) {
        buttonY.value = withSpring(0, {damping: 10, stiffness: 50, restDisplacementThreshold: 0.01, restSpeedThreshold: 0.0001});
        overlayOpen.value = false;
        ctx.y = 0;
      } else {
        buttonY.value = withSpring(maxY, {damping: 20, stiffness: 40, restDisplacementThreshold: 0.01, restSpeedThreshold: 0.0001});
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

  const animatedProfileButtonStyle = useAnimatedStyle(() => {
    let clampedPercentage = clamp(buttonY.value, 0, maxY)/maxY;
    let yOffset = clamp(buttonY.value, profileButtonBottomOffset/totalHeight, maxY)*totalHeight;
    let xOffset = easeInOut(clampedPercentage, 0, -0.3, 1)*width;
    let scaleOffset = clampedPercentage === 0.0 ? 1.0 :
        clamp((clampedPercentage*width*0.008), 1, 1 + profileButtonSize/width*4);
    let shadowOffset = clampedPercentage <= 0.15 ? 1 - clampedPercentage / 0.15 : 0;

    return {
      transform: [
        {translateY: yOffset},
        {translateX: xOffset},
        {scale: scaleOffset},
      ],
      shadowOpacity: shadowOffset*0.6
    };
  });

  const animatedOverlayBackgroundStyle = useAnimatedStyle(() => {
    let clampedPercentage = clamp(buttonY.value, 0, maxY);
    let color = easeInOut(clampedPercentage/maxY, 0, 0.5, 1);
    return {
      backgroundColor: `rgba(0,0,0,${color})`,
      pointerEvents: clampedPercentage > 0.1 ? 'auto' : 'none',
    };
  });

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <PanGestureHandler onGestureEvent={eventHandler}>
        <Animated.View style={[styles.profileButton, animatedProfileButtonStyle]}>
          <Avatar
            rounded
            size={profileButtonSize}
            source={{ uri: profileData.profileImage }}
          />
        </Animated.View>
      </PanGestureHandler>
      <Text style={styles.text}>Profile</Text>
      <PanGestureHandler onGestureEvent={eventHandler}>
        <Animated.View style={[styles.background, animatedOverlayBackgroundStyle]}>
          <RenderOverlay buttonY={buttonY} totalHeight={totalHeight} />
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
}

export default ProfileButton;
