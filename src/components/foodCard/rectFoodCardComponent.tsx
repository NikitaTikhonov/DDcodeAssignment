import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native'
import React from 'react'

interface Props {
  backgroundColor: string
  image: ImageSourcePropType
  title: string
}

const RectFoodCardComponent = ({ image, title, backgroundColor }: Props) => {
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

export default RectFoodCardComponent

const styles = StyleSheet.create({
  container: {
    width: 170,
    height: 250,
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: '70%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  text: {
    paddingTop: 10,
    paddingLeft: 10,
    fontFamily: 'PublicSans-Medium',
    fontSize: 18,
  },
})
