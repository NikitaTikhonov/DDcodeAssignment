import React from 'react'
import { StyleSheet } from 'react-native'
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated'
import BodyComponent from './bodyComponent'
import HeaderComponent from './headerComponent'
import { HEADER_HEIGHT } from '../../utils/constants'
import { theme } from '../../theme/theme'

export const HomeComponent = (): JSX.Element => {
  const scrollClamp = useSharedValue(0)

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      scrollClamp.value = event.contentOffset.y
    },
  })

  const animatedMargin = useAnimatedStyle(() => {
    const interpolateY = interpolate(
      scrollClamp.value,
      [0, HEADER_HEIGHT],
      [0, HEADER_HEIGHT],
      Extrapolate.CLAMP,
    )

    return {
      paddingTop: interpolateY,
    }
  })

  return (
    <Animated.ScrollView
      bounces={true}
      showsVerticalScrollIndicator={false}
      scrollEventThrottle={16}
      style={styles.main}
      onScroll={scrollHandler}>
      <HeaderComponent style={animatedMargin} />
      <BodyComponent />
    </Animated.ScrollView>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: theme.white,
  },
})
