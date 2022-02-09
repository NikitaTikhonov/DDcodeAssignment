import React, { useRef } from 'react'
import { Animated, Easing } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { AnimatedIconComponent } from './animatedIconComponent'
import { AnimatedIconTypes, getFilters, getSource } from './animatedTabIcon.vm'
import { MainTabNavigatorNavProp } from '../mainTab.navigator'

interface AnimatedIconContainerProps {
  focused: boolean
  type: AnimatedIconTypes
}

export const AnimatedIconContainer = React.memo(
  ({ focused, type }: AnimatedIconContainerProps): JSX.Element => {
    const animation = useRef(new Animated.Value(0)).current
    const navigation = useNavigation<MainTabNavigatorNavProp>()

    React.useEffect(() => {
      const show = () => {
        Animated.timing(animation, {
          toValue: 1,
          duration: 1000,
          easing: Easing.ease,
          useNativeDriver: true,
        }).start()
      }
      const unsubscribe = navigation.addListener('tabPress', () => {
        animation.setValue(0)
        show()
      })

      return unsubscribe
    }, [navigation, animation])

    return (
      <AnimatedIconComponent
        animation={animation}
        source={getSource(type)}
        colorFilters={getFilters(type)(focused)}
      />
    )
  },
)
