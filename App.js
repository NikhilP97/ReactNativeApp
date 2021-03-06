import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

import Main from './src/components/Main';
import SplashScreen from 'react-native-splash-screen';

export default class loginAnimation extends Component {

  componentWillMount() {
    setTimeout(()=>{SplashScreen.hide()}, 2000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Main />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('loginAnimation', () => loginAnimation);