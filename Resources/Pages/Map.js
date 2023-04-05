import {StyleSheet, Text, View} from "react-native";
import MapView from "react-native-maps";

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
    map: {
      width: '100%',
      height: '100%',
    }
  });

  return (
    <View style={styles.container} >
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.297,
          longitude: -80.056,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        showsCompass={true}
        showsUserLocation={true}
        // userInterfaceStyle={"dark"}
      />
    </View>
  );
}

export default Map;