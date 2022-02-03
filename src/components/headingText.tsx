import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {theme} from '../theme/theme';

interface HeadingProps {
  text: string;
  fontSize: number;
}

export const Heading = ({fontSize, text}: HeadingProps): JSX.Element => (
  <Text style={{...styles.main, fontSize: fontSize}}>{text}</Text>
);

const styles = StyleSheet.create({
  main: {
    fontFamily: 'PublicSans-SemiBold',
    color: theme.white,
  },
});
