import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Animated, { useAnimatedStyle } from 'react-native-reanimated'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import { Heading } from '../../components/headingText'
import { currentDayName, greeting } from '../../services/date'
import { theme } from '../../theme/theme'
import { HEADER_HEIGHT } from '../../utils/constants'

interface Props {
  style: ReturnType<typeof useAnimatedStyle>
}

const HeaderComponent = ({ style }: Props) => {
  console.log(getStatusBarHeight())

  return (
    <Animated.View style={[styles.container, style]}>
      <View>
        <Text>{currentDayName()}</Text>
      </View>
      <Heading text={greeting()} fontSize={32} />
    </Animated.View>
  )
}

export default HeaderComponent

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: HEADER_HEIGHT + 40,
    paddingBottom: 20,
    paddingTop: getStatusBarHeight(true),
    backgroundColor: theme.headerMain,
    top: 0,
    left: 0,
    right: 0,
    zIndex: 0,
    elevation: 0,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 30,
  },
})
