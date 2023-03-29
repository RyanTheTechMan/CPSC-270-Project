import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from "@react-navigation/native";

import styles from "./Resources/Shared/styles";

import NavBar from "./Resources/NavBar";
import ProfileButton from "./Resources/Profile/Profile";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" animated={true} hidden={false} translucent={true} />
      <NavBar />
      <ProfileButton />
    </NavigationContainer>
  );
}