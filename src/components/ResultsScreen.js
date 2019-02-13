import React from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  Button,
  Alert,
  TouchableHighlight,
  ProgressBarAndroid,
  Platform,
  Image
  
} from "react-native";

import BackgroundView from './BackgroundView'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
// import CountdownCircle from 'react-native-countdown-circle'
import * as Progress from 'react-native-progress';
import Pie from 'react-native-pie';
import { SectionGrid } from 'react-native-super-grid';
import {Actions, ActionConst} from 'react-native-router-flux';


export default class ResultsScreen extends React.Component {

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
        score: 16,
        section1: 10,
        section2: 15,
        section3: 20,
        section4: 20,


        
        correctAnswers: 0
      },
      completed: true
    };



  }

  getPredictCompany = () =>{
    Actions.predictCompany();
  }

  render() {

    

    return (
      //Put your code here and don't fuck up indentation
//<View style={styles.MainContainer}>
//</View>
      <BackgroundView>


      {this.state.completed === true && this.state.results.score > 10 && this.state.results.score < 15  &&  (
        <View style={{ alignItems: "center", marginTop: 50 }}>

        <Pie

            radius={70}
            //completly filled pie chart with radius 70
            innerRadius={40}
            //to make donut pie chart define inner radius
            series={[10, 20, 30, 20, 20]}
            //values to show and color sequentially
            colors={['#f00', '#0f0', '#00f', '#ff0','#6699ff']}
            // <View style={styles.gauge}>
            // <Text style={styles.gaugeText}>Label</Text>
            // </View>
          />
          <Text style={{ fontSize: 25, marginTop: 40 }}>Quiz Completed</Text>
          <Text style={{ fontSize: 25 }}>Deloitte</Text>
          <Text>Correct Answers: {this.state.results.correctAnswers}</Text>
          <Text>
            Incorrect Answers: {25 - this.state.results.correctAnswers}
          </Text>
          <Text>Total Score: {100}</Text>
          <Text>Obtained Score: {this.state.results.score}</Text>

          <TouchableHighlight
                style={styles.button}
                onPress={this.getPredictCompany}
                underlayColor="#f0f4f7">
                <Text style={styles.buttonText}>Predict my Comapny</Text>
           </TouchableHighlight>


          <TouchableHighlight
          style={styles.button}
          onPress={this.reset}
          underlayColor="#f0f4f7">
          <Text style={styles.buttonText}>Restart Quiz</Text>
          </TouchableHighlight>
      
        </View>
      )}

      {this.state.completed === true && this.state.results.score > 15 && this.state.results.score < 25  &&  (
        <View style={{ alignItems: "center", marginTop: 50 }}>

        <Pie

            radius={70}
            //completly filled pie chart with radius 70
            innerRadius={40}
            //to make donut pie chart define inner radius
            series={[10, 20, 30, 20, 20]}
            //values to show and color sequentially
            colors={['#f00', '#0f0', '#00f', '#ff0','#6699ff']}
            // <View style={styles.gauge}>
            // <Text style={styles.gaugeText}>Label</Text>
            // </View>
          />
          <Text style={{ fontSize: 25, marginTop: 40 }}>Quiz Completed</Text>
          <Text style={{ fontSize: 25 }}>Quantiphi</Text>
          <Text>Correct Answers: {this.state.results.correctAnswers}</Text>
          <Text>
            Incorrect Answers: {25 - this.state.results.correctAnswers}
          </Text>
          <Text>Total Score: {100}</Text>
          <Text>Obtained Score: {this.state.results.score}</Text>

          <TouchableHighlight
                style={styles.button}
                onPress={this.getPredictCompany}
                underlayColor="#f0f4f7">
                <Text style={styles.buttonText}>Predict my Comapny</Text>
           </TouchableHighlight>


          <TouchableHighlight
          style={styles.button}
          onPress={this.reset}
          underlayColor="#f0f4f7">
          <Text style={styles.buttonText}>Restart Quiz</Text>
          </TouchableHighlight>
      
        </View>
      )}


      

      
 

      

    

      
    </BackgroundView>

    );
  } 
} 

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: "100%",
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

buttonContainer: {
        flex: 1,
        margin: 35,
        marginTop: -80
    },

  

buttonText: {
    fontSize: 15,
    color: '#0d87a1',
    alignSelf: 'center',
    margin: 8
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

    
    
  },
  logo: {
    backgroundColor: '#056ecf',
    height: 128,
    width: 128,
  },
  gridView: {
    marginTop: 20,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
  sectionHeader: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
    alignItems: 'center',
    backgroundColor: '#636e72',
    color: 'white',
    padding: 10,
  },

  
  
});
