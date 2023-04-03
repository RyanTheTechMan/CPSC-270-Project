import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomTab from './CustomTab';
import sharedStyles from './Shared/styles';
import ProfileButton from './Profile/ProfileButton';

// Import pages to be used in the bottom tab navigator
import Map from './Pages/Map';
import DemoPage from './Pages/DemoPage';
import SafetyPage from "./Pages/Safety";
import MailPage from "./Pages/Mail";
import DirectoryPage from './Pages/Directory';
import {DiningPage, DiningStack, commonsMenu, cavernMenu, freshensMenu} from "./Menus";
import ProfileOverlay from "./Pages/Profile";

const EmptyComponent = () => <View />;

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
function NavBar() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" options={{ headerShown: false }}>
        {() => (
          <View style={{ flex: 1 }}>
            <ProfileButton />
            <Tab.Navigator
              screenOptions={({ route }) => ({
                headerStyle: {
                  backgroundColor: sharedStyles.header.backgroundColor,
                },
                tabBarButton: (props) => {
                  switch (route.name) {
                    case 'Mail':
                      return <CustomTab {...props} style={{ marginLeft: 40 }} />;
                    case 'Schedule':
                      return <CustomTab {...props} style={{ marginRight: 40 }} />;
                    // case 'Profile':
                    //   return <View />
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
                    case 'Mail':
                      iconName = focused ? 'list' : 'list-outline';
                      break;
                    case 'Schedule':
                      iconName = focused ? 'calendar' : 'calendar-outline';
                      break;
                    case 'Safety':
                      iconName = focused ? 'shield' : 'shield-outline';
                      break;
                  }

                  return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: sharedStyles.unselected.color,
                tabBarInactiveTintColor: sharedStyles.selected.color,
              })}
            >
              <Tab.Screen name="Map" component={Map} />
              <Tab.Screen name="Schedule" component={DemoPage} />
              <Tab.Screen name="Profile" component={EmptyComponent} options={{ tabBarButton: () => null }} />
              <Tab.Screen name="Mail" component={MailPage} />
              <Tab.Screen name="Safety" component={SafetyPage} />
              {/*<Tab.Screen name="Directory" component={DirectoryPage} />*/}
            </Tab.Navigator>
          </View>
        )}
      </Stack.Screen>
      <Stack.Screen name={'ProfileOverlay'} component={ProfileOverlay} />
    </Stack.Navigator>
  );
}

export default NavBar;
