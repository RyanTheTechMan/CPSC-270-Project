import {StyleSheet, Text, View} from "react-native";

import sharedStyles from "../Shared/styles";

function DemoPage() {
  const styles = StyleSheet.create({
    text: {
      ...sharedStyles.text,
      color: 'black',
      fontSize: 30,
      fontWeight: 'bold',
    },
    container: {
      ...sharedStyles.container,
    },
  });

  return (
    <View style={styles.container} >
      <Text style={styles.text}>Edit this page!</Text>
    </View>
  );
}

export default DemoPage;