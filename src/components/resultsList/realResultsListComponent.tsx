import { FlatList, ListRenderItem, StyleSheet } from 'react-native'
import React from 'react'
import RealResultsContainer from '../realResults/realResultsContainer'
import { Result } from '../../models/result'
import HorizontalListSeparator from '../horizontalListSeparator'

interface Props {
  results: Array<Result>
}

const renderResult: ListRenderItem<Result> = result => {
  if (result.index === 1) {
    return <RealResultsContainer onPress={() => undefined} {...result.item} />
  }
  return (
    <RealResultsContainer
      onPress={() => undefined}
      {...result.item}
      extraStyle={styles.extraMargin}
    />
  )
}

const renderSeparator = () => <HorizontalListSeparator width={20} />

//TODO: implement carousel behavior
const RealResultsListComponent = ({ results }: Props) => {
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      data={results}
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

export default RealResultsListComponent
