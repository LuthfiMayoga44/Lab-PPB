import React from 'react';
import { View, Text, Image, Alert, StyleSheet, TouchableOpacity } from 'react-native';

const HelloScreen = () => {
  const handlePress = () => {
    Alert.alert('Sukses', 'Tombol berhasil ditekan!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Halo, Selamat Datang di Kuis React Native!</Text>
              
      <Image
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/LOGO_IBIK.png' }}
        style={styles.image}
      />
      
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Klik Saya</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HelloScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
