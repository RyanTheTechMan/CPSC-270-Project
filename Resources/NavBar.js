import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Import pages to be used in the bottom tab navigator
import Map from './Pages/Map';
import DemoPage from './Pages/DemoPage';
import CustomTab from "./CustomTab";
import SafetyPage from "./Pages/Safety"

const Tab = createBottomTabNavigator();
function NavBar() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarButton: (props) => { // Offset the middle tab buttons to make room for the profile icon
          if (route.name === 'Directory') {
            return <CustomTab {...props} style={{marginLeft: 40}} />;
          } else if (route.name === 'Schedule') {
            return <CustomTab {...props} style={{marginRight: 40}} />;
          } else {
            return <CustomTab {...props} />;
          }
        },
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          switch (route.name) {
            case 'Map':
              iconName = focused ? 'map' : 'map-outline';
              break;
            case 'Directory':
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
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Map" component={Map} />
      <Tab.Screen name="Schedule" component={DemoPage} />
      <Tab.Screen name="Directory" component={DemoPage} />
      <Tab.Screen name="Safety" component={SafetyPage} />
    </Tab.Navigator>
  );
}

export default NavBar;