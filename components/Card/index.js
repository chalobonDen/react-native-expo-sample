import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../constants/Colors';
const Card = ({ data }) => {
  const navigation = useNavigation();
  const toEvent = () => {
    navigation.navigate('Event', { data: data });
    // console.log(data);
  };
  return (
    <TouchableOpacity onPress={toEvent}>
      <View style={styles.wrap}>
        <Image style={styles.image} source={{ uri: data.image }} />
        <View style={styles.right}>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.speaker}>{data.speaker}</Text>
          <Text style={styles.date}>
            {data.date} / {data.time}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrap: {
    height: 200,
    alignSelf: 'stretch',
    padding: 10,
    borderBottomColor: Colors.accent,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 180,
    width: 180,
    marginRight: 10,
  },
  right: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
  },
  speaker: {
    flex: 1,
    marginTop: 4,
  },
  date: {
    color: Colors.accent,
  },
});

export default Card;
