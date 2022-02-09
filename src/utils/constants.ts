import { Platform } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'

export const isIOS = Platform.OS === 'ios'
export const SCROLL_MULTIPLIER = isIOS ? 2 : 3.8
export const HEADER_HEIGHT = isIOS
  ? 100 + getStatusBarHeight()
  : 80 + getStatusBarHeight()
