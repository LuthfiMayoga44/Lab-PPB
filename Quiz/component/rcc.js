// RCCProfile.js
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

class RCCProfile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={{uri: 'https://placekitten.com/200/200'}} style={styles.avatar} />
        <Text style={styles.text}>Nama: Luthfi Mayoga</Text>
        <Text style={styles.text}>NPM: 232310003</Text>
        <Text style={styles.text}>Jurusan: Teknik Informatika</Text>
        <Text style={styles.text}>Hobi: Coding, Gaming</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 10,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  text: {
    fontSize: 18,
    marginVertical: 5,
  },
});

export default RCCProfile;
