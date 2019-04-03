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
  
  
} from "react-native";

import BackgroundView from './BackgroundView'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
// import CountdownCircle from 'react-native-countdown-circle'
import * as Progress from 'react-native-progress';
import Pie from 'react-native-pie';
import { SectionGrid } from 'react-native-super-grid';
import {Actions, ActionConst} from 'react-native-router-flux';
import { PieChart } from 'react-native-svg-charts';
import { Circle, G, Image } from 'react-native-svg';
import Images from '../images/abcd';
import PureChart from 'react-native-pure-chart';



// var properArray = this.secScoreArray.shift();
// console.log("shifted Array", properArray)
export default class ResultsScreen extends React.Component {

  constructor(props) {
    super(props);
    console.log("props: ", this.props);
    
    this.theFinalScore = props.finalScore;
    this.theCorrectAnswers = props.correctAns;
    this.secScoreArray = props.secScore;

    

  }

  getPredictCompany = () =>{
    Actions.predictCompany(this.theFinalScore);

  }

  render() {

	let sampleData = [
		{
		  value: this.secScoreArray[0],
		  label: 'Quants',
		  color: 'red',
		}, {
		  value: this.secScoreArray[1],
		  label: 'LR and DI',
		  color: 'blue'
		}, {
		  value: this.secScoreArray[2],
		  label: 'Verbal',
		  color: 'green'
		},
		{
		  value: this.secScoreArray[3],
		  label: 'Technical',
		  color: '#0d87a1'
		},
		 {
		  value: this.secScoreArray[4],
		  label: 'Core',
		  color: '#ffff00'
		}
	]

	return (

		
	  
	  		<View style={{ alignItems: "center", marginTop: 75, borderRadius: 40 }}>
	  		  	<PureChart data={sampleData} type='pie' />

		      	

		        <TouchableHighlight
		        style={styles.button4}
		        >
		        <Text style = {styles.buttonText3}>Correct Answers: {this.theCorrectAnswers}</Text>
		        </TouchableHighlight>


		        <TouchableHighlight
		        style={styles.button3}
		        >
		        <Text style = {styles.buttonText3}>Incorrect Answers: {25 - this.theCorrectAnswers}</Text>
		        </TouchableHighlight>

		        <TouchableHighlight
		        style={styles.button1}
		        >
		        <Text style = {styles.buttonText3}>Obtained Score: {this.theFinalScore}</Text>
		        </TouchableHighlight>

            <TouchableHighlight
            style={styles.button1}
            >
            <Text style = {styles.buttonText3}>Total Score: {100} </Text>
            </TouchableHighlight>

            <TouchableHighlight
            style={styles.button}
            onPress={this.getPredictCompany}
            >
            <Text style={styles.buttonText}>Predict my Comapny</Text>
            </TouchableHighlight>
	        </View>
		

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
    color: '#fff',
    alignSelf: 'center',
    margin: 8
  },

  buttonText2: {
    
    fontSize: 22,
    fontWeight: "bold",
    color: '#262626',
    alignSelf: 'center',
    
    marginRight:12,
    marginLeft:12,
  },
  buttonText3: {
    
    fontSize: 15,
    fontWeight: "bold",
    color: '#262626',
    alignSelf: 'center',
    
    marginRight:12,
    marginLeft:12,
  },
  button: {
    marginRight:120,
    marginLeft:120,
    marginTop:75,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor: '#066A7F',
    borderColor: '#066A7F',
    borderRadius:40,
    borderWidth: 1,
  },
   button2: {
    marginRight:120,
    marginLeft:120,
    marginTop:85,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#0d87a1',
    height: 50,
    width: 250,

    
    
    borderWidth: 3,
  },

  button3: {
    marginTop: 20,
    backgroundColor:'#ff0000',
    height: 35,
    width: 250,


    
    
    borderWidth: 2,
  },

  button1: {
    marginTop: 20,
    backgroundColor: '#0d87a1',
    height: 35,
    width: 250,


    
    
    borderWidth: 2,
  },
  button4: {
    marginTop: 20,
    backgroundColor:'#32CD32',
    height: 35,
    width: 250,
    marginTop: 45,

    
    
    borderWidth: 2,
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










//<Text style={{ fontSize: 25, marginTop: 40 }}>Quiz Completed</Text>

                // <Text>Correct Answers: {this.theCorrectAnswers}</Text>
                // <Text>
                // Incorrect Answers: {25 - this.theCorrectAnswers}
                // </Text>
                // <Text>Total Score: {100}</Text>
                // <Text>Obtained Score: {this.theFinalScore}</Text>

                // <TouchableHighlight
                // style={styles.button}
                // onPress={this.getPredictCompany}
                // underlayColor="#f0f4f7">
                // <Text style={styles.buttonText}>Predict my Comapny</Text>
                // </TouchableHighlight>

                // <TouchableHighlight
                // style={styles.button}
                // onPress={this.reset}
                // underlayColor="#f0f4f7">
                // <Text style={styles.buttonText}>Restart Quiz</Text>
                // </TouchableHighlight>