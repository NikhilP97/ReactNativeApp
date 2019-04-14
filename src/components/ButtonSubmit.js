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
  ToastAndroid,
  ActivityIndicator,
  NetInfo
} from 'react-native';
import {Actions, ActionConst} from 'react-native-router-flux';

import Form from './Form'
import Modal from "react-native-modal";
//import BackgroundView from './BackgroundView'

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const MARGIN = 40;

export default class ButtonSubmit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      modalVisible: false,
      isConnected: true
    };

    NetInfo.isConnected.fetch().then(isConnected => {
        this.setState({isConnected});
    });

    this._onPress = this._onPress.bind(this);

    console.log("isConnected constructor:", this.state.isConnected);

    

    this.buttonAnimated = new Animated.Value(0);
    this.growAnimated = new Animated.Value(0);
    

    console.log("check ucid, password",this.props);
  }

  componentDidMount() {
    NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
  }

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);
  }

  handleConnectivityChange = isConnected => {
    this.setState({isConnected});
  };

  validateLogin = async (ucid, password) => {
    await this.setState({ modalVisible: true });
    await this.setState({ loading: true });

    let ucidString = ucid.toString();
    let url = 'https://wt-0cd1e9e1874510cd90a9ec9f1e085110-0.sandbox.auth0-extend.com/express-with-db-usingID/'+ucidString;
    console.log("final url:", url);
    const response = await fetch(
      url
    ).then((response) => {
      console.log("response: ", response);
    if(response.ok) {
        return response.json();
    } else {
        this.setState({ modalVisible: false });
        this.setState({ loading: false });
        Alert.alert(
          'UCID not Registered',
          'Kindly make an account and register your UCID',
          [
            {text: 'OK', onPress: () => console.log('OK Pressed Login')},
          ],
          {cancelable: false},
        );
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
      this.setState({ modalVisible: false });
      this.setState({ loading: false });

      if(getPassword == password){
        Actions.menuScreen();
      } else {
          Alert.alert(
            'Wrong Password',
            'Kindly check your Password and try again',
            [
            {text: 'OK', onPress: () => console.log('OK Pressed Login')},
            ],
            {cancelable: false},
          );
        // ToastAndroid.show("Invalid Password",ToastAndroid.SHORT);
      }
    })
    .catch((error) => {
      this.setState({ modalVisible: false });
      this.setState({ loading: false });
      if(error === 'TypeError: Network request failed'){
        console.log("made my life easy");
      }
      Alert.alert(
        'UCID not Registered',
        'Kindly make an account and register your UCID',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed Login')},
        ],
        {cancelable: false},
      );
      console.log("Caught error",error);
    });





    

  }

  

  _onPress() {
    console.log("in on press");
    console.log("isConnected: ", this.state.isConnected);
    if(!this.state.isConnected){
      console.log("No internet connection!");
      Alert.alert(
        'No Internet Connection',
        'Kindly check your Internet Connection',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed Login')},
        ],
        {cancelable: false},
      );
      return;
    }
    let validUCID = this.validateLogin(this.props.usernameVal, this.props.passwordVal);
    console.log("validUCID", validUCID);
    console.log("validateLogin", this.validateLogin);
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
        <Modal
        transparent={true}
        animationType={'none'}
        visible={this.state.modalVisible}
        onRequestClose={() => {console.log('close modal')}}>
          <View style={styles.modalBackground}>
            <View style={styles.activityIndicatorWrapper}>
            {this.state.loading && ( 
              <View>
                <ActivityIndicator size="large" color="#066A7F" />
                <Text>Logging In</Text>
              </View>
            )}    
            </View>
          </View>
        </Modal>
        <TouchableHighlight
          style={styles.button}
          onPress={this._onPress}
          underlayColor="#f0f4f7"
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableHighlight>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    
    borderRadius:20,
    padding: 30,

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
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    
    
  },
  activityIndicatorWrapper: {
    backgroundColor: '#fff',
    height: 100,
    width: 100,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});

//backgroundColor: '#00000040'