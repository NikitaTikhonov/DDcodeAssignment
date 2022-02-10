import { FlatList, ListRenderItem } from 'react-native'
import React from 'react'
import RealResultsContainer from '../realResults/realResultsContainer'
import { Result } from '../../models/result'
import HorizontalListSeparator from '../horizontalListSeparator'

interface Props {
  results: Array<Result>
}

const renderResult: ListRenderItem<Result> = result => {
  result.item
  return <RealResultsContainer onPress={() => undefined} {...result.item} />
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

export default RealResultsListComponent
