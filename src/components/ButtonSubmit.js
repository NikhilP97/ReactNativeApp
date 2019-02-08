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
  Button
} from 'react-native';
import {Actions, ActionConst} from 'react-native-router-flux';

import spinner from '../images/loading.gif';
import Form from './Form'

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
          <TouchableOpacity style={styles.button}
            onPress={this._onPress} >   
          
          <Text style={styles.text}>LOGoooofoo</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    borderRadius:20,
    
  },
  button: {
    marginRight:40,
    marginLeft:40,
    marginTop:0,
    paddingTop:15,
    paddingBottom:15,
    backgroundColor:'#841584',
    borderRadius:30,
    borderWidth: 1,

    
    
  },
  circle: {
    height: MARGIN,
    width: MARGIN,
    marginTop: -MARGIN,
    borderWidth: 1,
    backgroundColor: 'transparent',
    borderRadius: 100,
    alignSelf: 'center',
    
    
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
