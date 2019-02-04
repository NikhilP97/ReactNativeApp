import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Button,
  TouchableHighlight,
  Text,
  Alert,
} from 'react-native';

import t from 'tcomb-form-native';

const Form = t.form.Form;

const User = t.struct({
  name: t.String,
  surname: t.String,
  branch: t.String,
  ucid: t.Number,
  password: t.String,
  email: t.String,
  terms: t.Boolean,
});

const formStyles = {
  ...Form.stylesheet,
  formGroup: {
    normal: {
      marginBottom: 10,
    },
  },
  controlLabel: {
    normal: {
      color: '#0d47a1',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600',
    },
    // the style applied when a validation error occours
    error: {
      color: 'red',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600',
    },
  },
};

const options = {
  fields: {
    name: {
      error: 'name required',
    },
    surname: {
      error: 'surname required',
    },
    branch: {
      help: 'Example: ETRX ',
      error: 'branch required',
    },
    ucid: {
      error: 'enter valid ucid',
    },
    password: {
      error: 'password required',
    },
    email: {
      error: 'enter a valid email address',
    },
    terms: {
      label: 'Confirm registration',
      error: 'tap this button =>',
    },
  },
  stylesheet: formStyles,
};

export default class CreateAccountScreen extends Component {
  handleSubmit = () => {
    const value = this._form.getValue();
    console.log('value: ', value);

    // Handle Error if any field is not filled
    if (value == null) {
      console.log('i am null');
      Alert.alert(
        'Field not filled',
        'Kindly fill the Fiels that are highlighted',
        [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
        { cancelable: false }
      );
      return;
    }

    // Check if confirm button is pressed
    if (value.terms) {
      console.log('terms: ', value.terms);
      if (value) {
        console.log(value);
        // clear all fields after submit
        this.clearForm();
      }
    } else {
      Alert.alert(
        'Not Confirmed',
        'Kindly press the Confiration button',
        [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
        { cancelable: false }
      );
    }
  };

  getInitialState = () => {
    return { value: null };
  };

  onChange = value => {
    this.setState({ value });
  };

  clearForm = () => {
    // clear content from all textbox
    this.setState({ value: null });
  };

  render() {
    return (
      <View style={styles.container}>
        <Form ref={c => (this._form = c)} type={User} options={options} />
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleSubmit}
          underlayColor="#99d9f4">
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center',
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
});
