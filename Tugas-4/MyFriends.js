
import React from 'react';
import { ScrollView, FlatList, SectionList, Text, View } from 'react-native';
import UserItem from './UserItem'; // Import komponen UserItem

const MyFriends = ({ friends, sections }) => {
  return (
    <>
      <ScrollView style={{ marginTop: 20 }}>
        {friends.map((friend, index) => (
          <UserItem key={index} user={friend} />
        ))}
      </ScrollView>

      {/* FlatList Example */}
      <FlatList
        data={friends}
        renderItem={({ item }) => <UserItem user={item} />}
        keyExtractor={(item, index) => index.toString()}
      />

      {/* SectionList Example */}
      <SectionList
        sections={sections}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <UserItem user={item} />}
        renderSectionHeader={({ section }) => (
          <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{section.title}</Text>
        )}
      />
    </>
  );
};

export default MyFriends;
