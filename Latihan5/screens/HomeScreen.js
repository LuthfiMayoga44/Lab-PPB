import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, ScrollView } from 'react-native';
import { friends } from '../data/friends';

export default function HomeScreen() {
  const posts = friends.filter(friend => friend.post);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Story</Text>
      <FlatList
        data={friends}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.storyItem}>
            <Image source={{ uri: item.image }} style={styles.storyAvatar} />
            <Text style={styles.name}>{item.name.split(' ')[0]}</Text>
          </View>
        )}
      />

      <Text style={styles.title}>Postingan</Text>
      {posts.map((item) => (
        <View key={item.id} style={styles.post}>
          <View style={styles.postHeader}>
            <Image source={{ uri: item.image }} style={styles.postAvatar} />
            <Text style={styles.name}>{item.name}</Text>
          </View>
          <Image source={{ uri: item.post }} style={styles.postImage} />
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#000' },
  title: { fontSize: 20, fontWeight: 'bold', marginVertical: 10, color: '#fff' },
  storyItem: { alignItems: 'center', marginRight: 15 },
  storyAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#f33',
  },
  name: { fontSize: 12, marginTop: 5, color: '#fff' },
  post: { marginBottom: 20 },
  postHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 5 },
  postAvatar: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
  postImage: { width: '100%', height: 200, borderRadius: 10 },
});
