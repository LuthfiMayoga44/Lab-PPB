import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const ListMahasiswa = () => {
  const [mahasiswa, setMahasiswa] = useState([
    { id: '1', nama: 'Luthfi', npm: '12345678' },
    { id: '2', nama: 'Mayoga', npm: '23456789' },
    { id: '3', nama: 'Joko', npm: '34567890' },
    { id: '4', nama: 'Praw', npm: '45678901' },
    { id: '5', nama: 'Mega', npm: '56789012' },
  ]);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.nama}>{item.nama}</Text>
      <Text style={styles.npm}>NPM: {item.npm}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daftar Mahasiswa</Text>
      <FlatList
        data={mahasiswa}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default ListMahasiswa;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  nama: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  npm: {
    fontSize: 16,
    color: '#666',
  },
});
