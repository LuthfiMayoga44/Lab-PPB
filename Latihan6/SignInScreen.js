import React, { useState } from 'react';
import { View, TextInput, Text, Button, Alert, StyleSheet } from 'react-native';

export default function SignInScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passError, setPassError] = useState('');

  const validateEmail = (value) => {
    if (!value) {
      setEmailError('Email is required');
    } else {
      const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!regex.test(value)) {
        setEmailError('Invalid email format');
      } else {
        setEmailError('');
      }
    }
  };

  const validatePassword = (value) => {
    if (value.length < 3) {
      setPassError('Type minimum 3 character');
    } else {
      const passRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[\W_]).+$/;
      if (!passRegex.test(value)) {
        setPassError('Value must contain alphabet, number and symbol');
      } else {
        setPassError('');
      }
    }
  };

  const handleSignIn = () => {
    validateEmail(email);
    validatePassword(password);

    if (
      email === '212310016@student.ibik.ac.id' &&
      password === 'BESTstudent_2023'
    ) {
      Alert.alert('Login Success', 'Redirecting...');
      navigation.navigate('Home'); // pastikan sudah ada halaman Home
    } else {
      Alert.alert('Error', 'Email/Password is not match');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={(v) => {
          setEmail(v);
          validateEmail(v);
        }}
      />
      {emailError ? <Text style={styles.error}>{emailError}</Text> : null}

      <TextInput
        placeholder="Password"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={(v) => {
          setPassword(v);
          validatePassword(v);
        }}
      />
      {passError ? <Text style={styles.error}>{passError}</Text> : null}

      <Button title="SIGN IN" onPress={handleSignIn} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, marginTop: 50 },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  error: {
    color: 'red',
    marginBottom: 8,
  },
});
