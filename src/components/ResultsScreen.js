import React from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  Button,
  Alert,
  TouchableHighlight,
  ProgressBarAndroid
} from "react-native";

// import BackgroundView from './BackgroundView'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
// import CountdownCircle from 'react-native-countdown-circle'
import * as Progress from 'react-native-progress';
import Pie from 'react-native-pie';

export default class QuizQuestionScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      questionsArray: [],
      clearSelection: null,
      currentQuesNum: 0,
      section:0,
      correctScore: 4,
      totalScore: 100,
      getSelectedValue:'',
      getIndex: -1,
      radio_props : [],
      countDownTime: 20,
      questionProgess: 0,
      linearProgVar: 0,
      lastIndexProgress: 0,

      results: {
        score: 10,
        
        correctAnswers: 0
      },
      completed: true
    };



  }

  render() {

    return (
      //Put your code here and don't fuck up indentation

      
        <View style={styles.container}>

          

          

      <View
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
        {this.state.completed === true && this.state.results.score < 5 && (
        <Pie
            radius={70}
            //completly filled pie chart with radius 70
            innerRadius={40}
            //to make donut pie chart define inner radius
            series={[10, 20, 30, 40]}
            //values to show and color sequentially
            colors={['#f00', '#0f0', '#00f', '#ff0']}
          />
        )}


        {this.state.completed === true && this.state.results.score > 5 && this.state.results.score < 10 && (
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 25 }}>Quiz Completed</Text>
            <Text style={{ fontSize: 25 }}>Infosys</Text>
            <Text>Correct Answers: {this.state.results.correctAnswers}</Text>
            <Text>
              Incorrect Answers: {25 - this.state.results.correctAnswers}
            </Text>
            <Text>Total Score: {100}</Text>
            <Text>Obtained Score: {this.state.results.score}</Text>

            <TouchableHighlight
          style={styles.button}
          onPress={this.reset}
          underlayColor="#f0f4f7">
            <Text style={styles.buttonText}>Restart Quiz</Text>
          </TouchableHighlight>
        
          </View>
       )}

      {this.state.completed === true && this.state.results.score > 10 && this.state.results.score < 15  &&  (
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 25 }}>Quiz Completed</Text>
          <Text style={{ fontSize: 25 }}>Deloitte</Text>
          <Text>Correct Answers: {this.state.results.correctAnswers}</Text>
          <Text>
            Incorrect Answers: {25 - this.state.results.correctAnswers}
          </Text>
          <Text>Total Score: {100}</Text>
          <Text>Obtained Score: {this.state.results.score}</Text>

          <TouchableHighlight
          style={styles.button}
          onPress={this.reset}
          underlayColor="#f0f4f7">
          <Text style={styles.buttonText}>Restart Quiz</Text>
          </TouchableHighlight>
      
        </View>
      )}

            
            

      {this.state.completed === true && this.state.results.score > 15 && this.state.results.score < 20 && (
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 25 }}>Quiz Completed</Text>
          <Text style={{ fontSize: 25 }}>Barclays</Text>
          <Text>Correct Answers: {this.state.results.correctAnswers}</Text>
          <Text>
            Incorrect Answers: {25 - this.state.results.correctAnswers}
          </Text>
          <Text>Total Score: {100}</Text>
          <Text>Obtained Score: {this.state.results.score}</Text>

          <TouchableHighlight
           style={styles.button}
           onPress={this.reset}
           underlayColor="#f0f4f7">
          <Text style={styles.buttonText}>Restart Quiz</Text>
          </TouchableHighlight>
      
        </View>
      )}


      {this.state.completed === true && this.state.results.score > 20 && this.state.results.score < 25 &&  (
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 25 }}>Quiz Completed</Text>
          <Text style={{ fontSize: 25 }}>Morgan Stanley</Text>
          <Text>Correct Answers: {this.state.results.correctAnswers}</Text>
          <Text>
            Incorrect Answers: {25 - this.state.results.correctAnswers}
          </Text>
          <Text>Total Score: {100}</Text>
          <Text>Obtained Score: {this.state.results.score}</Text>

          <TouchableHighlight
          style={styles.button}
          onPress={this.reset}
          underlayColor="#f0f4f7">
          <Text style={styles.buttonText}>Restart Quiz</Text>
          </TouchableHighlight>
      
        </View>
      )}

    </View>

      </View>
    

    );
  } 
} 

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: "100%"
  },

  

buttonText: {
    fontSize: 20,
    color: '#0d87a1',
    alignSelf: 'center',
  },
  button: {
    marginRight:120,
    marginLeft:120,
    marginTop:60,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#262626',
    borderColor: '#0d87a1',
    borderRadius:30,
    borderWidth: 3,

    
    
  }

  
  
});
