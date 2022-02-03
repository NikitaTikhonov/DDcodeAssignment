import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {Heading} from '../../components/headingText';
import {theme} from '../../theme/theme';

export const HomeComponent = (): JSX.Element => {
  return (
    <SafeAreaView style={style.container}>
      <Heading text="Hello World GG" fontSize={16} />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
