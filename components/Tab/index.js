import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import Colors from '../../constants/Colors';
import Tab from './Tab';
const Tabs = ({ select, selected }) => {
  // const [selected, setSelected] = useState('All');
  // const select = (selected) => {
  //   setSelected(selected);
  // };
  return (
    <View style={styles.container}>
      <Tab onPress={() => select('All')} selected={selected === 'All'}>
        All
      </Tab>
      <Tab onPress={() => select('Friday')} selected={selected === 'Friday'}>
        Friday
      </Tab>
      <Tab
        onPress={() => select('Saturday')}
        selected={selected === 'Saturday'}
      >
        Saturday
      </Tab>
      <Tab onPress={() => select('Sunday')} selected={selected === 'Sunday'}>
        Sunday
      </Tab>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 32,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Colors.accent,
    flexDirection: 'row',
  },
});

export default Tabs;
