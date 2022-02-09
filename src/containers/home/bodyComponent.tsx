import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Heading } from '../../components/headingText'
import IconButton from '../../components/iconButton'
import { currentDayName, greeting } from '../../services/date'
import { theme } from '../../theme/theme'

const BodyComponent = (): JSX.Element => {
  return (
    <View style={styles.main}>
      <View style={{ height: 250 }}>
        <Heading text={greeting()} fontSize={16} />
        <Heading text={currentDayName()} fontSize={16} />
        <IconButton />
      </View>
      <Heading text="Hello World 4" fontSize={16} />
      <IconButton />
      <View style={{ height: 250 }}>
        <Heading text={greeting()} fontSize={16} />
        <Heading text={currentDayName()} fontSize={16} />
        <IconButton />
        <Heading text="Hello World 4" fontSize={16} />
        <IconButton />
      </View>
      <Heading text={greeting()} fontSize={16} />
      <View style={{ height: 250 }}>
        <Heading text={currentDayName()} fontSize={16} />
        <IconButton />
        <Heading text="Hello World 4" fontSize={16} />
        <IconButton />
      </View>
      <View style={{ height: 250 }}>
        <Heading text={currentDayName()} fontSize={16} />
        <IconButton />
        <Heading text="Hello World 4" fontSize={16} />
        <IconButton />
      </View>
      <View style={{ height: 250 }}>
        <Heading text={currentDayName()} fontSize={16} />
        <IconButton />
        <Heading text="Hello World 4" fontSize={16} />
        <IconButton />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    borderTopLeftRadius: 30,
    paddingHorizontal: 10,
    backgroundColor: theme.white,
    paddingTop: 20,
    elevation: 4,
    shadowColor: theme.dark,
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  shadowHider: {
    overflow: 'hidden',
    paddingTop: 5,
    zIndex: 1,
  },
})

export default BodyComponent
