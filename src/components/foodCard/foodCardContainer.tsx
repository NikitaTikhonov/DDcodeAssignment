import { ImageSourcePropType } from 'react-native'
import React from 'react'
import RectFoodCardComponent from './rectFoodCardComponent'
import FoodCardComponent from './foodCardComponent'

export enum CardType {
  Square,
  Rect,
}

interface Props {
  variant: CardType
  backgroundColor: string
  image: ImageSourcePropType
  title: string
}

const FoodCardContainer = ({ variant, ...rest }: Props): JSX.Element => {
  if (variant === CardType.Rect) {
    return <RectFoodCardComponent {...rest} />
  } else {
    return <FoodCardComponent {...rest} />
  }
}

export default React.memo(FoodCardContainer)
