import React, { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { friends as allFriends } from '../data/friends';

export default function MyFriendsScreen() {
  const [search, setSearch] = useState('');
  const [followed, setFollowed] = useState([]);
  
  const filteredFriends = allFriends.filter(friend =>
    friend.name.toLowerCase().includes(search.toLowerCase())
  );

  const toggleFollow = (id) => {
    setFollowed((prev) =>
      prev.includes(id) ? prev.filter(fid => fid !== id) : [...prev, id]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cari & Ikuti Teman</Text>

      <TextInput
        placeholder="Cari nama teman..."
        placeholderTextColor="#aaa"
        style={styles.search}
        value={search}
        onChangeText={setSearch}
      />

      <FlatList
        data={filteredFriends}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          const isFollowed = followed.includes(item.id);
          return (
            <View style={styles.friend}>
              <Image source={{ uri: item.image }} style={styles.avatar} />
              <Text style={styles.name}>{item.name}</Text>
              <TouchableOpacity
                style={[styles.button, isFollowed ? styles.following : styles.follow]}
                onPress={() => toggleFollow(item.id)}
              >
                <Text style={styles.buttonText}>{isFollowed ? 'Mengikuti' : 'Ikuti'}</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#000' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10, color: '#fff' },
  search: {
    backgroundColor: '#1a1a1a',
    color: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    marginBottom: 15,
  },
  friend: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: '#333',
    paddingBottom: 10,
  },
  avatar: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
  name: { flex: 1, color: '#fff' },
  button: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  follow: {
    backgroundColor: '#2196F3',
  },
  following: {
    backgroundColor: '#4CAF50',
  },
  buttonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
