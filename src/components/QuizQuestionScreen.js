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
  Dimensions
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
      getSelectedValue:'',
      getIndex: -1,
      radio_props : [],
      countDownTime: 20,
      questionProgess: 0,
      sectionScore: [0],
      lastSectionScore: 0,
      results: {
        score: 0,
        correctAnswers: 0,
        
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

  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Use this as props for your screen!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // Usage
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //      theUltimateScore: this.props.finalScore,
  //      theCorrectAnswers: this.props.correctAns
  //   }   
  // }
  // If you still can't understand, GOD HELP YOU! xD
  getResultsScreen = () =>{
    var array = [...this.state.sectionScore];
    console.log("array: ", array)
    array.splice(0, 1);
    console.log("array splice: ", array)
    this.setState({sectionScore: array}, function() {
        var sendData = {
        finalScore: this.state.results.score, // here finalScore can be used in other file using props
        correctAns: this.state.results.correctAnswers,
        secScore: this.state.sectionScore
      }
      console.log("sendData: ", sendData);
      Actions.resultsScreen(sendData);
    })
    
  }


  getNextQuestion = () => {

    // Check if radio button is clicked else send alert
    if (typeof this.state.getSelectedValue == 'undefined'){
      Alert.alert(
        'Button Not Selected',
        'Kindly choose an option to continue',
        [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
        { cancelable: false }
      );
      return;
    }
    
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

    // console.log("question no : ", this.state.currentQuesNum);
    // console.log("current score: ", this.state.results.score);
    var multipleOfFive = this.state.currentQuesNum+1;
    this.setState({results}, function () {
      
      console.log("multipleOfFive : ", multipleOfFive);
      if(multipleOfFive % 5 == 0){
        var index = multipleOfFive/5;
        // console.log("current section: ", index)
        var getSectionScore = this.state.results.score - this.state.lastSectionScore;
        this.setState({
          sectionScore: [...this.state.sectionScore, getSectionScore]
        });
        this.setState({
          lastSectionScore: this.state.results.score
        });

      }
      
    });
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
      // console.log("final progress", this.state.questionProgess)

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
    console.log("section Score: ", this.state.sectionScore);
    return (
      <BackgroundView>
        <View style={styles.container}>

          {!!this.state.loading && ( 
            <View style={styles.loadingQuestions}>
              <ActivityIndicator size="large" color="#00ff00" />
              <Text style={{color:'#fff'}}>Please wait while we are loading questions for you</Text>
            </View>
          )}

          {!!this.state.questionsArray.length > 0 &&
            this.state.completed === false && (
            <View style={styles.innerContainer}>

              <View style={{margin: 5, flexDirection:'row', justifyContent: 'space-between'}}>
                <CountdownCircle
                  ref = {ref => this.countdown = ref}
                  seconds={this.state.countDownTime}
                  radius={30}
                  borderWidth={4}
                  color="#0d87a1"
                  bgColor="#262626"
                  textStyle={{color:"#fff", fontSize: 20 }}
                  onTimeElapsed={() => {console.log('Elapsed!');
                                        this.getNextQuestion()}}
                />

                <Text style={{ fontSize: 25, color: "#d8ab4e",textAlign: "right", marginTop: 12}}>
                Question {this.state.currentQuesNum + 1} /  25
                </Text>

              </View>
              
              
              <View style={{marginTop: 10, justifyContent: 'center',alignItems: 'center'}}>
                <Progress.Bar
                color={'#0d87a1'}
                progress={this.state.questionProgess}
                width={Dimensions.get('window').width - 20}
                height={5}
                />
              </View>
              
              <Text style={{marginTop: 20, marginLeft: 5, marginRight: 5, fontSize: 22, fontWeight: "bold", color: "#f2f2f2", marginBottom: 20 }}>
                Q. {this.state.questionsArray[this.state.currentQuesNum].question}
              </Text>

              <RadioForm
                ref = {ref => this.radioFormClear = ref}
                radio_props={this.state.radio_props}
                initial={-1}
                formHorizontal={false}
                labelHorizontal={true}
                buttonColor={'#0d87a1'} //default color on loading
                labelColor={'#f2f2f2'} // default label color on loading
                selectedButtonColor={'#0d87a1'} // onClick color on loading
                selectedLabelColor={'#f2f2f2'} // onClick label color on loading
                labelStyle={{fontSize: 18, color: '#f2f2f2'}}
                labelWrapStyle={{marginBottom: 100}}
                buttonStyle={{marginBottom: 100}}
                buttonWrapStyle={{marginBottom: 100}}
                animation={true}
                onPress={(value) => {this.onSelect(value, this.state.currentQuesNum)}}
              />

              <TouchableHighlight
                style={styles.button}
                onPress={this.getNextQuestion}
                underlayColor="#f0f4f7">
                  {this.state.currentQuesNum == totalQuestions ? <Text style={styles.buttonText}>Finish</Text> : 
                    <Text style={styles.buttonText}>Next</Text>
                  }
              </TouchableHighlight>

            </View>
          )}

          {this.state.completed==true && (
            <View style={styles.innerContainer}>
              <TouchableHighlight
                style={styles.finishButton}
                onPress={this.getResultsScreen}
                underlayColor="#f0f4f7">
                  <Text style={styles.buttonText}>Finish Test</Text>  
              </TouchableHighlight>
            </View>

            )


          }
          
        </View>
      </BackgroundView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: "100%",
    margin: 15,
  },
  innerContainer: {
    display: "flex",
    
    margin: 5,
  },
  loadingQuestions: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    alignSelf: 'center',
  },
  button: {
    marginRight:150,
    marginLeft:150,
    marginTop:60,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#262626',
    borderColor: '#0d87a1',
    borderRadius:30,
    borderWidth: 1,
  },
  finishButton:{
    marginRight:120,
    marginLeft:120,
    marginTop:375,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#262626',
    borderColor: '#0d87a1',
    borderRadius:30,
    borderWidth: 3,
  },
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