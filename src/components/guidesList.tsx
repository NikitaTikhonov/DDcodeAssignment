import { ListRenderItem, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import HorizontalListSeparator from './horizontalListSeparator'
import FoodCard, { Props } from './foodCard/foodCard'

const guides: Array<Props> = [
  {
    image: require('../../assets/images/avocado.png'),
    title: 'Keto guide',
    onPress: () => undefined,
  },
  {
    image: require('../../assets/images/scales.png'),
    title: 'Lose weight',
    onPress: () => undefined,
  },
  {
    image: require('../../assets/images/plate.png'),
    title: 'All guides',
    onPress: () => undefined,
  },
]

const renderSeparator = () => <HorizontalListSeparator width={20} />

const renderResult: ListRenderItem<Props> = result => {
  if (result.index === 0) {
    return <FoodCard {...result.item} extraStyle={styles.extraMargin} />
  }
  return <FoodCard {...result.item} />
}

const GuidesList = () => {
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      data={guides}
      renderItem={renderResult}
      horizontal={true}
      ItemSeparatorComponent={renderSeparator}
    />
  )
}

const styles = StyleSheet.create({
  extraMargin: {
    marginLeft: 10,
  },
})

export default GuidesList
