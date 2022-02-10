import {
  ImageBackground,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import React from 'react'
import { theme } from '../../theme/theme'
import ActionButton from './actionButton'
interface Props {
  headerText: string
  headerDetails: string
  buttonText: string
  onPress: () => void
  background: ImageSourcePropType
}

const SurveyComponent = ({
  onPress,
  headerDetails,
  headerText,
  buttonText,
  background,
}: Props): JSX.Element => {
  return (
    <ImageBackground
      style={styles.container}
      source={background}
      imageStyle={styles.backgroundImage}>
      <View style={styles.content}>
        <Text style={styles.headerText}>{headerText}</Text>
        <Text style={styles.headerDetails}>{headerDetails}</Text>
        <ActionButton
          text={buttonText}
          extraStyle={styles.buttonStyle}
          onPress={onPress}
        />
      </View>
    </ImageBackground>
  )
}

export default SurveyComponent

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 400,
  },
  content: {
    padding: 15,
  },
  backgroundImage: {
    borderRadius: 10,
  },
  headerText: {
    fontFamily: 'PublicSans-SemiBold',
    fontSize: 26,
    color: theme.white,
  },
  headerDetails: {
    marginTop: 5,
    fontFamily: 'PublicSans-Thin',
    fontSize: 15,
    color: theme.white,
  },
  buttonStyle: {
    marginTop: 10,
  },
})
