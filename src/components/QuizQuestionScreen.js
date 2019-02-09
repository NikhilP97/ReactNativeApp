import React from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  Button
} from "react-native";
import QuestionData from "./QuestionData";
import BackgroundView from './BackgroundView'
import { RadioGroup, RadioButton } from "react-native-flexi-radio-button";

export default class QuizQuestionScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      questionsArray: [],

      currentQuesNum: 0,
      correctScore: 5,
      totalScore: 50,

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
        completed: false
      },
      () => {
        this.fetchQuestions();
      }
    );
  };

  submitAnswer = (index, answer) => {
    const question = this.state.questionsArray[index];
    const isCorrect = question.correct_answer === answer;
    const results = { ...this.state.results };

    results.score = isCorrect ? results.score + 5 : results.score;
    results.correctAnswers = isCorrect
      ? results.correctAnswers + 1
      : results.correctAnswers;

    this.setState({
      currentQuesNum: index + 1,
      results,
      completed: index === 9 ? true : false
    });
  };

  componentDidMount() {

    this.fetchQuestions();
  }


  onSelect = (index, value, quesNum) => {
    console.log("in on select");
    console.log("state:",this.state);
    this.setState({
      text: `Selected index: ${index} , value: ${value}`
    })
    const question = this.state.questionsArray[quesNum];
    console.log("questionONSelect:", question);
    const isCorrect = question.correct_answer === value;
    const results = { ...this.state.results };

    console.log("isCorrect", isCorrect);
    console.log("INON results:", results)

    results.score = isCorrect ? results.score + 5 : results.score;
    results.correctAnswers = isCorrect
      ? results.correctAnswers + 1
      : results.correctAnswers;

    this.setState({results});

  }

  getNextQuestion = () => {
    var index = this.state.currentQuesNum;
    this.setState({
      currentQuesNum: index + 1,
      completed: index === 9 ? true : false
    });
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
              
              <Text style={{ fontSize: 16, color: "#666", textAlign: "right" }}>
                {this.state.currentQuesNum + 1} out of 10
              </Text>

              <Text style={{ fontSize: 32, fontWeight: "bold", color: "#0d87a1" }}>
                {this.state.questionsArray[this.state.currentQuesNum].question}
              </Text>



              <RadioGroup
                onSelect = {(index, value) => this.onSelect(index, value, this.state.currentQuesNum)}
              >
                <RadioButton value={this.state.questionsArray[this.state.currentQuesNum].correct_answer} >
                  <Text>{this.state.questionsArray[this.state.currentQuesNum].correct_answer}</Text>
                </RadioButton>
         
                <RadioButton value={this.state.questionsArray[this.state.currentQuesNum].incorrect_answers[0]}>
                  <Text>{this.state.questionsArray[this.state.currentQuesNum].incorrect_answers[0]}</Text>
                </RadioButton>
         
                <RadioButton value={this.state.questionsArray[this.state.currentQuesNum].incorrect_answers[1]}>
                  <Text>{this.state.questionsArray[this.state.currentQuesNum].incorrect_answers[1]}</Text>
                </RadioButton>

                <RadioButton value={this.state.questionsArray[this.state.currentQuesNum].incorrect_answers[2]}>
                  <Text>{this.state.questionsArray[this.state.currentQuesNum].incorrect_answers[2]}</Text>
                </RadioButton>

              </RadioGroup>

              <Button
                title="Submit Answser"
                onPress={this.getNextQuestion}
              />
              
              <Text style={styles.text}>{this.state.text}</Text>
      
            </View>
          )}

        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          {this.state.completed === true && (
            <View style={{ alignItems: "center" }}>
              <Text style={{ fontSize: 25 }}>Quiz Completed</Text>
              <Text>Correct Answers: {this.state.results.correctAnswers}</Text>
              <Text>
                Incorrect Answers: {10 - this.state.results.correctAnswers}
              </Text>
              <Text>Total Score: {50}</Text>
              <Text>Obtained Score: {this.state.results.score}</Text>

              <Button title="Restart Quiz" onPress={this.reset} />
            </View>
          )}
        </View>
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
  }
});
