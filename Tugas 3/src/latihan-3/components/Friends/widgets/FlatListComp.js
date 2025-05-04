import React from 'react';
import { FlatList } from 'react-native';
import UserItem from './UserItem';
import { userData } from '../const-data/data';

export default function FlatListComp() {
  return (
    <FlatList
      data={userData}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => <UserItem user={item} />}
    />
  );
}