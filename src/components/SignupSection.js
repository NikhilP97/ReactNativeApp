import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Dimensions from 'Dimensions';
import {StyleSheet, View, Text, TouchableHighlight} from 'react-native';

import {Actions, ActionConst} from 'react-native-router-flux';


export default class SignupSection extends Component {

  createAccount = () => {
    Actions.createAccountScreen();
  }


  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.button}
          onPress={this.createAccount}
          underlayColor="#99d9f4">
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={this.createAccount}
          underlayColor="#99d9f4">
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
    justifyContent: 'space-around',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center',
  },
  button: {
    height: 22,
    backgroundColor: '#01579B',
    borderColor: '#01579B',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
});
