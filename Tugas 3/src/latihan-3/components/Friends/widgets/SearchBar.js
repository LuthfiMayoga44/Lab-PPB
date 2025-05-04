import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <FontAwesome5 name="search" size={20} color="#000" />
      <TextInput style={styles.input} placeholder="Search friends..." />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    marginLeft: 10,
  },
});