import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ProductCard({ item, onBuy }) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{item.name}</Text>
      <Text>Rp{item.price}</Text>
      <Button title="Beli" color="#4CAF50" onPress={() => onBuy(item)} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 3,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
});
