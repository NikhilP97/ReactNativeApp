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

import axios from "axios";
import BackgroundView from './BackgroundView'

// Registration Form
const Form = t.form.Form;

const User = t.struct({
  nameVal: t.String,
  surname: t.String,
  branch: t.String,
  ucid: t.Number,
  password: t.String,
  email: t.String,
});

const formStyles = {
  ...Form.stylesheet,
  formGroup: {
    normal: {
      marginBottom: 10,
      color: '#066A7F'
    },
  },
  controlLabel: {
    normal: {
      color: '#066A7F',
      fontSize: 15,
      marginBottom: 7,
      fontWeight: '600',
    },
    // the style applied when a validation error occours
    error: {
      color: '#066A7F',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600',
    },
  },
};

const options = {
  fields: {
    nameVal: {
      label: 'Name',
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
  },
  stylesheet: formStyles,
};



  




export default class CreateAccountScreen extends Component {

  // GET and POST to DB
// initialize our state 
  constructor(props) {
    super(props);

    this.state = {
      nameVal : 'AAA',
      surname : 'AAA',
      branch : 'AAA',
      ucid : '1111',
      password : 'AAA',
      email : 'AAA',
    }
  }


  //Send data to DB using Axios
  putDataToDB = (userInfo) => {
    console.log("userInfo : ", userInfo)
    
    const obj = {
      nameVal : userInfo.nameVal,
      surname : userInfo.surname,
      branch : userInfo.branch,
      ucid : userInfo.ucid,
      password : userInfo.password,
      email : userInfo.email,
    };
    axios.post('https://wt-0cd1e9e1874510cd90a9ec9f1e085110-0.sandbox.auth0-extend.com/express-with-mongo-db/', obj)
        .then(res => console.log(res.data)).catch(function (error) {
          console.log(error);
        });
  };

  // Function to handle the the SignUp button
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
    if (true) {
      console.log('confirm: ', value.confirm);
      if (value) {
        console.log(value);
        //Put data in DB
        this.putDataToDB(value)
        // clear all fields after submit
        this.clearForm();
        //Registered Successfully
        Alert.alert(
        'Signed Up!',
        'You have Registered Successfully',
        [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
        { cancelable: false }
      );
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
    color: '#066A7F'
    
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    alignSelf: 'center',
  },
  button: {
    height: 36,
    borderColor: '#427AA1',
    backgroundColor: '#427AA1',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 20,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
});
