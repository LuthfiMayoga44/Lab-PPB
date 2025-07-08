import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

const FormPendaftaran = () => {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [hp, setHp] = useState('');

  const handleSubmit = () => {
    if (!nama || !email || !hp) {
      Alert.alert('Peringatan', 'Semua field harus diisi!');
    } else {
      Alert.alert('Data Pendaftaran', `Nama: ${nama}\nEmail: ${email}\nNomor HP: ${hp}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Form Pendaftaran</Text>

      <TextInput
        placeholder="Nama Lengkap"
        style={styles.input}
        value={nama}
        onChangeText={setNama}
      />

      <TextInput
        placeholder="Email"
        style={styles.input}
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Nomor HP"
        style={styles.input}
        keyboardType="phone-pad"
        value={hp}
        onChangeText={setHp}
      />

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default FormPendaftaran;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 16,
    fontSize: 16,
  },
});
