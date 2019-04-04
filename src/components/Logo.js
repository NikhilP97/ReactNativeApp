import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, Text, Image} from 'react-native';

import logoImg from '../images/myImages/logo.png';
//import BackgroundView from './BackgroundView'

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
    marginTop: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
    
  }, 
  text: {
    fontFamily: 'Hind-Light',
    //color: 'blue',
    color: "#066A7F",
    //fontWeight: 'bold',
    marginTop: 20,
    
    fontSize: 30
  },
});

//#066A7F