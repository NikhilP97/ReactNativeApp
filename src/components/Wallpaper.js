import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Dimensions from 'Dimensions';
import {StyleSheet, ImageBackground} from 'react-native';

import bgSrc from '../images/bg.jpg';

export default class Wallpaper extends Component {
  render() {
    return (
      <ImageBackground source={bgSrc} style={{
      width: '100%', // applied to Image
      height: '100%' 
    }}
    imageStyle={{
      resizeMode: 'cover' // works only here!
    }}>
        {this.props.children}
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  picture: {
    flex: 1,
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
});
