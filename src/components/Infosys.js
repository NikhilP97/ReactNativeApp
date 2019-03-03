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
      sampleText: "aaaa",
    };
  }

  fetchData = async () => {
    const response = await fetch(
      this.getCorrectURL.Infosys
    );
    // console.log("response", response);
    const getData = await response.json();
    // console.log("getQuestions 0 ", getQuestions.results);
    const  setData  = getData.Section1;

    this.setState({ sampleText: setData});

  }

  componentDidMount() {
    this.fetchData();
  }




  render() {
    return (
      //<BackgroundView>
      <ScrollView>
      <View style={styles.container}>
      <Text style={styles.header}>
          INFOSYS
      </Text>

      <Text style={styles.header2}>
          Job Profile: System Engineer
      </Text>

      <Text style={styles.header2}>
          checking if it works!!!!!!!!!!!!!!!!!!
          {this.state.sampleText}
      </Text>

      <Text style={styles._text}>
          
      </Text> 

      <Text style={styles.header2}>
          Day 1: Aptitude Round:
      </Text>

      <Text style={styles._text}>
          The students were asked to carry the information sheet that consists of the details
of the students as well as their overall marks right from the S.S.C. upto 6th
semester. The softcopy of this was provided by the TPC’s two days before the
actual process along with ID proof. The students were divided in batches and the
rooms were allotted for the test. The aptitude consisted of three sections namely
Verbal, Quants and Logical Reasoning. The aptitude round had sectional cut offs.

The results were declared on the same day after few hours and the next day
we had a single interview round.

      </Text>

      <Text style={styles.header2}>
          Day 2: Interviews
      </Text>
      
      <Text style={styles._text}>
          On the day of the interview, the shortlisted students assembled in the room around
8:30 am and were divided in batches. The students were asked to carry the same
information sheet which was carried during the aptitude test, ID proof, 2
photographs with name and date of birth written behind it and the Resume (the
most important thing). There was a single interview round which that was a
combination of Technical and HR and was a one to one process. I was asked in
depth about my projects and the main focus was on my current BE project. I was
asked questions such as what is the motivation behind the project, working, circuit
diagram, outcomes, why this particular component is used and also I was asked
about the vendor of a component to which I didn’t have any answer. Further, I was
asked about the uses of Internet and it’s pros and cons, questions on automation
and LabVIEW and also I was asked about the company such as what kind of
training it provides, what actually the company does, what did I liked about the
company, do I follow any blogs related to the company, which is your dream
company, why IT firm and questions on hobbies were also asked. Since I was from
electronics background, I was asked questions on only Basics of Data Structures
and C as mentioned in my resume. Then what subjects I had in the previous
semesters and my areas of interests. After that, I asked a question to the
interviewer related to the training they provide.

      </Text> 

      <Text style={styles.header2}>
          Remember:
      </Text>


      <Text style={styles._text}>
          During the interview, if you don’t have an answer to a question, don’t
get nervous and say no. Saying no does not means that you will be rejected, it
shows your honesty. Be confident during the interview and don’t fumble.
Interviews are meant to test your knowledge, your overall personality and most
importantly your way of handling complex situations. 

      </Text> 


      <Text style={styles.header2}>
          Tips:
      </Text>


      <Text style={styles._text}>
          Before the placement seasons begins, do attend the practice sessions held by
the TPC’s, practice aptitude questions as well as puzzles and also attend mock
interviews. This will help you build confidence. Before the interviews, go through
their websites as there are a lot of questions asked related to the company. Also,
prepare your resume thouroughly as 90% of the questions come from your resume
and the focus is mainly on your projects.
So work hard, believe in yourself and never be disheartened by rejections. 

      </Text> 

       </View> 
       </ScrollView>
      
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    
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
