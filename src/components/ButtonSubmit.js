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
  Button
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
    console.log(this.props);
  }

  

  _onPress() {
    console.log("in on press");
    Actions.quizStartScreen();
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
    color: '#0d87a1',
    alignSelf: 'center',
  },
  button: {
    marginRight:100,
    marginLeft:100,
    marginTop:0,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#262626',
    borderColor: '#0d87a1',
    borderRadius:30,
    borderWidth: 1,

    
    
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