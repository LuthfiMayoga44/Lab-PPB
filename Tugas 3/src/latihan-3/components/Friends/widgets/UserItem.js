import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function UserItem({ user }) {
  const icon = user.gender === 'M' ? require('../../../../../assets/icons/icon-boy-1.png') : require('../../../../../assets/icons/icon-girl-1.png');
  return (
    <View style={styles.item}>
      <Image source={icon} style={styles.avatar} />
      <View style={styles.info}>
        <Text style={styles.name}>{user.name}</Text>
        <Text>{user.npm} - {user.major}</Text>
        <Text>{user.hobby}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    marginVertical: 8,
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 8,
  },
  avatar: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  info: {
    justifyContent: 'center',
  },
  name: {
    fontWeight: 'bold',
  },
});