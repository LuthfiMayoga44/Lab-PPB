import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/8354/live/8795a900-0e20-11f0-8331-61229d24cb73.jpg.webp' }}
        style={styles.image}
      />
      <Text style={styles.name}>Nama: Luthfi</Text>
      <Text style={styles.email}>Presiden</Text>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  email: {
    fontSize: 16,
    color: '#555',
  },
});
