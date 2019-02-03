import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, Text, Image} from 'react-native';

import logoImg from '../images/myImages/spit_logo1.jpg';

export default class Logo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={logoImg} style={styles.image} />
        <Text style={styles.text}>Campus Placement Guide</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 80,
    height: 80,
    backgroundColor: 'rgba(52, 52, 52, 0.8)'
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    marginTop: 20,
    fontFamily: 'sans-serif',
    fontSize: 30
  },
});
