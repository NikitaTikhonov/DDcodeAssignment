import { AnimatedLottieViewProps } from 'lottie-react-native'
import { theme } from '../../theme/theme'

export const homeIcon = require('../../../assets/animations/home.json')
export const foodIcon = require('../../../assets/animations/food.json')

export enum AnimatedIconTypes {
  Home = 'home',
  Food = 'food',
}

export type ColorFilters = AnimatedLottieViewProps['colorFilters']

export const homeIconLayers = (focused: boolean): ColorFilters => {
  return [
    {
      keypath: 'Home Outlines',
      color: focused ? theme.primary : theme.inactive,
    },
  ]
}

export const foodIconLayers = (focused: boolean): ColorFilters => {
  return [
    { keypath: 'Pan', color: focused ? theme.primary : theme.inactive },
    { keypath: 'Vegetables', color: focused ? theme.primary : theme.inactive },
  ]
}

export const getSource = (type: AnimatedIconTypes) => {
  if (type === AnimatedIconTypes.Home) {
    return homeIcon
  } else {
    return foodIcon
  }
}

export const getFilters = (type: AnimatedIconTypes) => {
  if (type === AnimatedIconTypes.Home) {
    return homeIconLayers
  } else {
    return foodIconLayers
  }
}
