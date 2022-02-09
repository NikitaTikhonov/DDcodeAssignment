import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Heading } from '../../components/headingText'
import { currentDayName, greeting } from '../../services/date'
import { theme } from '../../theme/theme'
import { HEADER_HEIGHT } from '../../utils/constants'

const BodyComponent = (): JSX.Element => {
  return (
    <View style={styles.shadowHider}>
      <View style={styles.main}>
        <Heading text={greeting()} fontSize={16} />
        <Heading text={currentDayName()} fontSize={16} />
        <Heading text="Hello World 4" fontSize={16} />
        <Heading text="Hello World 5" fontSize={16} />
        <Heading text="Hello World GG" fontSize={16} />
        <Heading text="Hello World GG" fontSize={16} />
        <Heading text="Hello World GG" fontSize={16} />
        <Heading text="Hello World GG" fontSize={22} />
        <Heading text="Hello World GG" fontSize={16} />
        <Heading text="Hello World GG" fontSize={16} />
        <Heading text="Hello World GG" fontSize={33} />
        <Heading text="Hello World GG" fontSize={16} />
        <Heading text="Hello World LAST" fontSize={90} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    borderTopLeftRadius: 30,
    paddingLeft: 10,
    marginTop: HEADER_HEIGHT,
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
  },
})

export default BodyComponent
