// ColorChangeButton.js
import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const ColorChangeButton = () => {
  const [color, setColor] = useState('blue');

  const handlePress = () => {
    setColor(color === 'blue' ? 'red' : 'blue');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress} style={[styles.box, { backgroundColor: color }]}>
        <Text style={styles.text}>Klik Saya!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});

export default ColorChangeButton;
