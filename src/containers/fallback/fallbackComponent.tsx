import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import { Heading } from '../../components/headingText'
import { theme } from '../../theme/theme'

export const FallbackComponent = (): JSX.Element => {
  return (
    <SafeAreaView style={style.container}>
      <Heading text="This feature will be done later" fontSize={32} />
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
