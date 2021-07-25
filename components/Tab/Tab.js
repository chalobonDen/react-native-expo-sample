import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Colors from '../../constants/Colors';

const Tab = ({ children, selected, onPress }) => {
  return (
    //   เขียนแบบย่อ selected && styles.selected
    <TouchableOpacity onPress={onPress} style={styles.touchable}>
      <View style={[styles.tab, selected ? styles.selected : false]}>
        <Text style={[selected ? styles.selected : false]}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchable: {
    flex: 1,
    height: 32,
  },
  tab: {
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    color: Colors.accent,
    borderLeftColor: Colors.accent,
    borderRightColor: Colors.accent,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    flex: 1,
  },
  selected: {
    backgroundColor: Colors.accent,
    color: '#fff',
  },
});

export default Tab;
