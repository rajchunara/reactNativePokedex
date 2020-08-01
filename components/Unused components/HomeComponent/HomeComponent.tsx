import React from 'react';
import {
  Text,
  View,
  Dimensions,
  Animated,
  ScrollView,
  StyleSheet,
} from 'react-native';
import SlidingUpPanel from 'rn-sliding-up-panel';

const {height} = Dimensions.get('window');

class HomeComponent extends React.Component {
  _draggableRange = {top: height + 180 - 100, bottom: 480};

  _panel: any;

  _draggedValue = new Animated.Value(0);

  render() {
    const {top, bottom} = this._draggableRange;

    return (
      <View style={styles.container}>
        <Text onPress={() => this._panel.show(360)}>Show panel</Text>
        <SlidingUpPanel
          ref={(c) => (this._panel = c)}
          draggableRange={this._draggableRange}
          animatedValue={this._draggedValue}
          snappingPoints={[360]}
          height={height + 180}
          friction={1}>
          <View style={styles.panel}>
            <Animated.View />
            <View style={styles.panelHeader}>
              <Animated.View>
                <Text style={styles.textHeader}>Sliding Up Panel</Text>
              </Animated.View>
            </View>
            <View style={styles.panel}>
              <ScrollView>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
                  <View style={styles.box} key={index}>
                    <Text>{item}</Text>
                  </View>
                ))}
              </ScrollView>
            </View>
          </View>
        </SlidingUpPanel>
      </View>
    );
  }
}

export default HomeComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  panel: {
    flex: 1,
    backgroundColor: '#ff9696',
    position: 'relative',
    borderRadius: 50,
  },
  panelHeader: {
    height: 180,
    backgroundColor: '#ff9696',
    justifyContent: 'flex-end',
    padding: 24,
    borderRadius: 50,
  },
  textHeader: {
    fontSize: 28,
    color: '#FFF',
  },
  box: {
    height: 100,
    width: 100,
    backgroundColor: '#FFF',
  },
});
