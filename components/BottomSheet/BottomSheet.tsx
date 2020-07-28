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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4e6b87',
    alignItems: 'center',
    justifyContent: 'center',
  },
  panel: {
    flex: 1,
    backgroundColor: '#ff7c64',
    position: 'relative',
  },
  panelHeader: {
    height: 180,
    backgroundColor: '#b197fc',
    justifyContent: 'flex-end',
    padding: 24,
  },
  textHeader: {
    fontSize: 28,
    color: '#FFF',
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: -24,
    right: 18,
    width: 48,
    height: 48,
    zIndex: 1,
  },
  iconBg: {
    backgroundColor: '#2b8a3e',
    position: 'absolute',
    top: -24,
    right: 18,
    width: 48,
    height: 48,
    borderRadius: 24,
    zIndex: 1,
  },
  textContainer: {
    height: 100,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

class BottomSheet extends React.Component {
  static defaultProps = {};
  _draggableRange = {top: height + 180 - 100, bottom: 380};

  _panel: any;

  _draggedValue = new Animated.Value(0);

  componentDidMount() {
    // this._panel.show(560);
  }

  render() {
    const {top, bottom} = this._draggableRange;

    const backgoundOpacity = this._draggedValue.interpolate({
      inputRange: [height - 48, height],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });

    const iconTranslateY = this._draggedValue.interpolate({
      inputRange: [height - 56, height, top],
      outputRange: [0, 56, 180 - 32],
      extrapolate: 'clamp',
    });

    const textTranslateY = this._draggedValue.interpolate({
      inputRange: [bottom, top],
      outputRange: [0, 8],
      extrapolate: 'clamp',
    });

    const textTranslateX = this._draggedValue.interpolate({
      inputRange: [bottom, top],
      outputRange: [0, -50],
      extrapolate: 'clamp',
    });

    const textScale = this._draggedValue.interpolate({
      inputRange: [bottom, top],
      outputRange: [1, 0.5],
      extrapolate: 'clamp',
    });

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
            <Animated.View
              style={[
                styles.iconBg,
                {
                  opacity: backgoundOpacity,
                  transform: [{translateY: iconTranslateY}],
                },
              ]}
            />
            <View style={styles.panelHeader}>
              <Animated.View
                style={{
                  transform: [
                    {translateY: textTranslateY},
                    {translateX: textTranslateX},
                    {scale: textScale},
                  ],
                }}>
                <Text style={styles.textHeader}>Sliding Up Panel</Text>
              </Animated.View>
            </View>
            <View style={styles.panel}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.textContainer}>
                  <Text>Here is the content inside panel</Text>
                </View>
                <View style={styles.textContainer}>
                  <Text>Here is the content inside panel</Text>
                </View>
                <View style={styles.textContainer}>
                  <Text>Here is the content inside panel</Text>
                </View>
                <View style={styles.textContainer}>
                  <Text>Here is the content inside panel</Text>
                </View>
                <View style={styles.textContainer}>
                  <Text>Here is the content inside panel</Text>
                </View>
                <View style={styles.textContainer}>
                  <Text>Here is the content inside panel</Text>
                </View>
                <View style={styles.textContainer}>
                  <Text>Here is the content inside panel</Text>
                </View>
                <View style={styles.textContainer}>
                  <Text>Here is the content inside panel</Text>
                </View>
                <View style={styles.textContainer}>
                  <Text>Here is the content inside panel</Text>
                </View>
                <View style={styles.textContainer}>
                  <Text>Here is the content inside panel</Text>
                </View>
                <View style={styles.textContainer}>
                  <Text>Here is the content inside panel</Text>
                </View>
              </ScrollView>
            </View>
          </View>
        </SlidingUpPanel>
      </View>
    );
  }
}

export default BottomSheet;
