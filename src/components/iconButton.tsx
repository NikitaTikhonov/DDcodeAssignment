import { StyleSheet, TouchableOpacity } from 'react-native'

import React from 'react'

import { theme } from '../theme/theme'

interface Props {
  onPress: () => void
  icon: JSX.Element
}

const IconButton = ({ onPress, icon }: Props): JSX.Element => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {icon}
    </TouchableOpacity>
  )
}

export default IconButton

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 100,
    backgroundColor: theme.white,
  },
})
