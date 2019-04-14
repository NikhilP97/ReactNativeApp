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
  TextInput,
  Text,
} from 'react-native';
import { Icon } from 'react-native-elements'
import PasswordInputText from 'react-native-hide-show-password-input';
import { TextField } from 'react-native-material-textfield';

import ButtonSubmit from './ButtonSubmit';
import SignupSection from './SignupSection';


//import BackgroundView from './BackgroundView'

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
    let {password} = this.state;
    return (
      
      <KeyboardAvoidingView style={styles.container}>

        <TextField
        style={styles.textInput}
        label='UCID'
        labelFontSize={20}
        disabledLineWidth={0}
        value={nameVal}
        tintColor='#066A7F'
        baseColor='#066A7F'
        onChangeText={ (nameVal) => this.setState({ nameVal }) }
        />

        <PasswordInputText
            style={styles.textInput}
            labelFontSize={20}
            value={this.state.password}
            tintColor={'#066A7F'}
            textColor={'#000'}
            baseColor={'#066A7F'}
            iconColor={'#066A7F'}
            onChangeText={ (password) => this.setState({ password }) }
        />
        <SignupSection />
        <ButtonSubmit style={styles.loginButton} usernameVal={nameVal} passwordVal={password} />

        
      </KeyboardAvoidingView>

    );
  }
}


// <Text style={styles.text}>Create Account</Text>
        // <Text style={styles.text}>Forgot Password?</Text>

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
  	
    padding: 20
    
    
  },
  textInput: {
    color: '#000',
    height: 40,

  },
  loginButton: {
  	position: 'absolute',

  	top: 500,
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
        //   placeholder="Vidushi"
        //   returnKeyType={'done'}
        //   autoCapitalize={'none'}
        //   autoCorrect={false}
        // />