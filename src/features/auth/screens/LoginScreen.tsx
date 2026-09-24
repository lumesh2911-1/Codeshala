import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, { useCallback, useRef, useState } from 'react';
import { moderateScale } from 'react-native-size-matters';
import { SafeAreaView } from 'react-native-safe-area-context';

import { COLORS } from '../../../constants/colors';
import { FONTS } from '../../../constants/fonts';

const KEYBOARD_BEHAVIOR = Platform.OS === 'ios' ? 'padding' : undefined;

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const passwordRef = useRef<React.ComponentRef<typeof TextInput>>(null);

  const isDisabled = !email.trim() || !password;

  const focusPassword = useCallback(() => passwordRef.current?.focus(), []);

  const handleLogin = useCallback(() => {
    if (isDisabled) {
      return;
    }
  }, [isDisabled]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <KeyboardAvoidingView
        style={styles.container}
        behavior={KEYBOARD_BEHAVIOR}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Welcome back</Text>
          <Text style={styles.subtitle}>Log in to continue to Codeshala</Text>
        </View>

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="you@example.com"
          placeholderTextColor={COLORS.placeholder}
          keyboardType="email-address"
          autoCapitalize="none"
          autoComplete="email"
          textContentType="emailAddress"
          returnKeyType="next"
          submitBehavior="submit"
          onSubmitEditing={focusPassword}
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          ref={passwordRef}
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your password"
          placeholderTextColor={COLORS.placeholder}
          secureTextEntry
          autoComplete="password"
          textContentType="password"
          returnKeyType="done"
          onSubmitEditing={handleLogin}
        />

        <Pressable
          onPress={handleLogin}
          disabled={isDisabled}
          style={({ pressed }) => [
            styles.button,
            isDisabled && styles.buttonDisabled,
            pressed && styles.buttonPressed,
          ]}
        >
          <Text style={styles.buttonText}>Log In</Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.lightBg,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: moderateScale(24),
  },
  header: {
    marginBottom: moderateScale(32),
  },
  title: {
    fontFamily: FONTS.bold,
    fontSize: moderateScale(28),
    color: COLORS.black,
  },
  subtitle: {
    fontFamily: FONTS.regular,
    fontSize: moderateScale(15),
    color: COLORS.black,
    opacity: 0.6,
    marginTop: moderateScale(6),
  },
  label: {
    fontFamily: FONTS.medium,
    fontSize: moderateScale(14),
    color: COLORS.black,
    marginBottom: moderateScale(8),
  },
  input: {
    fontFamily: FONTS.regular,
    fontSize: moderateScale(15),
    color: COLORS.black,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: moderateScale(12),
    paddingHorizontal: moderateScale(16),
    paddingVertical: moderateScale(14),
    marginBottom: moderateScale(20),
  },
  button: {
    backgroundColor: COLORS.secondary,
    borderRadius: moderateScale(12),
    paddingVertical: moderateScale(16),
    alignItems: 'center',
    marginTop: moderateScale(8),
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonPressed: {
    opacity: 0.8,
  },
  buttonText: {
    fontFamily: FONTS.semiBold,
    fontSize: moderateScale(16),
    color: COLORS.white,
  },
});
