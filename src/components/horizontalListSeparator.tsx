import { View } from 'react-native'
import React from 'react'

interface Props {
  width: number
}

const HorizontalListSeparator = ({ width }: Props): JSX.Element => {
  const separatorWidth = { width }
  return <View style={{ ...separatorWidth }} />
}

export default React.memo(HorizontalListSeparator)
