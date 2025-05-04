import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import MyFriends from './src/latihan-3/components/Friends/MyFriends';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <MyFriends />
    </SafeAreaView>
  );
}