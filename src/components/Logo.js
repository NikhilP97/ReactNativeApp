import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, Text, Image, StatusBar} from 'react-native';

import logoImg from '../images/myImages/i7_cropped_3.png';
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
    marginTop: 70,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  image: {
    
    width: 150,
    height: 190,
    
  }, 
  text: {
    //color: 'blue',
    color: "#066A7F",
    //fontWeight: 'bold',
    marginTop: 50,
    fontFamily: 'Merriweather-Bold',
    fontSize: 30
  },
});

//#066A7F