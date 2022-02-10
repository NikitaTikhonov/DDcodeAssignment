import React from 'react'
import { StyleSheet, View } from 'react-native'
import IconButton from '../../components/iconButton'

const IconBar = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <IconButton />
      <IconButton />
    </View>
  )
}

export default IconBar

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 90,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})
