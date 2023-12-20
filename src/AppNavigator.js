import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './MainScreen';
import AnotherScreen from '../AnotherScreen';
import SplashScreen from './Splash';
import CartScreen from './Cart';
import SearchPage from './Search';
import MenuPage from './Menu';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MainScreen"
        component={MainScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AnotherScreen"
        component={AnotherScreen}
        options={{ headerShown: false }}
      />
        <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="SearchPage"
        component={SearchPage}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name=" MenuPage"
        component={ MenuPage}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
