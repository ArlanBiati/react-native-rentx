import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const { Navigator, Screen } = createBottomTabNavigator();

import { AppStackRoutes } from './app.stack.routes';

import { Home } from '../screens/Home';
import { MyCars } from '../screens/MyCars';
import { Confirmation } from '../screens/Confirmation';

export function AppTabRoutes() {
  return (
    <Navigator
      screenOptions={{
      headerShown: false
      }}
    >
      <Screen name='Home' component={AppStackRoutes} />
      <Screen name='Profile' component={Home} />
      <Screen name='MyCars' component={MyCars} />
    </Navigator>
  );
}
