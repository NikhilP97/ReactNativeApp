import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo';
import Form from './Form';
import Wallpaper from './Wallpaper';
import ButtonSubmit from './ButtonSubmit';
import SignupSection from './SignupSection';
import BackgroundView from './BackgroundView'
import {StyleSheet, View, Text, Image, BackHandler} from 'react-native';


//variable 
var backButtonPressedOnceToExit = false;

export default class LoginScreen extends Component {

	


	render() {
		return (
			<BackgroundView>
			<Logo />
			<Form />
			</BackgroundView>  
		);
	}
}



/*
//#052F5F - davys grey
//#DBCDC6 - peach
//#8A716A - matte brown
//#104547 - MSU green (dark)
//#E7E247 - Pale Yellow
//#EFC7C2 - Tea Rose

*/