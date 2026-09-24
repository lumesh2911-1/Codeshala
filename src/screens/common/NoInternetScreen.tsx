import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { moderateScale } from 'react-native-size-matters';

import { COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/fonts';

export default function NoInternetScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>No Internet Connection</Text>
      <Text style={styles.subtitle}>
        Please check your connection and try again.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: moderateScale(24),
    backgroundColor: COLORS.lightBg,
  },
  title: {
    fontFamily: FONTS.bold,
    fontSize: moderateScale(20),
    color: COLORS.black,
    marginBottom: moderateScale(8),
  },
  subtitle: {
    fontFamily: FONTS.regular,
    fontSize: moderateScale(14),
    color: COLORS.black,
    textAlign: 'center',
  },
});
