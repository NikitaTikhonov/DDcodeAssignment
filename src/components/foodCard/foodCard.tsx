import {
  Image,
  ImageSourcePropType,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native'
import React from 'react'
import { theme } from '../../theme/theme'

export interface Props {
  image: ImageSourcePropType
  title: string
  onPress: () => void
  extraStyle?: StyleProp<ViewStyle>
}

const FoodCard = ({ image, title, onPress, extraStyle }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, extraStyle]}
      activeOpacity={0.6}>
      <Image source={image} style={styles.image} />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

export default FoodCard

const styles = StyleSheet.create({
  container: {
    width: 230,
    height: 230,
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
