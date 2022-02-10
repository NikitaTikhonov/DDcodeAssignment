import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native'
import React from 'react'
import { theme } from '../../theme/theme'

interface Props {
  text: string
  onPress: () => void
  extraStyle?: StyleProp<ViewStyle>
}

const ActionButton = ({ text, onPress, extraStyle }: Props) => {
  return (
    <TouchableOpacity
      style={[styles.container, extraStyle]}
      onPress={onPress}
      activeOpacity={0.5}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

export default ActionButton

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    width: 170,
    height: 30,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: theme.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: theme.white,
    fontFamily: 'PublicSans-Medium',
  },
})
