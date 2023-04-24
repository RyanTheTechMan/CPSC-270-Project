import React, { useLayoutEffect, useRef } from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomTab from './CustomTab';
import sharedStyles from './Shared/styles';
import ProfileButton from './Profile/ProfileButton';


// Import pages to be used in the bottom tab navigator
import AcademicInformationPage from './Pages/AcademicInformation';
import FinancialInformationPage from './Pages/FinancialInformation';
import Map from './Pages/Map';
import DemoPage from './Pages/DemoPage';
import SafetyList from "./Pages/SafetyInfo";
import { MailPage } from "./Pages/Mail";
import LandingPage from './Pages/Landing';
import { DiningPage } from "./Menus";
import { CalendarPage, CalendarStack } from "./Calendar";
import MapMarker from "./Pages/MapMarker";

const EmptyComponent = () => <View />;

export const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeButton({ navigation }) {
  return (
    <Ionicons
      name="home"
      size={24}
      color="#fff"
      onPress={() => navigation.navigate('Home')}
      style={{ marginLeft: 15 }}
    />
  );
}
function NavBar() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: sharedStyles.header.backgroundColor,
        },
        headerBackTitleVisible: false,
        headerTintColor: sharedStyles.header.tintColor,
      }}
    >
      <Stack.Screen name="Root" options={{ headerShown: false }}>
        {() => (
          <View style={{ flex: 1 }}>
            <Tab.Navigator
              screenOptions={({ route, navigation }) => ({
                headerStyle: {
                  backgroundColor: sharedStyles.header.backgroundColor,
                },
                headerTintColor: sharedStyles.header.tintColor,
                tabBarButton: (props) => {
                  switch (route.name) {
                    // case 'Mail':
                    //   return <CustomTab {...props} style={{ marginLeft: 40 }} />;
                    // case 'Schedule':
                    //   return <CustomTab {...props} style={{ marginRight: 40 }} />;
                    case 'Profile':
                      return <ProfileButton navigation={navigation} {...props} />;
                    default:
                      return <CustomTab {...props} />;
                  }
                },
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;

                  switch (route.name) {
                    case 'Map':
                      iconName = focused ? 'map' : 'map-outline';
                      break;
                    case 'Temp':
                      iconName = focused ? 'list' : 'list-outline';
                      break;
                    case 'Calendar':
                      iconName = focused ? 'calendar' : 'calendar-outline';
                      break;
                    case 'Safety':
                      iconName = focused ? 'shield' : 'shield-outline';
                      break;
                  }

                  return <Ionicons name={iconName} size={size} color={color} />;
                },
                headerLeft: () => {
                  if (route.name !== 'Home') {
                    return <HomeButton navigation={navigation} />;
                  }
                },
                tabBarActiveTintColor: sharedStyles.unselected.color,
                tabBarInactiveTintColor: sharedStyles.selected.color,
                tabBarStyle: {
                  backgroundColor: 'rgba(255,255,255,1)',
                  position: 'absolute', // Make the tab bar stick to the bottom of the screen, content can be displayed behind it
                  borderTopLeftRadius: 40, // Curve the top left corner of the tab bar
                  borderTopRightRadius: 40, // Curve the top right corner of the tab bar

                  // IOS
                  shadowOffset: { width: 0, height: -2 },
                  shadowOpacity: 0.15,
                  shadowRadius: 3,

                  // Android
                  elevation: 5,
                },
              })}
            >
              <Tab.Screen name="Home" component={LandingPage} options={{ tabBarButton: () => null }} />

              <Tab.Screen name="Map" component={Map} />
              <Tab.Screen name="Calendar" component={CalendarStack} />

              <Tab.Screen name="Profile" component={EmptyComponent} />

              <Tab.Screen name="Temp" component={EmptyComponent} />
              <Tab.Screen name="Safety" component={SafetyList} />
            </Tab.Navigator>
          </View>
        )}
      </Stack.Screen>
      <Stack.Screen name="MapMarker" component={MapMarker} />
      <Stack.Screen name="Mail" component={MailPage} />
      <Stack.Screen name="Dining" component={DiningPage} />
      <Stack.Screen name="Academics" component={AcademicInformationPage} />
      <Stack.Screen name="Calendar" component={CalendarStack} />
      <Stack.Screen name="Financial" component={FinancialInformationPage} />
    </Stack.Navigator>
  );
}

export default NavBar;