
import React from 'react';
import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const UserItem = ({ user }) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
      <Image
        source={require('../../assets/icons/icon-girl-1.png')} // Ganti dengan path yang sesuai
        style={{ width: 50, height: 50, borderRadius: 25, marginRight: 10 }}
      />
      <Text style={{ flex: 1 }}>{user.name}</Text>
      {user.gender === 'M' ? (
        <Icon name="male" size={20} color="#000" />
      ) : (
        <Icon name="female" size={20} color="#000" />
      )}
    </View>
  );
};

export default UserItem;
