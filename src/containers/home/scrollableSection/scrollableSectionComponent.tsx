import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Heading } from '../../../components/headingText'

interface Props {
  title: string
  children: JSX.Element
}

const ScrollableSectionComponent = ({ title, children }: Props): JSX.Element => {
  return (
    <View>
      <Heading fontSize={24}>{title}</Heading>
      {children}
    </View>
  )
}

export default ScrollableSectionComponent

const styles = StyleSheet.create({})
