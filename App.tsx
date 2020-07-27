/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import HomeComponent from './components/HomeComponent/HomeComponent';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <View style={styles.appContainer}>
      <HomeComponent />
      {/* <View
        style={{
          width: 200,
          height: 200,
          backgroundColor: 'white',
          position: 'absolute',
          top: 20,
          left: 20,
        }}></View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});

export default App;
