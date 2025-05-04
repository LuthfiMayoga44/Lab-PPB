import React from 'react';
import { SectionList, Text } from 'react-native';
import UserItem from './UserItem';
import { sectionData } from '../const-data/data';

export default function SectionListComp() {
  return (
    <SectionList
      sections={sectionData}
      keyExtractor={(item, index) => item.name + index}
      renderItem={({ item }) => <UserItem user={item} />}
      renderSectionHeader={({ section: { title } }) => <Text>{title}</Text>}
    />
  );
}