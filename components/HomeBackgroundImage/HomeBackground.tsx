import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

export default function HomeBackground() {
  return (
    <View style={styles.homeBackground}>
      <Image
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
        style={styles.backgroundImage}></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  homeBackground: {
    flex: 1,
    backgroundColor: '#4e6b87',
  },
  backgroundImage: {
    width: '100%',
    height: '50%',
  },
});
