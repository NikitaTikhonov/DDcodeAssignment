import { FlatList, ListRenderItem, StyleSheet } from 'react-native'
import React from 'react'
import HorizontalListSeparator from './horizontalListSeparator'
import RectFoodCard, { Props } from './foodCard/rectFoodCard'
import { theme } from '../theme/theme'

const guides: Array<Props> = [
  {
    backgroundColor: theme.lightOrange,
    image: require('../../assets/images/meat.jpeg'),
    title: 'Meat, seafood &\neggs',
    onPress: () => undefined,
  },
  {
    backgroundColor: theme.lightBlue,
    image: require('../../assets/images/vegetables.jpeg'),
    title: 'Vegetables',
    onPress: () => undefined,
  },
  {
    backgroundColor: theme.lightGrayGreen,
    image: require('../../assets/images/plangBased.jpeg'),
    title: 'All guides',
    onPress: () => undefined,
  },
  {
    backgroundColor: theme.lightGreen,
    image: require('../../assets/images/Dairy.jpeg'),
    title: 'Dairy',
    onPress: () => undefined,
  },
]

const renderSeparator = () => <HorizontalListSeparator width={20} />

const renderResult: ListRenderItem<Props> = result => {
  if (result.index === 0) {
    return <RectFoodCard {...result.item} extraStyle={styles.extraMargin} />
  }
  return <RectFoodCard {...result.item} />
}

const VisualGuidesList = () => {
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

export default VisualGuidesList
