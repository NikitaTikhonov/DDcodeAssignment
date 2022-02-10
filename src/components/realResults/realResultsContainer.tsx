import React from 'react'
import { ImageSourcePropType } from 'react-native'
import RealResultsComponent from './realResultsComponent'

// const background = require('../../../assets/images/person1.jpg')
// const headingText = '"I feel 30 year younger that I am"'
// const achievement = 'Terri, 64, lost 200 pounds (91 kilos)'
const label = 'New'

interface Props {
  headingText: string
  achievement: string
  onPress: () => void
  background: ImageSourcePropType
}

const RealResultsContainer = ({
  headingText,
  achievement,
  onPress,
  background,
}: Props): JSX.Element => (
  <RealResultsComponent
    headingText={headingText}
    achievement={achievement}
    label={label}
    onPress={onPress}
    background={background}
  />
)

export default React.memo(RealResultsContainer)
