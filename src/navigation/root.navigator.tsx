import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainTabNavigator} from './mainTab.navigator';

export const RootNavigator = (): JSX.Element => {
  return (
    <NavigationContainer>
      <MainTabNavigator />
    </NavigationContainer>
  );
};
