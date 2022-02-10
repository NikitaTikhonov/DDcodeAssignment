import React from 'react'
import { StyleSheet, View } from 'react-native'
import IconButton from '../../components/iconButton'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMagnifyingGlass, faPerson } from '@fortawesome/free-solid-svg-icons'

const IconBar = (): JSX.Element => {
  const onPress = () => undefined

  return (
    <View style={styles.container}>
      <IconButton
        onPress={onPress}
        icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
      />
      <IconButton
        onPress={onPress}
        icon={<FontAwesomeIcon icon={faPerson} />}
      />
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
