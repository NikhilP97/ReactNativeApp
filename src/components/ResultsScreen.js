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

// var properArray = this.secScoreArray.shift();
// console.log("shifted Array", properArray)
export default class ResultsScreen extends React.Component {

  constructor(props) {
    super(props);
    console.log("props: ", this.props);
    state = {
    	theFinalScore: props.finalScore,
	    theCorrectAnswers: props.correctAns,
	    secScoreArray: props.secScore,
    }
    console.log("state: ", this.state);
    this.theFinalScore = props.finalScore;
    this.theCorrectAnswers = props.correctAns;
	this.secScoreArray = props.secScore;

    

  }

  getPredictCompany = () =>{
    Actions.predictCompany();
  }

  render() {
  	// console.log("shifted Array", this.state.secScoreArray);
  	console.log("state: ", this.state);
  	console.log("this array: ", this.secScoreArray);
    return (
    	<BackgroundView>
	    		<View style={{ alignItems: "center", marginTop: 50 }}>
		    		<Pie
		    		radius={70}
		            //completly filled pie chart with radius 70
		            innerRadius={40}
		            //to make donut pie chart define inner radius
		            series={this.secScoreArray.shift()}
		            //values to show and color sequentially
		            colors={['#f00', '#0f0', '#00f', '#ff0','#6699ff']}
		            />
		            <Text style={{ fontSize: 25, marginTop: 40 }}>Quiz Completed</Text>

		            <Text>Correct Answers: {this.theCorrectAnswers}</Text>
		            <Text>
		            Incorrect Answers: {25 - this.theCorrectAnswers}
		            </Text>
		            <Text>Total Score: {100}</Text>
		            <Text>Obtained Score: {this.theFinalScore}</Text>

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
