import React from 'react'
import { StyleSheet, View } from 'react-native'

import GuidesList from '../../components/guidesList'
import RealResultsListContainer from '../../components/resultsList/realResultsListContainer'
import SurveyContainer from '../../components/survey/surveyContainer'
import VisualGuidesList from '../../components/visualGuidesList'
import { theme } from '../../theme/theme'
import HomepageSection from './homepageSection'

const resultsHeader = 'Real people, real\results'
const guidesHeader = 'Discover and\nlearn'
const visualGuides = 'Visual guides'

const BodyComponent = (): JSX.Element => {
  return (
    <View style={styles.shadowHider}>
      <View style={styles.main}>
        <HomepageSection
          title={visualGuides}
          containerStyle={styles.visualGuidesSection}>
          <VisualGuidesList />
        </HomepageSection>
        <View style={styles.surveySection}>
          <SurveyContainer />
        </View>
        <HomepageSection
          title={guidesHeader}
          containerStyle={styles.guidesSection}>
          <GuidesList />
        </HomepageSection>
        <HomepageSection
          title={resultsHeader}
          containerStyle={styles.resultSection}>
          <RealResultsListContainer />
        </HomepageSection>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    borderTopLeftRadius: 30,

    backgroundColor: theme.white,
    paddingTop: 20,
    elevation: 4,
    shadowColor: theme.dark,
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    paddingBottom: 20,
  },
  shadowHider: {
    overflow: 'hidden',
    paddingTop: 1,

    backgroundColor: theme.headerMain,
  },
  visualGuidesSection: {
    height: 420,
  },
  surveySection: {
    marginTop: 60,
    paddingHorizontal: 10,
  },
  guidesSection: {
    marginTop: 60,
    height: 290,
  },
  resultSection: {
    marginTop: 60,
    height: 480,
  },
})

export default BodyComponent
