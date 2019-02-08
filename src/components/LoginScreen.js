import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo';
import Form from './Form';
import Wallpaper from './Wallpaper';
import ButtonSubmit from './ButtonSubmit';
import SignupSection from './SignupSection';
import BackgroundView from './BackgroundView'

export default class LoginScreen extends Component {
  render() {
    return (
      <BackgroundView>
      <Wallpaper>
        <Logo />
        <Form />
        
        
      </Wallpaper>
      </BackgroundView>
    );
  }
}

