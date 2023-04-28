import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from "@react-navigation/native";

import styles from "./Resources/Shared/styles";

import NavBar from "./Resources/NavBar";
// import {Appearance} from 'react-native'; // Use once we use react-native.

function App() {
  // Appearance.addChangeListener(({colorScheme}) => {
  //   console.log(colorScheme);
  // });

  return (
    <NavigationContainer>
      <StatusBar style="auto" animated={true} hidden={false} translucent={true} />
      <NavBar />
    </NavigationContainer>
  );
}

export default App;