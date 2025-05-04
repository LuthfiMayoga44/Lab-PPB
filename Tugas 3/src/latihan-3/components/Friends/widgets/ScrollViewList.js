import React from 'react';
import { ScrollView } from 'react-native';
import UserItem from '../widgets/UserItem';
import { userData } from '../const-data/data';

export default function ScrollViewList() {
  return (
    <ScrollView>
      {userData.map((user, index) => (
        <UserItem key={index} user={user} />
      ))}
    </ScrollView>
  );
}