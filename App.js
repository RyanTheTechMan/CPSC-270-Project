import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from "@react-navigation/native";

import styles from "./Resources/Shared/styles";

import NavBar from "./Resources/NavBar";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" animated={true} hidden={false} translucent={true} />
      <NavBar />
    </NavigationContainer>
  );
}