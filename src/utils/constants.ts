import { Platform } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'

export const isIOS = Platform.OS === 'ios'
export const HEADER_HEIGHT = isIOS
  ? 120 + getStatusBarHeight()
  : 80 + getStatusBarHeight()
