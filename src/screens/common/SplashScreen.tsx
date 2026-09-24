import { Animated, StatusBar, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { moderateScale } from 'react-native-size-matters';

import { COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/fonts';
import type { RootStackScreenProps } from '../../navigation/types';

const SPLASH_DURATION_MS = 2000;
const FADE_DURATION_MS = 600;

export default function SplashScreen({
  navigation,
}: RootStackScreenProps<'splash-screen'>) {
  const opacity = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(0.9)).current;

  useEffect(() => {
    const animation = Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: FADE_DURATION_MS,
        useNativeDriver: true,
      }),
      Animated.spring(scale, {
        toValue: 1,
        friction: 5,
        useNativeDriver: true,
      }),
    ]);
    animation.start();

    const timer = setTimeout(() => {
      navigation.replace('auth-stack', { screen: 'login' });
    }, SPLASH_DURATION_MS);

    return () => {
      animation.stop();
      clearTimeout(timer);
    };
  }, [navigation, opacity, scale]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Animated.View style={{ opacity, transform: [{ scale }] }}>
        <Text style={styles.logo}>
          Code<Text style={styles.logoAccent}>shala</Text>
        </Text>
        <Text style={styles.tagline}>Learn. Build. Grow.</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
  },
  logo: {
    fontFamily: FONTS.extraBold,
    fontSize: moderateScale(40),
    color: COLORS.white,
    textAlign: 'center',
  },
  logoAccent: {
    color: COLORS.secondary,
  },
  tagline: {
    fontFamily: FONTS.regular,
    fontSize: moderateScale(14),
    color: COLORS.white,
    textAlign: 'center',
    marginTop: moderateScale(8),
    opacity: 0.8,
  },
});
