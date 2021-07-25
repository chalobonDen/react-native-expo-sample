import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Card from '../components/Card';
import mock from '../mock';
import Tab from '../components/Tab';

const Events = () => {
  const [selected, setSelected] = useState('All');
  const select = (selected) => {
    setSelected(selected);
  };
  return (
    <View>
      <Tab selected={selected} select={select} />
      <FlatList
        data={mock.filter(
          (item) => item.date === selected || selected === 'All'
        )}
        renderItem={({ item }) => <Card data={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Events;
