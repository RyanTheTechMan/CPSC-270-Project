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

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

function RoundedRect ({
  children, 
  title = "", 
  isOpen = false, 
  style = {},
  ...props 
})
{
  const [isOpenState, setIsOpenState] = useState(isOpen); 
  let heightAnimValue = useRef(null).current;  

  
  const toggleOpenState = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsOpenState(!isOpenState);
  };
  
  const onLayout = (event) => {
    if (heightAnimValue === null) {
      heightAnimValue = new Animated.Value(event.nativeEvent.layout.height);
    }
  };

  return (
    
    <View style={[styles.container, style]} {...props}>
      <TouchableOpacity onPress={toggleOpenState} style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.iconContainer}>
          <Text style={styles.icon}>{isOpenState ? "-" : "+"}</Text>
        </View>
      </TouchableOpacity>
      
      {isOpenState && (
        <View style={styles.content} onLayout={onLayout}>
          {children}
        </View>
      )}
     
      {!isOpenState && (
        <View style={styles.collapsedContent} onLayout={onLayout}>
          {children}
        </View>
      )}
    </View>
  );
};

function RoundedRectList({children})
{
  return(
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
    color: '#fff'
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
