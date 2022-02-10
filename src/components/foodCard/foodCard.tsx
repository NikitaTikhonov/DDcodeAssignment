import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native'
import React from 'react'
import { theme } from '../../theme/theme'

export interface Props {
  image: ImageSourcePropType
  title: string
  onPress: () => void
}

const FoodCard = ({ image, title, onPress }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}
      activeOpacity={0.6}>
      <Image source={image} style={styles.image} />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

export default FoodCard

const styles = StyleSheet.create({
  container: {
    width: 170,
    height: 170,
    borderRadius: 10,
    paddingBottom: 10,
    backgroundColor: theme.lightGreen,
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
