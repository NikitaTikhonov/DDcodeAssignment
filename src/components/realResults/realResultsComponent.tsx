import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Dimensions,
  ImageSourcePropType,
  StyleProp,
  ViewStyle,
} from 'react-native'
import React from 'react'
import { theme } from '../../theme/theme'
import Label from '../label'
const windowWidth = Dimensions.get('window').width

interface Props {
  headingText: string
  achievement: string
  label: string
  onPress: () => void
  background: ImageSourcePropType
  extraStyle?: StyleProp<ViewStyle>
}

const RealResultsComponent = ({
  headingText,
  achievement,
  label,
  background,
  onPress,
  extraStyle,
}: Props): JSX.Element => {
  return (
    <TouchableOpacity
      style={styles.touchable}
      activeOpacity={0.7}
      onPress={onPress}>
      <ImageBackground
        imageStyle={styles.imageStyle}
        style={[styles.container, extraStyle]}
        source={background}>
        <View style={styles.content}>
          <Label text={label} />
          <Text style={styles.headerText}>{headingText}</Text>
          <Text style={styles.achievement}>{achievement}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  )
}

export default RealResultsComponent

const styles = StyleSheet.create({
  touchable: {},
  container: {
    width: windowWidth * 0.65,
    height: 400,
    justifyContent: 'flex-end',
  },
  imageStyle: {
    borderRadius: 10,
  },
  content: {
    width: '100%',
    height: '30%',
    paddingHorizontal: 10,
    paddingBottom: 10,
    backgroundColor: theme.semitransparentDark,
    borderRadius: 10,
    justifyContent: 'space-evenly',
  },
  labelContainer: {
    position: 'absolute',
    top: -12.5,
    left: 15,
    backgroundColor: 'yellow',
    width: 60,
    height: 25,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelText: {
    fontFamily: 'PublicSans-SemiBold',
    fontSize: 16,
    textTransform: 'uppercase',
  },
  headerText: {
    fontFamily: 'PublicSans-Medium',
    fontSize: 20,
    color: theme.white,
  },
  achievement: {
    fontFamily: 'PublicSans-Thin',
    fontSize: windowWidth > 365 ? 14 : 13,
    color: theme.white,
  },
})
