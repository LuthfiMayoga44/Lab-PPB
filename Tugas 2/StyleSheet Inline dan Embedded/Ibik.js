import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image 
          source={{uri: 'https://via.placeholder.com/200'}} 
          style={styles.logo}
        />
        <Image 
          source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/LOGO_IBIK.png'}} 
          style={styles.ibikLogo}
        />
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  ibikLogo: {
    width: 200,
    height: 200,
  },
});
