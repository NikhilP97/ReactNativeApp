import React, { Component } from 'react';
import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';

import LoginScreen from './LoginScreen';
import SecondScreen from './SecondScreen';
import CreateAccountScreen from './CreateAccountScreen'
import QuizStartScreen from './QuizStartScreen'
import QuizQuestionScreen from './QuizQuestionScreen'
import ResultsScreen from './ResultsScreen'
import PredictCompany from './PredictCompany'
import Infosys from './Infosys'
import MenuScreen from './MenuScreen'
import MenuItem from './MenuItem'
import WebViewItem from './WebViewItem'
import StudyMatCards from './StudyMatCards'
import AptitudeTopics from './AptitudeTopics'
import ForgotPasswordScreen from './ForgotPasswordScreen'

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
	        <Scene key="forgotPasswordScreen"
	          component={ForgotPasswordScreen}
	          animation='fade'
	          hideNavBar={true}
	        />
	        <Scene key="menuScreen"
	          component={MenuScreen}
	          animation='fade'
	          hideNavBar={true}
	        />
	        <Scene key="menuItem"
	          component={MenuItem}
	          animation='fade'
	          hideNavBar={true}
	        />
	        <Scene key="aptitudeTopics"
	          component={AptitudeTopics}
	          animation='fade'
	          hideNavBar={true}
	        />
	        <Scene key="studyMatCards"
	          component={StudyMatCards}
	          animation='fade'
	          hideNavBar={true}
	        />
	        <Scene key="webViewItem"
	          component={WebViewItem}
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
	        <Scene key="resultsScreen"
	          component={ResultsScreen}
	          animation='fade'
	          hideNavBar={true}
	        />
	        <Scene key="predictCompany"
	          component={PredictCompany}
	          animation='fade'
	          hideNavBar={true}
	        />
	        <Scene key="infosys"
	          component={Infosys}
	          animation='fade'
	          hideNavBar={true}
	        />

	      </Scene>
	    </Router>
	  );
	}
}