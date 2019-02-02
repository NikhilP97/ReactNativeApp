import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Dimensions from 'Dimensions';
import {
  StyleSheet,
  KeyboardAvoidingView,
  View,
  ActivityIndicator,
  TouchableOpacity,
  Image,
  TextInput
} from 'react-native';
import { Icon } from 'react-native-elements'
import PasswordInputText from 'react-native-hide-show-password-input';
import { TextField } from 'react-native-material-textfield';

import UserInput from './UserInput';
import ButtonSubmit from './ButtonSubmit';
import SignupSection from './SignupSection';

import usernameImg from '../images/username.png';
import passwordImg from '../images/password.png';
import eyeImg from '../images/eye_black.png';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameVal: '',
      password: '',
    };

  }

  

  render() {
    let { nameVal } = this.state;
    return (
      <KeyboardAvoidingView style={{margin: 20}}>

        <TextField
        style={styles.textInput}
        label='Name'
        labelFontSize={20}
        disabledLineWidth={0}
        value={nameVal}
        onChangeText={ (nameVal) => this.setState({ nameVal }) }
        />

        <PasswordInputText
            style={styles.textInput}
            labelFontSize={20}
            value={this.state.password}
            onChangeText={ (password) => this.setState({ password }) }
        />
      </KeyboardAvoidingView>
    );
  }
}




const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  textInput: {
    
    height: 40,

  },
  btnEye: {
    position: 'absolute',
    top: 55,
    right: 28,
    
  },
  iconEyeOn: {
    width: 25,
    height: 25,
    tintColor: 'rgba(0,0,0,0.2)',
  },
  getPadding: {
    marginBottom: 15,
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
},
searchIcon: {
    padding: 10,
},
input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
},
});




// <TouchableOpacity
//           activeOpacity={0.7}
//           style={styles.btnEye}
//           onPress={this.showPass}>
//           <Image source={eyeImg} style={styles.iconEyeOn} />
//         </TouchableOpacity>


// <UserInput
        //   source={passwordImg}
        //   secureTextEntry={this.state.showPass}
        //   onPress={this.showEye}
        //   placeholder="Password"
        //   returnKeyType={'done'}
        //   autoCapitalize={'none'}
        //   autoCorrect={false}
        // />