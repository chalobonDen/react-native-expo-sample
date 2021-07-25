import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import mock from '../mock';
import Colors from '../constants/Colors';

const Event = (data) => {
  const infor = data.route.params.data;
  return (
    <ScrollView style={styles.container}>
      <Image style={styles.image} source={{ uri: infor.image }} />
      <Text style={styles.title}>{infor.title}</Text>
      <Text style={styles.speaker}>{infor.speaker}</Text>
      <Text style={styles.description}>{infor.description}</Text>
      <Text style={styles.date}>
        {infor.date} / {infor.time}
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    // justifyContent: 'center',
    padding: 8,
  },
  image: {
    height: 320,
    alignSelf: 'stretch',
  },
  title: {
    marginTop: 32,
    fontSize: 18,
    fontWeight: '700',
  },
  speaker: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: '500',
  },
  description: { marginTop: 8 },
  date: {
    marginTop: 8,
    color: Colors.accent,
  },
});

export default Event;
