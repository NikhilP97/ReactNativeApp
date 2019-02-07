import React, { Component } from 'react';
import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';

import LoginScreen from './LoginScreen';
import SecondScreen from './SecondScreen';
import CreateAccountScreen from './CreateAccountScreen'
import QuizStartScreen from './QuizStartScreen'
import QuizQuestionScreen from './QuizQuestionScreen'

export default class Main extends Component {
  render() {
	  return (
	    <Router>
	      <Scene key="root">
	        <Scene key="loginScreen"
	          component={LoginScreen}
	        	animation='fade'
	          hideNavBar={true}
	          initial={true}
	        />
	        <Scene key="secondScreen"
	          component={SecondScreen}
	          animation='fade'
	          hideNavBar={true}
	        />
	        <Scene key="createAccountScreen"
	          component={CreateAccountScreen}
	          animation='fade'
	          hideNavBar={true}
	        />
	        <Scene key="quizStartScreen"
	          component={QuizStartScreen}
	          animation='fade'
	          hideNavBar={true}
	        />
	        <Scene key="quizQuestionScreen"
	          component={QuizQuestionScreen}
	          animation='fade'
	          hideNavBar={true}
	        />

	      </Scene>
	    </Router>
	  );
	}
}