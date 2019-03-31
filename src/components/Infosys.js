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
  ScrollView
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
  'Interactive Brokers': `https://wt-0cd1e9e1874510cd90a9ec9f1e085110-0.sandbox.auth0-extend.com/express-with-mongo-db/5c7d0e71fb6fc072012d5018`,
  'OM Partners': `https://wt-0cd1e9e1874510cd90a9ec9f1e085110-0.sandbox.auth0-extend.com/express-with-mongo-db/5c7d0e71fb6fc072012d5018`,
  Barclays: `https://wt-0cd1e9e1874510cd90a9ec9f1e085110-0.sandbox.auth0-extend.com/express-with-mongo-db/5c7d0e71fb6fc072012d5018`,
  Nomura: `https://wt-0cd1e9e1874510cd90a9ec9f1e085110-0.sandbox.auth0-extend.com/express-with-mongo-db/5c7d0e71fb6fc072012d5018`,
  HDFC: `https://wt-0cd1e9e1874510cd90a9ec9f1e085110-0.sandbox.auth0-extend.com/express-with-mongo-db/5c7d0e71fb6fc072012d5018`,
  Amazon: `https://wt-0cd1e9e1874510cd90a9ec9f1e085110-0.sandbox.auth0-extend.com/express-with-mongo-db/5c7d0e71fb6fc072012d5018`,
  PhonePe: `https://wt-0cd1e9e1874510cd90a9ec9f1e085110-0.sandbox.auth0-extend.com/express-with-mongo-db/5c7d0e71fb6fc072012d5018`,
  'Credit Suisse': `https://wt-0cd1e9e1874510cd90a9ec9f1e085110-0.sandbox.auth0-extend.com/express-with-mongo-db/5c7d0e71fb6fc072012d5018`,
  'JP Morgan Chase': `https://wt-0cd1e9e1874510cd90a9ec9f1e085110-0.sandbox.auth0-extend.com/express-with-mongo-db/5c7d0e71fb6fc072012d5018`,
  Accolite: `https://wt-0cd1e9e1874510cd90a9ec9f1e085110-0.sandbox.auth0-extend.com/express-with-mongo-db/5c7d0e71fb6fc072012d5018`,
  'Deutsche Bank': `https://wt-0cd1e9e1874510cd90a9ec9f1e085110-0.sandbox.auth0-extend.com/express-with-mongo-db/5c7d0e71fb6fc072012d5018`,
  'Morgan Stanley': `https://wt-0cd1e9e1874510cd90a9ec9f1e085110-0.sandbox.auth0-extend.com/express-with-mongo-db/5c7d0e71fb6fc072012d5018`,
  Accolite: `https://wt-0cd1e9e1874510cd90a9ec9f1e085110-0.sandbox.auth0-extend.com/express-with-mongo-db/5c7d0e71fb6fc072012d5018`,
  Microsoft: 'https://wt-0cd1e9e1874510cd90a9ec9f1e085110-0.sandbox.auth0-extend.com/express-with-mongo-db/5c7d0e71fb6fc072012d5018'
  

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

  fetchData = async () => {
    await this.setState({ loading: true });
    var selectedCompany = this.companyName;
    console.log("selectedCompany: ", selectedCompany)
    const response = await fetch(
      getCorrectURL[selectedCompany]
    );
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
      //<BackgroundView>
      <ImageBackground
        style={{ flex: 1 }}
        imageStyle={{ width: 'auto', height: '100%' }}
        source={require('../images/experience.png')}
      >
        
      
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.container}>
          {!this.state.loading && (
            <View style={styles.container}>
              <Text style={styles.header}>
                {this.state.yourName}
              </Text>

              <Text style={styles.header}>
                {this.state.branch}
              </Text>

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
                Aptitude:
              </Text>

              <Text style={styles._text}>
                {this.state.aptitude}
              </Text>

              <Text style={styles.header2}>
                Group Discussion:
              </Text>
              
              <Text style={styles._text}>
                {this.state.gD}
              </Text> 

              <Text style={styles.header2}>
                Technical Interview:
              </Text>

              <Text style={styles._text}>
                {this.state.tech}
              </Text>

              <Text style={styles.header2}>
                HR:
              </Text>

              <Text style={styles._text}>
                {this.state.hR}
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
              <ActivityIndicator size="large" color="#00caa6" />
              <Text style={{color:'#00caa6', fontSize: 20}}>Fetching</Text>
            </View>
          )}
           
        </View> 
      </ScrollView>  
    </ImageBackground>  
      
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
    fontFamily: "Helvetica",
    fontSize: 36,
    fontWeight: "bold",
    color: "#00caa6",
  },
  header2: {
    marginTop: 10,
    fontFamily: "Helvetica",
    fontSize: 20,
    fontWeight: "bold",
    color: "#EFD469",
    textAlign: 'left',
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
    fontFamily: "Verdana",
    fontSize: 18,
    color: "#9ed2c5",
    //fontStyle:'italic',
    marginTop: 10,
    textAlign: 'left',
  } 
});
