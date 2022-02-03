import React from 'react';
import LottieView from 'lottie-react-native';
import {Animated} from 'react-native';
import {ColorFilters} from './animatedTabIcon.vm';

interface AnimatedIconProps {
  animation: Animated.Value;
  source: string;
  colorFilters: ColorFilters;
}

export const AnimatedIconComponent = React.memo(
  ({animation, source, colorFilters}: AnimatedIconProps): JSX.Element => {
    return (
      <LottieView
        colorFilters={colorFilters}
        progress={animation}
        source={source}
      />
    );
  },
);
