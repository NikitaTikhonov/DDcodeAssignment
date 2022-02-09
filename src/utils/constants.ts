import { Platform, StatusBar } from 'react-native'

const androidStatusBarHeight = StatusBar.currentHeight ?? 0
const isIOS = Platform.OS === 'ios'
export const HEADER_HEIGHT = isIOS ? 110 : 70 + androidStatusBarHeight
