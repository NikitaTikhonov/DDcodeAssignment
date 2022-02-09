import React from 'react'
import { StyleSheet } from 'react-native'
import Animated from 'react-native-reanimated'
import { Heading } from '../../components/headingText'
import { theme } from '../../theme/theme'
import { HEADER_HEIGHT } from '../../utils/constants'

const BodyComponent = (): JSX.Element => {
  return (
    <Animated.View style={styles.main}>
      <Heading text="Hello World 2" fontSize={16} />
      <Heading text="Hello World 3" fontSize={16} />
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
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  main: {
    marginTop: HEADER_HEIGHT,
    backgroundColor: theme.primary,
    paddingTop: 20,
  },
})

export default BodyComponent
