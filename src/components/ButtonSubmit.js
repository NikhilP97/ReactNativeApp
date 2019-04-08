import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Dimensions from 'Dimensions';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Animated,
  Easing,
  Image,
  Alert,
  View,
  TouchableHighlight,
  Button,
  ToastAndroid
} from 'react-native';
import {Actions, ActionConst} from 'react-native-router-flux';

import spinner from '../images/loading.gif';
import Form from './Form'
//import BackgroundView from './BackgroundView'

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const MARGIN = 40;

export default class ButtonSubmit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
    };

    this.buttonAnimated = new Animated.Value(0);
    this.growAnimated = new Animated.Value(0);
    this._onPress = this._onPress.bind(this);

    this.sendData = {

    };
    console.log("check ucid, password",this.props);
  }

  validateLogin = async (ucid, password) => {
    //await this.setState({ loading: true });
    let ucidString = ucid.toString();
    let url = 'https://wt-0cd1e9e1874510cd90a9ec9f1e085110-0.sandbox.auth0-extend.com/express-with-db-usingID/'+ucidString;
    console.log("final url:", url);
    const response = await fetch(
      url
    ).then((response) => {
    if(response.ok) {
        return response.json();
    } else {
        throw new Error('Server response wasnt OK');
        return false;
    }
    })
    .then((responseJson) => {
      // Do something with the response
      console.log("JSOn: ", responseJson);
      const getUserInfo = responseJson;//await response.json();
      console.log("getUserInfo: ", getUserInfo);
      const getUCID = getUserInfo.ucid;
      const getPassword = getUserInfo.password;
      console.log("getUCID, getPassword", getUCID, getPassword);
      if(getPassword == password){
        Actions.menuScreen();
      } else {
        ToastAndroid.show("Invalid Password",ToastAndroid.SHORT);
      }
    })
    .catch((error) => {
      ToastAndroid.show("Invalid UCID",ToastAndroid.SHORT);
      console.log("error!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1:",error);
    });





    

  }

  

  _onPress() {
    console.log("in on press");
    let validUCID = this.validateLogin(this.props.usernameVal, this.props.passwordVal);
    console.log("validUCID", validUCID);
    // if(!validUCID) {
    //   ToastAndroid.show("Invalid UCID",ToastAndroid.SHORT);
    // }
    
    
  }

  _onGrow() {
    Animated.timing(this.growAnimated, {
      toValue: 1,
      duration: 200,
      easing: Easing.linear,
    }).start();
  }

  render() {
    const changeWidth = this.buttonAnimated.interpolate({
      inputRange: [0, 1],
      outputRange: [DEVICE_WIDTH - MARGIN, MARGIN],
    });
    const changeScale = this.growAnimated.interpolate({
      inputRange: [0, 1],
      outputRange: [1, MARGIN],
    });

    this.sendData = {
    nameVal: this.props.usernameVal,
    password: this.props.passwordVal
    };

    return (
      
      <View style={styles.container}>
        
        <TouchableHighlight
          style={styles.button}
          onPress={this._onPress}
          underlayColor="#f0f4f7">
          <Text style={styles.buttonText}>Login</Text>
        </TouchableHighlight>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    borderRadius:20,
  },
  buttonText: {
    fontSize: 18,
    color: '#066A7F',
    alignSelf: 'center',
  },
  button: {
    marginRight:100,
    marginLeft:100,
    marginTop:0,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor: "#f6f5f3",
    borderColor: '#427AA1',
    borderRadius:30,
    borderWidth: 2,

    
    
  },
  
  text: {
    fontSize:20,
    color: 'white',
    backgroundColor: 'transparent',
    textAlign:'center',
  },
  image: {
    width: 24,
    height: 24,
  },
});