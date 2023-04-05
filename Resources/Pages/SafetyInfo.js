import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { RoundedRect, RoundedRectList } from "../RoundedRect";
import sharedStyles, {neutral_color} from "../Shared/styles";

const SafetyList = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <RoundedRectList>
        <RoundedRect title="Salem Police Department">
          <Text>
            1(234) 567-8910
          </Text>
        </RoundedRect>

        <RoundedRect title="Campus Safety">
          <Text>
            1(234) 567-8910 
          </Text>
        </RoundedRect>

        <RoundedRect title="RA On Duty">
          <View>
            <Text>
              North Side: 1(234) 567-8910 
            </Text>
            <Text>
              South Side: 1(234) 567-8910
            </Text>
            <Text>
              West Side: 1(234) 567-8910
            </Text>
            <Text>
              EC: 1(234) 567-8910
            </Text>
          </View>
        </RoundedRect>

        <RoundedRect title="Res. Life & Housing">
          <Text>
            1(234) 567-8910
          </Text>
        </RoundedRect>

        <RoundedRect title="Student Health & Counseling">
          <Text>
            1(234) 567-8910
          </Text>
        </RoundedRect>
      </RoundedRectList>

      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    backgroundColor: neutral_color,
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

export default SafetyList;