import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import HomeBackground from '../HomeBackgroundImage/HomeBackground';

export default function HomeComponent() {
  return (
    <View style={styles.homeContainer}>
      <HomeBackground />
    </View>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
});
