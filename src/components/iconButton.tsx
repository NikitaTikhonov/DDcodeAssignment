import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

import { theme } from '../theme/theme'

const IconButton = (): JSX.Element => {
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
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 100,
    backgroundColor: theme.white,
  },
})
