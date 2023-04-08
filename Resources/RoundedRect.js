import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
  Animated
} from "react-native";
import { header_color } from "./Shared/styles";

// Check if LayoutAnimation is enabled on Android
if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

// A reusable component for rendering a rounded rectangle with a toggleable header and content
const RoundedRect = ({
  children, // The content to be rendered in the rounded rectangle
  title = "", // The title to be displayed in the header of the rounded rectangle
  isOpen = false, // A boolean value indicating whether the content should be initially open or closed
  style = {}, // Additional styles to be applied to the container of the rounded rectangle
  ...props // Any additional props to be passed to the container of the rounded rectangle
}) => {
  const [isOpenState, setIsOpenState] = useState(isOpen); // A state variable that keeps track of whether the content is currently open or closed
  let heightAnimValue = useRef(null).current;  // A reference to the height of the content used for animation

  // A function that toggles the open/closed state of the content
  const toggleOpenState = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsOpenState(!isOpenState);
  };

  
  // A callback function that is called when the layout of the content changes
  const onLayout = (event) => {
    // If the height of the content has not been initialized, set it to the current height of the content
    if (heightAnimValue === null) {
      heightAnimValue = new Animated.Value(event.nativeEvent.layout.height);
    }
  };

  return (
    // The container of the rounded rectangle
    <View style={[styles.container, style]} {...props}>
      {/* The header of the rounded rectangle that can be pressed to toggle the content */}
      <TouchableOpacity onPress={toggleOpenState} style={styles.header}>
        <View style={styles.titleContainer}>
          {/* The title of the rounded rectangle */}
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.iconContainer}>
          {/* The icon displayed in the header that indicates whether the content is open or closed */}
          <Text style={styles.icon}>{isOpenState ? "-" : "+"}</Text>
        </View>
      </TouchableOpacity>

      {/* The content to be displayed when the rounded rectangle is open */}
      {isOpenState && (
        <View style={styles.content} onLayout={onLayout}>
          {children}
        </View>
      )}

      {/* The content to be displayed when the rounded rectangle is closed */}
      {!isOpenState && (
        <View style={styles.collapsedContent} onLayout={onLayout}>
          {children}
        </View>
      )}
    </View>
  );
};

// A reusable component for rendering a list of RoundedRect components
const RoundedRectList = ({ children }) => {
  return (
    // The container for the list of RoundedRect components
    <View style={styles.listContainer}>
      {React.Children.map(children, (child, index) => (
        <View>
          {child}
          {index !== children.length - 1 && <View style={styles.separator} />}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: header_color,
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 10,
  },
  header: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "flex-start",
    paddingRight: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: '#fff'
  },
  iconContainer: {
    justifyContent: "flex-end",
  },
  icon: {
    fontSize: 24,
    fontWeight: "bold",
  },
  content: {
    padding: 16,
  },
  collapsedContent: {
    height: 0,
    overflow: "hidden",
  },
  listContainer: {
    flex: 1,
    marginHorizontal: 16,
  },
  itemContainer: {
    backgroundColor: "#ccc",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 10,
  },
  separator: {
    height: 10,
  },
});

export { RoundedRect, RoundedRectList };
