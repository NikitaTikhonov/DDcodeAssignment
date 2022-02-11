import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Animated, { useAnimatedStyle } from 'react-native-reanimated'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import { currentDayName, greeting } from '../../services/date'
import { theme } from '../../theme/theme'
import {
  HEADER_HEIGHT,
  HEADER_HEIGHT_MULTIPLIER,
  isIOS,
} from '../../utils/constants'
import IconBar from './iconBar'

interface Props {
  style: ReturnType<typeof useAnimatedStyle>
}

const HeaderComponent = ({ style }: Props) => {
  return (
    <Animated.View style={[styles.container, style]}>
      <View style={styles.mainContent}>
        <View style={styles.iconsRow}>
          <View style={styles.placeholder} />
          <Text style={styles.day}>{currentDayName()}</Text>
          <View style={styles.iconGroup}>
            <IconBar />
          </View>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{greeting()}</Text>
        </View>
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
    paddingHorizontal: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  iconsRow: {
    width: '100%',
    paddingTop: isIOS ? getStatusBarHeight() : 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  placeholder: {
    flex: 1,
  },
  day: {
    flex: 1,
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 1.2,
    fontFamily: 'PublicSans-SemiBold',
  },
  iconGroup: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'nowrap',
  },
  textContainer: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    width: '100%',
    paddingBottom: 25,
  },
  text: {
    color: theme.dark,
    fontSize: 34,
    letterSpacing: 1.3,
    fontFamily: 'PublicSans-SemiBold',
  },
})
