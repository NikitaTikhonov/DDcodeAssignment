import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native'
import React from 'react'
import { theme } from '../../theme/theme'

interface Props {
  backgroundColor: string
  image: ImageSourcePropType
  title: string
}

const FoodCardComponent = ({ image, title, backgroundColor }: Props) => {
  const background = { backgroundColor }
  return (
    <TouchableOpacity
      style={[styles.container, background]}
      activeOpacity={0.6}>
      <Image source={image} style={styles.image} />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

export default FoodCardComponent

const styles = StyleSheet.create({
  container: {
    width: 170,
    height: 170,
    borderRadius: 10,
    paddingBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '70%',
    height: '65%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  text: {
    fontFamily: 'PublicSans-Medium',
    fontSize: 18,
  },
})
