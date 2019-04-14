import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo';
import Form from './Form';
import Wallpaper from './Wallpaper';
import ButtonSubmit from './ButtonSubmit';
import SignupSection from './SignupSection';
import BackgroundView from './BackgroundView';
import {Actions, ActionConst} from 'react-native-router-flux';
import { ImageBackground } from 'react-native';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Alert
} from "react-native";

import Pdf from 'react-native-pdf';

export default class PlacementPolicy extends Component {

  constructor(props) {
    super(props);
    this.pdf = null;
  }
  
  render() {
    //const source = {uri:'http://samples.leanpub.com/thereactnativebook-sample.pdf',cache:true};
    //const source = {uri:'bundle-assets://pdf/Placement_Policy.pdf'};
    let yourPDFURI = {uri:'bundle-assets://pdf/test.pdf', cache: true};

    return (

       //yourPDFURI = {uri:'bundle-assets://pdf/example.pdf', cache: true};
         <ScrollView contentContainerStyle={{flexGrow: 1}}>

         <View style={{flex: 1}}>
            <Pdf ref={(pdf)=>{this.pdf = pdf;}}
            source={yourPDFURI}
            style={{flex: 1}}
            onError={(error)=>{console.log(error);}} />
        </View>
         

         
            </ScrollView>

      



      
    );
  }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 25,
    },
    pdf: {
        flex:1,
        width:Dimensions.get('window').width,
    }
 
});

