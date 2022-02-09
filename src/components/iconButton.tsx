import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

import { theme } from '../theme/theme'

const IconButton = () => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => console.log('AA')}>
      <Text>Id</Text>
    </TouchableOpacity>
  )
}

export default IconButton

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 100,
    backgroundColor: theme.white,
  },
})
