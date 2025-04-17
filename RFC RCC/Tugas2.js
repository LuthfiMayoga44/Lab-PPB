import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Myprofil from './Myprofil';  

const Tugas2 = () => {
  return (
    <View style={styles.card}>
      <Myprofil />
      <Image
        source={{ uri: 'https://www.w3schools.com/howto/img_avatar.png' }}  
        style={styles.image}
        resizeMode="cover"
      />
    </View>
  );
};

export default Tugas2;

const styles = StyleSheet.create({
  card: {
    width: 300,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 8,
    marginTop: 15,
  },
});
