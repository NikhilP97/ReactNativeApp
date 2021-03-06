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
  Dimensions,
  ScrollView,
  ToastAndroid,
} from "react-native";

import BackgroundView from './BackgroundView'
// import { RadioGroup, RadioButton } from "react-native-flexi-radio-button";
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import CountdownCircle from 'react-native-countdown-circle'
import * as Progress from 'react-native-progress';
import Pie from 'react-native-pie';
import {Actions, ActionConst} from 'react-native-router-flux';

var totalQuestions = 24; //24
var questionsCompleted = false;
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
      countDownTime: 60,
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

  static navigationOptions = {
    // title: 'Home screen',
    headerTintColor: 'white',
    headerTitleStyle: { color: 'white' }
  };

  // https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple
  fetchQuestions = async () => {
    var concatenateArray = [[]];
    console.disableYellowBox = true;
    await this.setState({ loading: true });
    // using mLab
    // all questions 
    const response = await fetch(
      `https://wt-0cd1e9e1874510cd90a9ec9f1e085110-0.sandbox.auth0-extend.com/express-with-mongo-db/5c5c77a6e7179a2ed61138aa`
    )
    .catch((error) => {
      Alert.alert(
        'Network Error',
        'Please try again',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed Quiz')},
        ],
        {cancelable: false},
      );
      console.log("Caught error",error);
      Actions.pop();
      return;
    });
    // console.log("response", response);
    const getQuestions = await response.json();
    // console.log("getQuestions 0 ", getQuestions.results);
    const  setQuestionArray  = getQuestions.results;
    // console.log("results", results);
    setQuestionArray.forEach(item => {
      item.id = Math.floor(Math.random() * 10000);
    });
    console.log(" Questions Array before random : ",setQuestionArray);
    var randomizeQuestionsAll = [];
    randomizeQuestionsAll = this.randomize(setQuestionArray);


    // First section
    const response1 = await fetch(
      `https://wt-0cd1e9e1874510cd90a9ec9f1e085110-0.sandbox.auth0-extend.com/express-with-mongo-db/5c7a4180e7179a3e36e0175e`
    );
    // console.log("response", response);
    const getQuestions1 = await response1.json();
    // console.log("getQuestions 0 ", getQuestions.results);
    const  setQuestionArray1  = getQuestions1.results;
    // console.log("results", results);
    setQuestionArray1.forEach(item => {
      item.id = Math.floor(Math.random() * 10000);
    });
    console.log(" Questions Array before random 1 : ",setQuestionArray1);
    var randomizeQuestions1 = [];
    var Array1 = [];
    randomizeQuestions1 = this.randomize(setQuestionArray1);
    for (var i = 0; i < 5; i++) {
      Array1[i] = randomizeQuestions1[i];
    }
    console.log("Array1: ", Array1);


    // second section
    const response2 = await fetch(
      `https://wt-0cd1e9e1874510cd90a9ec9f1e085110-0.sandbox.auth0-extend.com/express-with-mongo-db/5c7a44b2e7179a3e36e017cb`
    );
    // console.log("response", response);
    const getQuestions2 = await response2.json();
    // console.log("getQuestions 0 ", getQuestions.results);
    const  setQuestionArray2  = getQuestions2.results;
    // console.log("results", results);
    setQuestionArray2.forEach(item => {
      item.id = Math.floor(Math.random() * 10000);
    });
    console.log(" Questions Array before random 2 : ",setQuestionArray2);
    var randomizeQuestions2 = [];
    Array2 = [];
    randomizeQuestions2 = this.randomize(setQuestionArray2);
    for (var i = 0; i < 5; i++) {
      Array2[i] = randomizeQuestions2[i];
    }
    console.log("Array2 : ", Array2);

    //third section
    const response3 = await fetch(
      `https://wt-0cd1e9e1874510cd90a9ec9f1e085110-0.sandbox.auth0-extend.com/express-with-mongo-db/5c7a4d82e7179a3e36e01a05`
    );
    // console.log("response", response);
    const getQuestions3 = await response3.json();
    // console.log("getQuestions 0 ", getQuestions.results);
    const  setQuestionArray3  = getQuestions3.results;
    // console.log("results", results);
    setQuestionArray3.forEach(item => {
      item.id = Math.floor(Math.random() * 10000);
    });
    console.log(" Questions Array before random 2 : ",setQuestionArray3);
    var randomizeQuestions3 = [];
    Array3 = [];
    randomizeQuestions3 = this.randomize(setQuestionArray3);
    for (var i = 0; i < 5; i++) {
      Array3[i] = randomizeQuestions3[i];
    }
    console.log("Array3 : ", Array3);

    //fourth section
    const response4 = await fetch(
      `https://wt-0cd1e9e1874510cd90a9ec9f1e085110-0.sandbox.auth0-extend.com/express-with-mongo-db/5c7a4e30e7179a3e36e01a31`
    );
    // console.log("response", response);
    const getQuestions4 = await response4.json();
    // console.log("getQuestions 0 ", getQuestions.results);
    const  setQuestionArray4  = getQuestions4.results;
    // console.log("results", results);
    setQuestionArray4.forEach(item => {
      item.id = Math.floor(Math.random() * 10000);
    });
    console.log(" Questions Array before random 4 : ",setQuestionArray4);
    var randomizeQuestions4 = [];
    Array4 = [];
    randomizeQuestions4 = this.randomize(setQuestionArray4);
    for (var i = 0; i < 5; i++) {
      Array4[i] = randomizeQuestions4[i];
    }
    console.log("Array4 : ", Array4);

    //fifth section
    const response5 = await fetch(
      `https://wt-0cd1e9e1874510cd90a9ec9f1e085110-0.sandbox.auth0-extend.com/express-with-mongo-db/5c7a4f21e7179a3e36e01a57`
    );
    // console.log("response", response);
    const getQuestions5 = await response5.json();
    // console.log("getQuestions 0 ", getQuestions.results);
    const  setQuestionArray5  = getQuestions5.results;
    // console.log("results", results);
    setQuestionArray5.forEach(item => {
      item.id = Math.floor(Math.random() * 10000);
    });
    console.log(" Questions Array before random 5 : ",setQuestionArray5);
    var randomizeQuestions5 = [];
    Array5 = [];
    randomizeQuestions5 = this.randomize(setQuestionArray5);
    for (var i = 0; i < 6; i++) {
      Array5[i] = randomizeQuestions5[i];
    }
    console.log("Array5 : ", Array5);

    var finalArray = Array1.concat(Array2, Array3, Array4, Array5);

    console.log("final array: ", finalArray);

    await this.setState({ questionsArray: finalArray, loading: false});

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
        countDownTime: 60,
        questionProgess: 0,
      },
      () => {
        this.fetchQuestions();
      }
    );
    questionsCompleted = false;
  };



  componentDidMount() {
    questionsCompleted = false;
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
    // Update score before fetching next value
    console.log("question no in results Screen: ", this.state.currentQuesNum);
    console.log("current score in results Screen : ", this.state.results.score);
    questionsCompleted = true;
    const question = this.state.questionsArray[this.state.currentQuesNum];
    //const section = this.state.currentQuesNum;
    const isCorrect = question.correct_answer === this.state.getSelectedValue;
    // console.log("isCorrect", isCorrect);
    
    const results = { ...this.state.results };
    results.score = isCorrect ? results.score + 4 : results.score;
    results.correctAnswers = isCorrect
      ? results.correctAnswers + 1
      : results.correctAnswers;


    var multipleOfFive = 5//this.state.currentQuesNum+1;
    this.setState({results}, function () {
      
      console.log("multipleOfFive : ", multipleOfFive);
      if(multipleOfFive % 5 == 0){
        var index = multipleOfFive/5;
        // console.log("current section: ", index)
        //
        var getSectionScore = this.state.results.score - this.state.lastSectionScore;
        this.setState({
          sectionScore: [...this.state.sectionScore, getSectionScore]
        }, function () {
          var array = [...this.state.sectionScore];
          console.log("array: ", array)
          array.splice(0, 1);
          console.log("array splice: ", array)
          this.setState({sectionScore: array}, function() {
            var sendData = {
            finalScore: this.state.results.score, // here finalScore can be used in other file using props
            correctAns: this.state.results.correctAnswers,
            secScore:   this.state.sectionScore //[4,4,4,4,4] //
            
          }
          console.log("sendData: ", sendData);
          Actions.resultsScreen(sendData);
    })
        });
        this.setState({
          lastSectionScore: this.state.results.score
        });

      }
      
    });
    // console.log("updated results:", results);
    
    
    
  }


  getNextQuestion = (timeNotElapsed) => {
    console.log("in get Next Questions");
    console.log("question no : ", this.state.currentQuesNum);
    console.log("current score: ", this.state.results.score);
    console.log("selected value: ", this.state.getSelectedValue)

    if(this.state.currentQuesNum === totalQuestions){
      questionsCompleted = true;
      console.log("questionsCompleted!!!!!!!");
      this.getResultsScreen();
    } 
    
    // Check if radio button is clicked else send alert
    if (!this.state.getSelectedValue){
      if(timeNotElapsed){
        Alert.alert(
        'Button Not Selected',
        'Kindly choose an option to continue',
        [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
        { cancelable: false }
      );
      return;
      }  
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


    var multipleOfFive = this.state.currentQuesNum+1;
    this.setState({results}, function () {
      
      console.log("multipleOfFive : ", multipleOfFive);
      if(multipleOfFive % 5 == 0){
        var index = multipleOfFive/5;
        // console.log("current section: ", index)
        var getSectionScore = this.state.results.score - this.state.lastSectionScore;
        this.setState({
          sectionScore: [...this.state.sectionScore, getSectionScore]
        }, function () {
          
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
    
  }

  Nested_If_Else=()=>{
    if( this.state.currentQuesNum == 4  ){
      ToastAndroid.show('Section 2: LR & DI', ToastAndroid.LONG);           
    }
    else if(this.state.currentQuesNum == 9  ){
      ToastAndroid.show('Section 3: Verbal', ToastAndroid.LONG);
    }
    else if(this.state.currentQuesNum == 14  ){
      ToastAndroid.show('Section 4: Tech', ToastAndroid.LONG);
    }
    else if(this.state.currentQuesNum == 19  ){
      ToastAndroid.show('Section 5: Core', ToastAndroid.LONG);
    }  
  }
 

  render() {
    console.log("section Score: ", this.state.sectionScore);
    return (
      <BackgroundView>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.container}>

          {!!this.state.loading && ( 
            <View style={styles.loadingQuestions}>
              <ActivityIndicator size="large" color="#427AA1" />
              
            </View>
          )}

          {!!this.state.questionsArray.length > 0 &&
            questionsCompleted === false && (
            <View style={styles.innerContainer}>

              <View style={{margin: 5, flexDirection:'row', justifyContent: 'space-between'}}>
                <CountdownCircle
                  ref = {ref => this.countdown = ref}
                  seconds={this.state.countDownTime}
                  radius={30}
                  borderWidth={4}
                  color="#066A7F"
                  textStyle={{color:"#427AA1", fontSize: 20 }}
                  onTimeElapsed={() => {console.log('Elapsed!');
                                        this.getNextQuestion(false)}}
                />

                <Text style={{ fontSize: 25, color: "#066A7F",textAlign: "right", marginTop: 12}}>
                Question {this.state.currentQuesNum + 1} /  25
                </Text>

              </View>
              
              
              <View style={{marginTop: 10, justifyContent: 'center',alignItems: 'center'}}>
                <Progress.Bar
                color={'#066A7F'}
                progress={this.state.questionProgess}
                width={Dimensions.get('window').width - 20}
                height={5}
                />
              </View>
              
              <Text style={{marginTop: 20, marginLeft: 5, marginRight: 5, fontFamily: 'Raleway-MediumItalic', fontSize: 22, color: "#000", marginBottom: 20 }}>
                Q. {this.state.questionsArray[this.state.currentQuesNum].question}
              </Text>

              <RadioForm
                ref = {ref => this.radioFormClear = ref}
                radio_props={this.state.radio_props}
                initial={-1}
                formHorizontal={false}
                labelHorizontal={true}
                buttonColor={'#066A7F'} //default color on loading
                labelColor={'#000'} // default label color on loading
                selectedButtonColor={'#427AA1'} // onClick color on loading
                selectedLabelColor={'#000'} // onClick label color on loading
                labelStyle={{fontSize: 18, color: '#000'}}
                labelWrapStyle={{marginBottom: 100}}
                buttonStyle={{marginBottom: 100}}
                buttonWrapStyle={{marginBottom: 100}}
                animation={true}
                onPress={(value) => {this.onSelect(value, this.state.currentQuesNum)}}
              />

              <TouchableHighlight
                style={styles.button}
                onPress={this.state.currentQuesNum == totalQuestions ? this.getResultsScreen : () => this.getNextQuestion(true)}
                underlayColor="#f0f4ff"
              >
                  {this.state.currentQuesNum == totalQuestions ? <Text style={styles.buttonText}>Finish</Text> : 
                    <Text style={styles.buttonText}>Next</Text>
                  }
              </TouchableHighlight>

            </View>
          )}

          

          


        </View>
        </ScrollView>
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
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: '#066A7F',
    alignSelf: 'center',
  },
  button: {
    marginRight:130,
    marginLeft:130,
    marginTop:60,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor: "#f6f5f3",
    borderColor: '#427AA1',
    borderRadius:30,
    borderWidth: 2,
  },
  finishButton:{
    marginRight:120,
    marginLeft:120,
    marginTop:375,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor: "#f6f5f3",
    borderColor: '#427AA1',
    borderRadius:30,
    borderWidth: 3,
  },
});


// Comments Do not delete this under any cirCUMstnace

//<Text style={{color:'#066A7F'}}>Please wait while we are loading questions for you</Text>
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