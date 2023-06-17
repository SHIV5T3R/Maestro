import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {AboutScreen} from '../screens/About';
import {HomeScreen} from '../screens/Home';
import {DEFAULT_STACK_OPTIONS} from '../utils/constants';

// Param props for screens need to be defined here. Just setting undefined for now.
export type StackParamList = {
  Home: undefined;
  About: undefined;
};

// Init the default stack navigator for the project.
const RootStack = createNativeStackNavigator<StackParamList>();

export const RootNavigation: React.FC = () => (
  <RootStack.Navigator screenOptions={DEFAULT_STACK_OPTIONS}>
    <RootStack.Screen
      name="Home"
      component={HomeScreen}
      options={DEFAULT_STACK_OPTIONS}
    />
    <RootStack.Screen
      name="About"
      component={AboutScreen}
      options={DEFAULT_STACK_OPTIONS}
    />
    {/* Any new routes should be added here. */}
  </RootStack.Navigator>
);
