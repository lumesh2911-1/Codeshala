import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { moderateScale } from 'react-native-size-matters';

import { COLORS } from '../constants/colors';
import { FONTS } from '../constants/fonts';

export default function MainStackNavigator() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>MainStackNavigator</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.lightBg,
  },
  text: {
    fontFamily: FONTS.medium,
    fontSize: moderateScale(16),
    color: COLORS.black,
  },
});
