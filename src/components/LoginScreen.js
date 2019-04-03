import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo';
import Form from './Form';
import Wallpaper from './Wallpaper';
import ButtonSubmit from './ButtonSubmit';
import SignupSection from './SignupSection';
import BackgroundView from './BackgroundView'
import {StyleSheet, View, Text, Image} from 'react-native';

export default class LoginScreen extends Component {
  render() {
    return (
      
      <View>
        <Logo />
        <Form />
      </View>  
      
    );
  }
}

