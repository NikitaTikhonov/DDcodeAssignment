import React from 'react'
import { StyleSheet, Text } from 'react-native'
import Animated, { useAnimatedStyle } from 'react-native-reanimated'
import { theme } from '../../theme/theme'
import { HEADER_HEIGHT } from '../../utils/constants'

interface Props {
  style: ReturnType<typeof useAnimatedStyle>
}

const HeaderComponent = ({ style }: Props) => {
  return (
    <Animated.View style={[styles.main, style]}>
      <Text style={styles.text}>Header</Text>
    </Animated.View>
  )
}

export default HeaderComponent

const styles = StyleSheet.create({
  main: {
    position: 'absolute',
    height: HEADER_HEIGHT,
    backgroundColor: theme.headerMain,
    top: 0,
    left: 0,
    right: 0,
    zIndex: 0,
    elevation: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontSize: 30,
  },
})
