import React from 'react';
import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {HomeContainer, HOME_ROUTE} from '../containers/home/homeContainer';
import {
  FallbackContainer,
  FALLBACK_ROUTE,
} from '../containers/fallback/fallbackContainer';
import {AnimatedIconContainer} from './animatedTabIcon/animatedIconContainer';
import {AnimatedIconTypes} from './animatedTabIcon/animatedTabIcon.vm';

export type MainTabList = {
  [HOME_ROUTE]: undefined;
  [FALLBACK_ROUTE]: undefined;
};

export type MainTabNavigatorNavProp = BottomTabNavigationProp<MainTabList>;

const Tab = createBottomTabNavigator<MainTabList>();

export const MainTabNavigator = (): JSX.Element => {
  return (
    <Tab.Navigator initialRouteName={HOME_ROUTE}>
      <Tab.Screen
        name={HOME_ROUTE}
        component={HomeContainer}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: e => (
            <AnimatedIconContainer
              focused={e.focused}
              type={AnimatedIconTypes.Home}
            />
          ),
        }}
      />
      <Tab.Screen
        name={FALLBACK_ROUTE}
        component={FallbackContainer}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: e => (
            <AnimatedIconContainer
              focused={e.focused}
              type={AnimatedIconTypes.Food}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
