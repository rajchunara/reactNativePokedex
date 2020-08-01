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
import {StyleSheet, View, Text} from 'react-native';
import HomeScrollable from './components/HomeScrollable/HomeScrollable';
import {Provider} from 'react-redux';
import Store from './redux/store';

const App = () => {
  return (
    <Provider store={Store}>
      <View style={styles.appContainer}>
        <View style={styles.topNavigation}>
          <Text style={styles.homeTitle}>Home</Text>
        </View>
        <HomeScrollable />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  topNavigation: {
    width: '100%',
    height: 70,
    position: 'absolute',
    top: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#EF5350',
    zIndex: 1,
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13,
  },
  homeTitle: {
    marginLeft: 60,
    fontSize: 22,
    color: '#f1f1f1',
  },
});

export default App;
