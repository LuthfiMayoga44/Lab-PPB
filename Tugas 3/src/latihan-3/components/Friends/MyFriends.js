import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import SearchBar from './widgets/SearchBar';
import ScrollViewList from './widgets/ScrollViewList';
import FlatListComp from './widgets/FlatListComp';
import SectionListComp from './widgets/SectionListComp';

export default class MyFriends extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SearchBar />
        <ScrollViewList />
        <FlatListComp />
        <SectionListComp />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
});