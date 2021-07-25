// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import EventScreen from '../screens/Event';
import EventsScreen from '../screens/Events';
import MapScreen from '../screens/Map';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Events() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Events" component={EventsScreen} />
      <Stack.Screen name="Event" component={EventScreen} />
    </Stack.Navigator>
  );
}

function Map() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MapScreen" component={MapScreen} />
    </Stack.Navigator>
  );
}

function AppNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Events" component={Events} />
        <Tab.Screen name="Map" component={Map} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
