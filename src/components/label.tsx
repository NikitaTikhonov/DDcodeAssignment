import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { theme } from '../theme/theme'

interface Props {
  text: string
}

const Label = ({ text }: Props): JSX.Element => {
  return (
    <View style={styles.labelContainer}>
      <Text style={styles.labelText}>{text}</Text>
    </View>
  )
}

export default Label

const styles = StyleSheet.create({
  labelContainer: {
    position: 'absolute',
    top: -12.5,
    left: 15,
    backgroundColor: theme.yellow,
    width: 60,
    height: 25,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelText: {
    fontFamily: 'PublicSans-SemiBold',
    fontSize: 16,
    textTransform: 'uppercase',
  },
})
