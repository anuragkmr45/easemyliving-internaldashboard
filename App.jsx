import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LandingScreen from './screens/landing/index';
import LoginScreen from './screens/auth/LoginScreen';
import HomeScreen from './screens/home/index';
import EditingScreen from './screens/editor/index'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer theme={DefaultTheme}>
      <Stack.Navigator initialRouteName="EaseMyLiving">
        <Stack.Screen
          name="EaseMyLiving"
          component={LandingScreen}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ header: () => null }}
          />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Editing"
          component={EditingScreen}
          options={{ header: () => null }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
