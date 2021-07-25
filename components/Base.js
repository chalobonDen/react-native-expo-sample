import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import AppNavigation from './navigation/AppNavigator';

const Base = () => {
  return (
    <View style={styles.container}>
      <Text>Events</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default Base;
