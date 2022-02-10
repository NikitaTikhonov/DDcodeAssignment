import React from 'react'
import SurveyComponent from './surveyComponent'

const headerText = 'Eat with\nconfidence'
const headerDetails =
  'Take our short survey to get\na meal plan tailored to you'
const buttonText = 'Start survey'

const background = require('../../../assets/images/surveyBG.png')

const SurveyContainer = (): JSX.Element => {
  return (
    <SurveyComponent
      headerText={headerText}
      headerDetails={headerDetails}
      buttonText={buttonText}
      onPress={() => undefined}
      background={background}
    />
  )
}

export default SurveyContainer
