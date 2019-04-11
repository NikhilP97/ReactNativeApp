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
  Alert
} from "react-native";

var getCorrectURL = {
  Microsoft: 'https://wt-0cd1e9e1874510cd90a9ec9f1e085110-0.sandbox.auth0-extend.com/express-with-mongo-db/5ca8a2bffb6fc01d5661f65e'
  

};

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      yourName: "loading",
      branch: "loading",
      companyName: "loading",
      jobProfile: "loading",
      location: "loading",
      package: "loading",
      generalInfo: "loading",
      aptitude: "loading",
      gD: "loading",
      tech: "loading",
      hR: "loading",
      experience: "loading",
      tips: "loading", 
    };
    console.log("props: ", props);
    this.companyName = props.data;
    console.log("company Name received : ", this.companyName);
  }

  static navigationOptions = {
    // title: 'Home screen',
    headerTintColor: 'white',
    headerTitleStyle: { color: 'white' }
  };

  fetchData = async () => {
    await this.setState({ loading: true });
    console.disableYellowBox = true;
    var selectedCompany = this.companyName;
    console.log("selectedCompany: ", selectedCompany)
    const response = await fetch(
      getCorrectURL[selectedCompany]
    )
    .catch((error) => {
      Alert.alert(
        'Network Error',
        'Please try again',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed Quiz')},
        ],
        {cancelable: false},
      );
      console.log("Caught error",error);
      Actions.pop();
      return;
    });
    // console.log("response", response);
    const getData = await response.json();
    // console.log("getQuestions 0 ", getQuestions.results);
    const fetchedYourName = getData.YourName;
    this.setState({ yourName: fetchedYourName});
    
    const fetchedTips = getData.Tips;
    await this.setState({ tips: fetchedTips, loading: false});
    
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <BackgroundView>
      
        
      
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.container}>
          {!this.state.loading && (
            <View style={styles.container}>
              <Text style={styles.header}>
                {this.state.yourName}
              </Text>

              
            </View>
          )}

          {this.state.loading && ( 
            <View style={styles.loadingQuestions}>
              <ActivityIndicator size="large" color="#066A7F" />
              
            </View>
          )}
           
        </View> 
      </ScrollView>  
    </BackgroundView>  
      
    );
  }
}


const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center", 
    
 
  },
  loadingQuestions: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    color:'#000'
  },
  header: {
    marginTop: 10,
    fontFamily: "Raleway-Bold",
    fontSize: 36,
    //fontWeight: "bold",
    color: "#000",

  },
  header2: {
    marginTop: 10,
    fontFamily: "Raleway-Medium",
    fontSize: 20,
    //fontWeight: "bold",
    color: "#052F5F",
    textAlign: 'center',
    //padding: 2
  },
  instructionsTest: {
    marginTop: 5,
    fontSize: 16,
    color: "#0d87a1",
    textAlign: "center",
    padding: 10,
    lineHeight: 25
  },
  example:{
    fontSize: 18,
    fontStyle:'italic',
    fontWeight: '100',
    textAlign: 'center',
    color: "#0d87a1",
    paddingBottom:20,
  },
  _text: {
    fontFamily: "Raleway-MediumItalic",
    fontSize: 18,
    color: "#595457",
    //fontStyle:'italic',
    marginTop: 10,
    textAlign: 'left',
    padding: 15,
  } 
});

/* <ImageBackground
        style={{ flex: 1 }}
        imageStyle={{ width: 'auto', height: '100%' }}
        source={require('../images/experience_test1.png')}
      >
*/