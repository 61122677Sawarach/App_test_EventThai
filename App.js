import * as React from 'react';
import { Text, View, Button, Stack } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import Entypo from 'react-native-vector-icons/Entypo';

import Home from "./screens/Home";
import Create from "./screens/Create";
import Detail from "./screens/Detail";
import Login from './screens/Login';
import Register from './screens/Register';

const Tab = createBottomTabNavigator();

Entypo.loadFont();

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" drawerType='slide' options={{

      }}>
        <Stack.Screen name="Home" component={Home} options={{
          gestureEnabled: false,
        }}/>
        <Stack.Screen name="Create" component={Create} options={{
          gestureEnabled: false,
        }} />
        <Stack.Screen name="Detail" component={Detail} options={{
          gestureEnabled: false,
        }} />
        <Stack.Screen name="Register" component={Register} options={{
          gestureEnabled: false,
        }} />
        <Stack.Screen name="Login" component={Login} options={{
          gestureEnabled: false,
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

