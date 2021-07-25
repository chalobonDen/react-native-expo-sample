import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView from 'react-native-maps';

const coordinate = {
  latitude: 37.511217275511136,
  longitude: 127.04303887301707,
  latitudeDelta: 0.0222,
  longitudeDelta: 0.0101,
};
const Map = () => {
  return (
    <MapView style={styles.map} initialRegion={coordinate}>
      <MapView.Marker coordinate={coordinate} title={'Maroo Entertainment'} />
    </MapView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
});

export default Map;
