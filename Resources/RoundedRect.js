import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const RoundedRect = ({
  children,
  title = "",
  isOpen = false,
  style = {},
  ...props
}) => {
  const [isOpenState, setIsOpenState] = useState(isOpen);

  return (
    <View style={[styles.container, style]} {...props}>
      <TouchableOpacity
        onPress={() => setIsOpenState(!isOpenState)}
        style={styles.header}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.iconContainer}>
          <Text style={styles.icon}>{isOpenState ? "-" : "+"}</Text>
        </View>
      </TouchableOpacity>

      {isOpenState && <View style={styles.content}>{children}</View>}
    </View>
  );
};

const RoundedRectList = ({ children }) => {
  return (
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
    backgroundColor: "#ccc",
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
