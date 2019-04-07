import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Button,
  TouchableHighlight,
  Text,
  Alert,
  ScrollView,
} from 'react-native';

import t from 'tcomb-form-native';

import axios from "axios";
import BackgroundView from './BackgroundView'

// Registration Form
const Form = t.form.Form;

const User = t.struct({
  nameVal: t.String,
  surname: t.String,
  year: t.String,
  branch: t.String,
  ucid: t.Number,
  password: t.String,
  reEnterPassword: t.String,
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
      label: 'First Name',
      error: 'name required',
    },
    surname: {
      label: 'Last Name',
      error: 'surname required',
    },
    year: {
      help: 'Example: BE ',
      error: 'branch required',
    },
    branch: {
      help: 'Example: ETRX ',
      error: 'branch required',
    },
    ucid: {
      label: 'UCID',
      error: 'enter valid ucid',
    },
    password: {
      error: 'password required',
      password: true,
      secureTextEntry: true,
    },
    reEnterPassword: {
      label: 'Re-enter Password',
      error: 'Re-enter password',
      password: true,
      secureTextEntry: true,
    },
    email: {
      label: 'E-mail',
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
      year : 'AAA',
      branch : 'AAA',
      ucid : '1111',
      password : 'AAA',
      reEnterPassword : 'AAAA',
      email : 'AAA',
    }
  }

  static navigationOptions = {
    // title: 'Home screen',
    headerTintColor: 'white',
    headerTitleStyle: { color: 'white' }
  };


  //Send data to DB using Axios
  putDataToDB = (userInfo) => {
    console.log("userInfo : ", userInfo)
    
    const obj = {
      nameVal : userInfo.nameVal,
      surname : userInfo.surname,
      year: userInfo.year,
      branch : userInfo.branch,
      ucid : userInfo.ucid,
      password : userInfo.password,
      reEnterPassword : userInfo.reEnterPassword,
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

    if(value.password !== value.reEnterPassword){
      Alert.alert(
        'Password Does Not Match',
        'Your password and Re-entered password do not match.',
        [{ text: 'OK', onPress: () => console.log('OK Pressed Re-enter') }],
        { cancelable: false }
      );
      return;
    }

    // Check if confirm button is pressed
    
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
      <BackgroundView>
      <ScrollView contentContainerStyle={{flexGrow: 1, padding: 20, paddingBottom: 40}}>
        <Form ref={c => (this._form = c)} type={User} options={options} />
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleSubmit}
          underlayColor="#052F5F">
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableHighlight>
      </ScrollView>
      </BackgroundView>
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
