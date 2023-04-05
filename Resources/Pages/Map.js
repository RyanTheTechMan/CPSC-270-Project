import {StyleSheet, Text, View} from "react-native";

import sharedStyles from "../Shared/styles";

function Map({navigation}) {
  const styles = StyleSheet.create({
    text: {
      ...sharedStyles.text,
      color: 'black',
      fontSize: 30,
    },
    container: {
      ...sharedStyles.container,
    },
  });

  return (
    <View style={styles.container} >
      <Text style={styles.text}>WIP</Text>
    </View>
  );
}

export default Map;