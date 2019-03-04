import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo';
import Form from './Form';
import Wallpaper from './Wallpaper';
import ButtonSubmit from './ButtonSubmit';
import SignupSection from './SignupSection';
import BackgroundView from './BackgroundView';
import {Actions, ActionConst} from 'react-native-router-flux';
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
  Infosys: `https://wt-0cd1e9e1874510cd90a9ec9f1e085110-0.sandbox.auth0-extend.com/express-with-mongo-db/5c7c357ae7179a3e36e083da`
};

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      companyName: "loading",
      jobProfile: "loading",
      section1: "loading",
      header1: "loading",
      section2: "loading",
      header2: "loading",
      section3: "loading",
      header3: "loading",
      section4: "loading",
      header4: "loading",
      section5: "loading",
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
    const fetchedCompanyName = getData.CompanyName;
    this.setState({ companyName: fetchedCompanyName});
    const fetchedJobProfile = getData.JobProfile;
    this.setState({ jobProfile: fetchedJobProfile});
    const  fetchedSection1  = getData.Section1;
    this.setState({ section1: fetchedSection1});
    const  fetchedHeader1  = getData.Header1;
    this.setState({ header1: fetchedHeader1});
    const  fetchedSection2  = getData.Section2;
    this.setState({ section2: fetchedSection2});
    const  fetchedHeader2  = getData.Header2;
    this.setState({ header2: fetchedHeader2});
    const  fetchedSection3  = getData.Section3;
    this.setState({ section3: fetchedSection3});
    const  fetchedHeader3  = getData.Header3;
    this.setState({ header3: fetchedHeader3});
    const  fetchedSection4  = getData.Section4;
    this.setState({ section4: fetchedSection4});
    const  fetchedHeader4  = getData.Header4;
    this.setState({ header4: fetchedHeader4});
    const  fetchedSection5  = getData.Section5;
    await this.setState({ section5: fetchedSection5, loading: false});
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      //<BackgroundView>
      
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.container}>
          {!this.state.loading && (
            <View style={styles.container}>
              <Text style={styles.header}>
                {this.state.companyName}
              </Text>

              <Text style={styles.header2}>
                {this.state.jobProfile}
              </Text>

              <Text style={styles.header2}>
                {this.state.section1}
              </Text>

              <Text style={styles.header2}>
                {this.state.header1}
              </Text>

              <Text style={styles._text}>
                {this.state.section2}
              </Text>

              <Text style={styles.header2}>
                {this.state.header2}
              </Text>
              
              <Text style={styles._text}>
                {this.state.section3}
              </Text> 

              <Text style={styles.header2}>
                {this.state.header3}
              </Text>

              <Text style={styles._text}>
                {this.state.section4}
              </Text> 

              <Text style={styles.header2}>
                {this.state.header4}
              </Text>

              <Text style={styles._text}>
                {this.state.section5}   
              </Text>
            </View>
          )}

          {this.state.loading && ( 
            <View style={styles.loadingQuestions}>
              <ActivityIndicator size="large" color="#000" />
              <Text style={{color:'#000', fontSize: 20}}>loading</Text>
            </View>
          )}
           
        </View> 
      </ScrollView>  
      
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
    color: "black",
  },
  header2: {
    marginTop: 10,
    fontFamily: "Helvetica",
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
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
    color: "black",
    //fontStyle:'italic',
    marginTop: 10,
    textAlign: 'left',
  } 
});
