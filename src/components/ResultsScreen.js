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
    let sampleData = [
    {
      value: 50,
      label: 'Quants',
      color: 'red',
    }, {
      value: 40,
      label: 'LR and DI',
      color: 'blue'
    }, {
      value: 25,
      label: 'Verbal',
      color: 'green'
    },
    {
      value: 25,
      label: 'Technical',
      color: '#0d87a1'
    },
     {
      value: 25,
      label: 'Core',
      color: '#ffff00'
    }
 
  ]
  


    
  
       

    
    return (
<<<<<<< HEAD
      <BackgroundView>
      
      
 
  <View style={{ alignItems: "center", marginTop: 25, borderRadius: 40 }}>
  <PureChart data={sampleData} type='pie' />

              <TouchableHighlight
                style={styles.button}
                onPress={this.getPredictCompany}
                underlayColor="#f0f4f7">
                <Text style={styles.buttonText}>Predict my Comapny</Text>
                </TouchableHighlight>

                <TouchableHighlight
                style={styles.button4}
                underlayColor="#f0f4f7">
                <Text style = {styles.buttonText3}>Correct Answers: {this.theCorrectAnswers}</Text>
                </TouchableHighlight>


                <TouchableHighlight
                style={styles.button3}
                underlayColor="#f7f0f0">
                <Text style = {styles.buttonText3}>Incorrect Answers: {25 - this.theCorrectAnswers}</Text>
                </TouchableHighlight>

                <TouchableHighlight
                style={styles.button1}
                underlayColor="#f0f4f7">
                <Text style = {styles.buttonText3}>Total Score: {100} </Text>
                </TouchableHighlight>

                
                
                
                <TouchableHighlight
                style={styles.button1}
                underlayColor="#f0f4f7">
                <Text style = {styles.buttonText3}>Obtained Score: {this.theFinalScore}</Text>
                </TouchableHighlight>
                
                

                

                
          
            </View>
                
                
            
      </BackgroundView>
=======
    	<BackgroundView>
	    		<View style={{ alignItems: "center", marginTop: 50 }}>
		    		<Pie
		    		radius={70}
		            //completly filled pie chart with radius 70
		            innerRadius={40}
		            //to make donut pie chart define inner radius
		            series={this.secScoreArray}
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
>>>>>>> b79e493f4b4f955f45f54a35a8a97942811e0b2c
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
    backgroundColor:'#262626',
    borderColor: '#0d87a1',
    borderRadius:40,
    borderWidth: 3,
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
    
    backgroundColor:'#ff0000',
    height: 35,
    width: 250,


    
    
    borderWidth: 3,
  },

  button1: {
    
    backgroundColor: '#0d87a1',
    height: 35,
    width: 250,


    
    
    borderWidth: 3,
  },
  button4: {
    
    backgroundColor:'#32CD32',
    height: 35,
    width: 250,
    marginTop: 45,

    
    
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