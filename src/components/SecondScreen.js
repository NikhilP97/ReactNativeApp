import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Animated,
  Easing,
  Text,
} from 'react-native';
import {Actions, ActionConst} from 'react-native-router-flux';

import arrowImg from '../images/left-arrow.png';

const SIZE = 40;

export default class SecondScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
    };
    this.nameVal = props.nameVal
    this.password = props.password

    this._onPress = this._onPress.bind(this);
    this.growAnimated = new Animated.Value(0);
  }

  _onPress() {
    if (this.state.isLoading) return;

    this.setState({isLoading: true});

    Animated.timing(this.growAnimated, {
      toValue: 1,
      duration: 300,
      easing: Easing.linear,
    }).start();

    setTimeout(() => {
      Actions.pop();
    }, 500);
  }

  render() {
    const changeScale = this.growAnimated.interpolate({
      inputRange: [0, 1],
      outputRange: [1, SIZE],
    });

    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>Welcome {this.nameVal} !</Text>
        <Text style={styles.textStyle}>Your password is '{this.password}' . Hmm...this shouldn't be here xD </Text>
        <View style={styles.container}>
        <TouchableOpacity
          onPress={this._onPress}
          style={styles.button}
          activeOpacity={1}>
          <Image style={styles.image} source={arrowImg} />
        </TouchableOpacity>
        <Animated.View
          style={[styles.circle, {transform: [{scale: changeScale}]}]}
        />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    margin: 20,
    
  },
  textStyle: {
    fontSize: 45,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: SIZE,
    height: SIZE,
    borderRadius: 100,
    zIndex: 99,
    backgroundColor: '#F035E0',

  },
  circle: {
    height: SIZE,
    width: SIZE,
    marginTop: -SIZE,
    borderRadius: 100,
    backgroundColor: '#F035E0',
  },
  image: {
    width: 24,
    height: 24,

  },
});
