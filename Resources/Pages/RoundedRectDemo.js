import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { RoundedRect, RoundedRectList } from "../RoundedRect";

const ExampleApp = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <RoundedRectList>
        <RoundedRect title="RoundedRect with text">
          <Text>This is an example of a RoundedRect component holding text</Text>
        </RoundedRect>

        <RoundedRect title="Nested RoundedRect">
          <Text>
            This is an example of a RoundedRect component holding another
            RoundedRect component
          </Text>

          <RoundedRect title="Nested RoundedRect">
            <Text>
              This is an example of a nested RoundedRect component inside a
              RoundedRect component
            </Text>
          </RoundedRect>
        </RoundedRect>

        <RoundedRect title="RoundedRect with image">
          <View style={styles.imageContainer}>
            <Text>Insert image here</Text>
          </View>
        </RoundedRect>

        <RoundedRect title="RoundedRect with custom style" style={styles.custom}>
          <Text>This RoundedRect component has custom styles applied</Text>
        </RoundedRect>
      </RoundedRectList>

      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    flexGrow: 1,
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
  imageContainer: {
    width: "100%",
    height: 200,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
  },
  custom: {
    backgroundColor: "purple",
    borderColor: "pink",
    borderWidth: 2,
    marginBottom: 20,
  },
});

export default ExampleApp;