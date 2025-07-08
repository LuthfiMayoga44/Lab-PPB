import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email.endsWith('@student.ibik.ac.id')) {
      Alert.alert('Login Gagal', 'Gunakan email IBIK (@ibik.ac.id)');
      return;
    }

    // Simpan nama dari email untuk sambutan
    const name = email.split('@')[0];

    navigation.navigate('Home', { userName: name });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kantin IBIK</Text>
      <TextInput
        style={styles.input}
        placeholder="Email IBIK"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Masuk" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 28,
    marginBottom: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
});
