import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo';
import Form from './Form';
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
  Infosys: `https://wt-0cd1e9e1874510cd90a9ec9f1e085110-0.sandbox.auth0-extend.com/express-with-mongo-db/5c7c357ae7179a3e36e083da`,
  Capgemini: `https://wt-0cd1e9e1874510cd90a9ec9f1e085110-0.sandbox.auth0-extend.com/express-with-mongo-db/5c7cfba8fb6fc072012d4220`,
  'Citius Tech': `https://wt-0cd1e9e1874510cd90a9ec9f1e085110-0.sandbox.auth0-extend.com/express-with-mongo-db/5c7d0142fb6fc072012d46ba`,
  Quantiphi: `https://wt-0cd1e9e1874510cd90a9ec9f1e085110-0.sandbox.auth0-extend.com/express-with-mongo-db/5c7d0e71fb6fc072012d5018`,
  Deloitte: `https://wt-0cd1e9e1874510cd90a9ec9f1e085110-0.sandbox.auth0-extend.com/express-with-mongo-db/5c7d15b3fb6fc072012d557f`,
  IVP: `https://wt-0cd1e9e1874510cd90a9ec9f1e085110-0.sandbox.auth0-extend.com/express-with-mongo-db/5c9368d0fb6fc0465d4a1e22`,
  KPMG: `https://wt-0cd1e9e1874510cd90a9ec9f1e085110-0.sandbox.auth0-extend.com/express-with-mongo-db/5c9372b8fb6fc0465d4a2810`,
  GEP: `https://wt-0cd1e9e1874510cd90a9ec9f1e085110-0.sandbox.auth0-extend.com/express-with-mongo-db/5c9375affb6fc0465d4a29a9`,
  Amadeus: `https://wt-0cd1e9e1874510cd90a9ec9f1e085110-0.sandbox.auth0-extend.com/express-with-mongo-db/5c937e91fb6fc0465d4a2c7d`,
  Siemens: `https://wt-0cd1e9e1874510cd90a9ec9f1e085110-0.sandbox.auth0-extend.com/express-with-mongo-db/5c9380d2fb6fc0465d4a2d10`,
  Amdocs: `https://wt-0cd1e9e1874510cd90a9ec9f1e085110-0.sandbox.auth0-extend.com/express-with-mongo-db/5c9e31e9fb6fc0465d4ebd00`,
  ISS: `https://wt-0cd1e9e1874510cd90a9ec9f1e085110-0.sandbox.auth0-extend.com/express-with-mongo-db/5c9e337cfb6fc0465d4ebdd4`,
  'ZS Associates': `https://wt-0cd1e9e1874510cd90a9ec9f1e085110-0.sandbox.auth0-extend.com/express-with-mongo-db/5c9e3cc6fb6fc0465d4ec2ee`,
  Carwale: `https://wt-0cd1e9e1874510cd90a9ec9f1e085110-0.sandbox.auth0-extend.com/express-with-mongo-db/5c9e3d5efb6fc0465d4ec332`,
  'Interactive Brokers': `https://wt-0cd1e9e1874510cd90a9ec9f1e085110-0.sandbox.auth0-extend.com/express-with-mongo-db/5ca861cdfb6fc01d5661eb6c`,
  'OM Partners': `https://wt-0cd1e9e1874510cd90a9ec9f1e085110-0.sandbox.auth0-extend.com/express-with-mongo-db/5ca86259fb6fc01d5661eb7c`,
  Barclays: `https://wt-0cd1e9e1874510cd90a9ec9f1e085110-0.sandbox.auth0-extend.com/express-with-mongo-db/5ca864cdfb6fc01d5661ec20`,
  Nomura: `https://wt-0cd1e9e1874510cd90a9ec9f1e085110-0.sandbox.auth0-extend.com/express-with-mongo-db/5ca86740fb6fc01d5661ec70`,
  Axxela: `https://wt-0cd1e9e1874510cd90a9ec9f1e085110-0.sandbox.auth0-extend.com/express-with-mongo-db/5ca869e8fb6fc01d5661ece0`,
  Amazon: `https://wt-0cd1e9e1874510cd90a9ec9f1e085110-0.sandbox.auth0-extend.com/express-with-mongo-db/5ca86f7bfb6fc01d5661edb3`,
  PhonePe: `https://wt-0cd1e9e1874510cd90a9ec9f1e085110-0.sandbox.auth0-extend.com/express-with-mongo-db/5ca87425fb6fc01d5661ee71`,
  'Credit Suisse': `https://wt-0cd1e9e1874510cd90a9ec9f1e085110-0.sandbox.auth0-extend.com/express-with-mongo-db/5ca87675fb6fc01d5661eeef`,
  'JP Morgan Chase': `https://wt-0cd1e9e1874510cd90a9ec9f1e085110-0.sandbox.auth0-extend.com/express-with-mongo-db/5ca8815afb6fc01d5661f0dd`,
  Accolite: `https://wt-0cd1e9e1874510cd90a9ec9f1e085110-0.sandbox.auth0-extend.com/express-with-mongo-db/5ca8853afb6fc01d5661f149`,
  'Deutsche Bank': `https://wt-0cd1e9e1874510cd90a9ec9f1e085110-0.sandbox.auth0-extend.com/express-with-mongo-db/5ca89db5fb6fc01d5661f578`,
  'Morgan Stanley': `https://wt-0cd1e9e1874510cd90a9ec9f1e085110-0.sandbox.auth0-extend.com/express-with-mongo-db/5ca8a007fb6fc01d5661f5d7`,
  Accolite: `https://wt-0cd1e9e1874510cd90a9ec9f1e085110-0.sandbox.auth0-extend.com/express-with-mongo-db/5ca8853afb6fc01d5661f149`,
  Microsoft: 'https://wt-0cd1e9e1874510cd90a9ec9f1e085110-0.sandbox.auth0-extend.com/express-with-mongo-db/5ca8a2bffb6fc01d5661f65e'
  

};

