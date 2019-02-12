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

import BackgroundView from './BackgroundView'
// import { RadioGroup, RadioButton } from "react-native-flexi-radio-button";
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import CountdownCircle from 'react-native-countdown-circle'
import * as Progress from 'react-native-progress';
import Pie from 'react-native-pie';
import {Actions, ActionConst} from 'react-native-router-flux';

var totalQuestions = 24;
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

      results: {
        score: 0,
        correctAnswers: 0
      },
      completed: false
    };
  }

  // https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple
  fetchQuestions = async () => {
    await this.setState({ loading: true });
    // using mLab
    const response = await fetch(
      `https://wt-0cd1e9e1874510cd90a9ec9f1e085110-0.sandbox.auth0-extend.com/express-with-mongo-db/5c5c77a6e7179a2ed61138aa`
    );
    // console.log("response", response);
    const getQuestions = await response.json();
    // console.log("getQuestions 0 ", getQuestions.results);
    const  setQuestionArray  = getQuestions.results;
    // console.log("results", results);

    setQuestionArray.forEach(item => {
      item.id = Math.floor(Math.random() * 10000);
    });

    console.log(" Questions Array: ",setQuestionArray);

    await this.setState({ questionsArray: setQuestionArray, loading: false});

    // get first question
    this.setState({radio_props: [
      {label: this.state.questionsArray[this.state.currentQuesNum].correct_answer, value:this.state.questionsArray[this.state.currentQuesNum].correct_answer},
      {label: this.state.questionsArray[this.state.currentQuesNum].incorrect_answers[0], value:this.state.questionsArray[this.state.currentQuesNum].incorrect_answers[0]},
      {label: this.state.questionsArray[this.state.currentQuesNum].incorrect_answers[1], value:this.state.questionsArray[this.state.currentQuesNum].incorrect_answers[1]},
      {label: this.state.questionsArray[this.state.currentQuesNum].incorrect_answers[2], value:this.state.questionsArray[this.state.currentQuesNum].incorrect_answers[2]},
      ]})

  };

  reset = () => {
    this.setState(
      {
        questionsArray: [],
        currentQuesNum: 0,
        results: {
          score: 0,
          correctAnswers: 0
        },
        completed: false,
        countDownTime: 20,
        questionProgess: 0,
      },
      () => {
        this.fetchQuestions();
      }
    );
  };



  componentDidMount() {
    this.fetchQuestions();
  }

  onSelect = ( value, quesNum) => {
    // set state of value selected
    this.setState({getSelectedValue: value}, function () {
      console.log("selected value: ", this.state.getSelectedValue)
    });
  }

  //Randomize given array
  randomize( array ) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  } 

  getResultsScreen = () =>{
    Actions.resultsScreen();
  }


  getNextQuestion = () => {
    
    console.log("question no : ", this.state.currentQuesNum)
    // Update score before fetching next value
    const question = this.state.questionsArray[this.state.currentQuesNum];
    //const section = this.state.currentQuesNum;
    const isCorrect = question.correct_answer === this.state.getSelectedValue;
    // console.log("isCorrect", isCorrect);
    
    const results = { ...this.state.results };
    results.score = isCorrect ? results.score + 4 : results.score;
    results.correctAnswers = isCorrect
      ? results.correctAnswers + 1
      : results.correctAnswers;

    this.setState({results});
    // console.log("updated results:", results);

    var index = this.state.currentQuesNum + 1;
    var section_index = this.state.currentQuesNum + 5;

    //get next question
    this.setState({currentQuesNum: index}, function () {

      //Randomize answers
      var storedQuestions = [];
      storedQuestions[0] = this.state.questionsArray[this.state.currentQuesNum].correct_answer;
      storedQuestions[1] = this.state.questionsArray[this.state.currentQuesNum].incorrect_answers[0];
      storedQuestions[2] = this.state.questionsArray[this.state.currentQuesNum].incorrect_answers[1];
      storedQuestions[3] = this.state.questionsArray[this.state.currentQuesNum].incorrect_answers[2];
      // console.log("storedQuestions: ", storedQuestions);

      var randomArray = [];
      randomArray = this.randomize(storedQuestions);
      // console.log("randomized: ", randomArray);

      this.setState({radio_props: [
      {label: randomArray[0], value: randomArray[0]},
      {label: randomArray[1], value: randomArray[1]},
      {label: randomArray[2], value: randomArray[2]},
      {label: randomArray[3], value: randomArray[3]},
      ]});

      // For progress Bar
      
      var eachIndexProgress = 1 / totalQuestions;
      var setIndexProgress = this.state.currentQuesNum * eachIndexProgress;
      this.setState({questionProgess: setIndexProgress});
      console.log("final progress", this.state.questionProgess)

      // For countdownCircle and RadioForm reset
      if(this.state.currentQuesNum <= totalQuestions){
        this.countdown.restartCount();
        this.radioFormClear.updateIsActiveIndex(-1);
      }

    });

    //send alert for next section
    this.Nested_If_Else()

    //check if quiz complted
    this.setState({
      completed: this.state.currentQuesNum === totalQuestions ? true : false
    });

    // console.log("updated radio_props ", this.state.radio_props)
    
  }

  Nested_If_Else=()=>{
    if( this.state.currentQuesNum == 4  ){
      Alert.alert("Section 2.");
    }
    else if(this.state.currentQuesNum == 9  ){
      Alert.alert("Section 3.")
    }
    else if(this.state.currentQuesNum == 14  ){
      Alert.alert("Section 4.")
    }
    else if(this.state.currentQuesNum == 19  ){
      Alert.alert("Section 5.")
    }  
  }
 

  render() {

    return (
      <BackgroundView>
        <View style={styles.container}>

          {!!this.state.loading && ( 
            <View style={styles.loadingQuestions}>
              <ActivityIndicator size="large" color="#00ff00" />
              <Text>Please wait while we are loading questions for you</Text>
            </View>
          )}

          {!!this.state.questionsArray.length > 0 &&
            this.state.completed === false && (
            <View style={styles.container}>
              
              <Text style={{ fontSize: 16, color: "#d8ab4e", textAlign: "right" }}>
                {this.state.currentQuesNum + 1} out of 25
              </Text>

              <CountdownCircle
                ref = {ref => this.countdown = ref}
                seconds={this.state.countDownTime}
                radius={30}
                borderWidth={8}
                color="#ff003f"
                bgColor="#fff"
                textStyle={{ fontSize: 20 }}
                onTimeElapsed={() => {console.log('Elapsed!');
                                      this.getNextQuestion()}}
              />

              <Progress.Bar
                progress={this.state.questionProgess}
                width={null}
              />


              <Text style={{ fontSize: 22, fontWeight: "bold", color: "#0d87a1", marginBottom: 20 }}>
                {this.state.questionsArray[this.state.currentQuesNum].question}
              </Text>

              <RadioForm
                ref = {ref => this.radioFormClear = ref}
                radio_props={this.state.radio_props}
                initial={-1}
                formHorizontal={false}
                labelHorizontal={true}
                buttonColor={'#eaeaea'} //default color on loading
                labelColor={'#ffffff'} // default label color on loading
                selectedButtonColor={'#7dce94'} // onClick color on loading
                selectedLabelColor={'#ffffff'} // onClick label color on loading
                labelStyle={{fontSize: 18, color: '#ffffff'}}
                buttonWrapStyle={{marginBottom: 100}}
                animation={true}
                onPress={(value) => {this.onSelect(value, this.state.currentQuesNum)}}
              />

              <TouchableHighlight
                style={styles.button}
                onPress={this.getResultsScreen}
                underlayColor="#f0f4f7">
                  <Text style={styles.buttonText}>Submit Answer</Text>
              </TouchableHighlight>

            </View>
          )}
        </View>
      </BackgroundView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: "100%"
  },
  loadingQuestions: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
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


// Comments Do not delete this under any cirCUMstnace


              // <RadioGroup

              //   selectedIndex={this.state.clearSelection}
              //   onSelect = {(index, value) => this.onSelect(index, value, this.state.currentQuesNum,)}
              // >
              //   <RadioButton value={this.state.questionsArray[this.state.currentQuesNum].correct_answer} >
              //     <Text>{this.state.questionsArray[this.state.currentQuesNum].correct_answer}</Text>
              //   </RadioButton>
         
              //   <RadioButton value={this.state.questionsArray[this.state.currentQuesNum].incorrect_answers[0]}>
              //     <Text>{this.state.questionsArray[this.state.currentQuesNum].incorrect_answers[0]}</Text>
              //   </RadioButton>
         
              //   <RadioButton value={this.state.questionsArray[this.state.currentQuesNum].incorrect_answers[1]}>
              //     <Text>{this.state.questionsArray[this.state.currentQuesNum].incorrect_answers[1]}</Text>
              //   </RadioButton>

              //   <RadioButton value={this.state.questionsArray[this.state.currentQuesNum].incorrect_answers[2]}>
              //     <Text>{this.state.questionsArray[this.state.currentQuesNum].incorrect_answers[2]}</Text>
              //   </RadioButton>

              // </RadioGroup>



              





              // <RadioForm
              //   radio_props={this.state.radio_props} 
              //   initial={-1}
              //   onPress={(value) => {this.onSelect(value, this.state.currentQuesNum)}}
              //   formHorizontal={false}
              //   labelHorizontal={true}
              //   animation={true}
              //   >
              // {this.state.radio_props.map((obj, i) => {
              //   var onPress = (value, index) => {
              //       this.setState({
              //         getSelectedValue: value,
              //         getIndex: index
              //       })
              //     }
              //   return (
              //     <RadioButton selectedButtonColor={'#ffffff'} labelColor={'#ffffff'} labelHorizontal={true} key={i} >
              //       {/*  You can set RadioButtonLabel before RadioButtonInput */}
              //       <RadioButtonInput
              //         obj={obj}
              //         index={i}
              //         isSelected={this.state.getIndex === i}
              //         onPress={(value) => {this.onSelect(value, this.state.currentQuesNum)}}
              //         buttonInnerColor={'#f39c12'}
              //         buttonOuterColor={this.state.value3Index === i ? '#2196f3' : '#000'}
              //         buttonSize={30}
              //         buttonStyle={{}}
              //         buttonWrapStyle={{marginLeft: 10}}
              //       />
              //       <RadioButtonLabel
              //         obj={obj}
              //         index={i}
              //         onPress={(value) => {this.onSelect(value, this.state.currentQuesNum)}}
              //         labelStyle={{fontWeight: 'bold', color: '#2ecc71'}}
              //         labelWrapStyle={{}}
              //       />
              //     </RadioButton>
              //     )
              //   })}
              // </RadioForm>



                // submitAnswer = (index, answer) => {
                //   const question = this.state.questionsArray[index];
                //   const isCorrect = question.correct_answer === answer;
                //   const results = { ...this.state.results };

                //   results.score = isCorrect ? results.score + 5 : results.score;
                //   results.correctAnswers = isCorrect
                //     ? results.correctAnswers + 1
                //     : results.correctAnswers;

                //   this.setState({
                //     currentQuesNum: index + 1,
                //     results,
                //     completed: index === 9 ? true : false
                //   });
                // };