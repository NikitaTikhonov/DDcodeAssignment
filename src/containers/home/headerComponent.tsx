import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Animated, { useAnimatedStyle } from 'react-native-reanimated'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import { Heading } from '../../components/headingText'
import IconButton from '../../components/iconButton'
import { currentDayName, greeting } from '../../services/date'
import { theme } from '../../theme/theme'
import { HEADER_HEIGHT, HEADER_HEIGHT_MULTIPLIER } from '../../utils/constants'

interface Props {
  style: ReturnType<typeof useAnimatedStyle>
}

const HeaderComponent = ({ style }: Props) => {
  return (
    <Animated.View style={[styles.container, style]}>
      <View style={styles.mainContent}>
        <View style={styles.iconsRow}>
          <Text style={styles.day}>{currentDayName()}</Text>
          <View style={styles.iconGroup}>
            <IconButton />
            <IconButton />
          </View>
        </View>
        <Heading text={greeting()} fontSize={32} />
      </View>
    </Animated.View>
  )
}

export default HeaderComponent

const styles = StyleSheet.create({
  container: {
    height: HEADER_HEIGHT * HEADER_HEIGHT_MULTIPLIER,
    backgroundColor: theme.headerMain,
  },
  mainContent: {
    minHeight: HEADER_HEIGHT,
    height: HEADER_HEIGHT,
    backgroundColor: theme.headerMain,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  iconsRow: {
    width: '100%',
    paddingTop: getStatusBarHeight() * 0.8,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  day: {
    textAlign: 'right',
    backgroundColor: 'pink',
  },
  iconGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'nowrap',
    width: 70,
  },
  text: {
    color: 'black',
    fontSize: 30,
  },
})
