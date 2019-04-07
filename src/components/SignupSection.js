import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Dimensions from 'Dimensions';
import {StyleSheet, View, Text, TouchableHighlight} from 'react-native';

import {Actions, ActionConst} from 'react-native-router-flux';


export default class SignupSection extends Component {

  createAccount = () => {
    Actions.createAccountScreen();
  }

  forgotPassword = () => {
    Actions.forgotPasswordScreen();
  }


  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.button}
          onPress={this.createAccount}
          underlayColor="#f0f4f7">
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={this.forgotPassword}
          underlayColor="#f0f4f7">
          <Text style={styles.buttonText}>Forgot Password?</Text>
        </TouchableHighlight>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius:20
  },
  buttonText: {
    fontSize: 18,
    color: '#427AA1',
    alignSelf: 'center',
  },
  button: {
    marginRight:40,
    marginLeft:40,
    marginTop:0,

    height: 25,
    borderColor: '#262626',
    borderRadius: 25,
    marginBottom: 10,
    alignSelf: 'center',
    justifyContent: 'center',
  },
});