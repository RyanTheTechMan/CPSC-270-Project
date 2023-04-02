import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomTab from "./CustomTab";
import sharedStyles from "./Shared/styles"

// Import pages to be used in the bottom tab navigator
import Map from './Pages/Map';
import DemoPage from './Pages/DemoPage';
import SafetyPage from "./Pages/Safety";
import MailPage from "./Pages/Mail";
import {DiningPage, DiningStack, commonsMenu, cavernMenu, freshensMenu} from "./Menus";

const Tab = createBottomTabNavigator();
function NavBar() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerStyle: {
          backgroundColor: sharedStyles.header.backgroundColor,
        },
        tabBarButton: (props) => { // Offset the middle tab buttons to make room for the profile icon
          if (route.name === 'Directory') {
            return <CustomTab {...props} style={{marginLeft: 40}} />;
          } else if (route.name === 'Dining') {
            return <CustomTab {...props} style={{marginRight: 40}} />;
          } else {
            return <CustomTab {...props} />;
          }
        },
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          switch (route.name) {
            case 'Mail':
              iconName = focused ? 'map' : 'map-outline';
              break;
            case 'Directory':
              iconName = focused ? 'list' : 'list-outline';
              break;
            case 'Dining':
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
      <Tab.Screen name="Mail" component={MailPage} />
      <Tab.Screen name="Dining" component={DiningStack}/>
      <Tab.Screen name="Directory" component={DemoPage} />
      <Tab.Screen name="Safety" component={SafetyPage} />
    </Tab.Navigator>
  );
}

export default NavBar;