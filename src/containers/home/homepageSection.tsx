import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'
import React from 'react'
import { theme } from '../../theme/theme'

interface Props {
  title: string
  children: React.ReactNode
  containerStyle: StyleProp<ViewStyle>
}

const HomepageSection = ({
  title,
  children,
  containerStyle,
}: Props): JSX.Element => {
  return (
    <View style={containerStyle}>
      <Text style={styles.title}>{title}</Text>
      {children}
    </View>
  )
}

export default HomepageSection

const styles = StyleSheet.create({
  title: {
    fontFamily: 'PublicSans-SemiBold',
    fontSize: 22,
    color: theme.dark,
    marginBottom: 20,
  },
})