export default class CompanyTips extends Component {
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
    const fetchedBranch = getData.Branch;
    this.setState({ branch: fetchedBranch});
    const fetchedCompanyName = getData.CompanyName;
    this.setState({ companyName: fetchedCompanyName});
    const fetchedJobProfile = getData.JobProfile;
    this.setState({ jobProfile: fetchedJobProfile});
    const fetchedLocation = getData.Location;
    this.setState({ location: fetchedLocation});
    const fetchedPackage = getData.Package;
    this.setState({ package: fetchedPackage});
    const fetchedGeneralInfo = getData.GeneralInfo;
    this.setState({ generalInfo: fetchedGeneralInfo});
    const fetchedAptitude = getData.Aptitude;
    this.setState({ aptitude: fetchedAptitude});
    const fetchedGD = getData.GD;
    this.setState({ gD: fetchedGD});
    const fetchedTech = getData.Tech;
    this.setState({ tech: fetchedTech});
    const fetchedHR = getData.HR;
    this.setState({ hR: fetchedHR});
    const fetchedExperience = getData.Experience;
    this.setState({ experience: fetchedExperience});
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
                {this.state.companyName}
              </Text>

              <Text style={styles.header2}>
                Job Profile: {this.state.jobProfile}
              </Text>

              <Text style={styles.header2}>
                Location: {this.state.location}
              </Text>

              <Text style={styles.header2}>
                Package: {this.state.package}
              </Text>

              <Text style={styles._text}>
                {this.state.generalInfo}
              </Text>

               

              <Text style={styles.header2}>
                Interview Experience:
              </Text>

              <Text style={styles._text}>
                {this.state.experience}   
              </Text>

              <Text style={styles.header2}>
                Tips:
              </Text>

              <Text style={styles._text}>
                {this.state.tips}   
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