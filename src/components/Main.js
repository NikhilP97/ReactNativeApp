import React, { Component } from 'react';
import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';
import {StyleSheet, View, Text, Image, BackHandler, ToastAndroid } from 'react-native';
import LoginScreen from './LoginScreen';
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
import PlacementPolicy from './PlacementPolicy'
import CompanyPrepScreen from './CompanyPrepScreen'
import CompanyMenuItem from './CompanyMenuItem'

//variable 
var backButtonPressedOnceToExit = false;

export default class Main extends Component {

	componentWillMount(){
    	BackHandler.addEventListener('hardwareBackPress', this.onBackPress.bind(this));
  	}

  	componentWillUnmount(){
    	BackHandler.removeEventListener('hardwareBackPress', this.onBackPress.bind(this));
    }

    onBackPress() {
        if (backButtonPressedOnceToExit) {
            BackHandler.exitApp();
        } else {
            if (Actions.currentScene !== 'loginScreen') {
                Actions.pop();
                return true;
            } else {
                backButtonPressedOnceToExit = true;
                ToastAndroid.show("Press Back Button again to exit",ToastAndroid.SHORT);
                //setting timeout is optional
                setTimeout( () => { backButtonPressedOnceToExit = false }, 2000);
                return true;
            }
        }
    }

  render() {
	  return (
	    <Router backAndroidHandler={this.onBackPress} navigationBarStyle={{ backgroundColor: '#427AA1' }} titleStyle={{color: 'white'}}>
	      <Scene key="root">
	        <Scene key="loginScreen"
	          component={LoginScreen}
	        	animation='fade'
	          hideNavBar={true}
	          initial={true}
	        />
	        <Scene key="createAccountScreen"
	          component={CreateAccountScreen}
	          animation='fade'
	          hideNavBar={false}
	          title='Create Account'
	        />
	        <Scene key="forgotPasswordScreen"
	          component={ForgotPasswordScreen}
	          animation='fade'
	          title='Forgot Password'
	          hideNavBar={false}
	        />
	        <Scene key="menuScreen"
	          component={MenuScreen}
	          animation='fade'
	          title='Menu'
	          hideNavBar={false}
	        />
	        <Scene key="placement_policy"
	          component={PlacementPolicy}
	          animation='fade'
	          title='Placement Policy'
	          hideNavBar={false}
	        />
	        <Scene key="companyprep"
	          component={CompanyPrepScreen}
	          animation='fade'
	          title='Company wise preparation'
	          hideNavBar={false}
	        />
	        <Scene key="companymenuitem"
	          component={CompanyMenuItem}
	          animation='fade'
	          title='Menu'
	          hideNavBar={false}
	        />
	        <Scene key="menuItem"
	          component={MenuItem}
	          animation='fade'
	          title='Sub Topics'
	          hideNavBar={false}
	        />
	        <Scene key="aptitudeTopics"
	          component={AptitudeTopics}
	          animation='fade'
	          title='Aptitude'
	          hideNavBar={false}
	        />
	        <Scene key="studyMatCards"
	          component={StudyMatCards}
	          animation='fade'
	          title='Topics'
	          hideNavBar={false}
	        />
	        <Scene key="webViewItem"
	          component={WebViewItem}
	          animation='fade'
	          title='Default'
	          hideNavBar={false}
	        />
	        <Scene key="quizStartScreen"
	          component={QuizStartScreen}
	          animation='fade'
	          title='Start Quiz'
	          hideNavBar={false}
	        />
	        <Scene key="quizQuestionScreen"
	          component={QuizQuestionScreen}
	          animation='fade'
	          title='Questions'
	          hideNavBar={false}
	        />
	        <Scene key="resultsScreen"
	          component={ResultsScreen}
	          animation='fade'
	          title='Results'
	          hideNavBar={false}
	        />
	        <Scene key="predictCompany"
	          component={PredictCompany}
	          animation='fade'
	          title='Companies'
	          hideNavBar={false}
	        />
	        <Scene key="infosys"
	          component={Infosys}
	          animation='fade'
	          title='Company Experience'
	          hideNavBar={false}
	        />
	        
	        

	      </Scene>
	    </Router>
	  );
	}
}

