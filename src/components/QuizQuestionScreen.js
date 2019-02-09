import React from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  Picker,
  Button,
  TouchableHighlight
} from "react-native";
import { Link } from "react-router-native";
import QuestionData from "./QuestionData";
import axios from "axios";
import BackgroundView from './BackgroundView'

export default class QuizQuestionScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      questions: [],
      mLabQuestions: [],

      current: 0,
      correctScore: 4,
      totalScore: 100,

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
    console.log("response", response);
    const questions = await response.json();
    console.log("questions", questions);
    console.log("questions 0 ", questions.results);
    const  results  = questions.results;
    console.log("results", results);

    results.forEach(item => {
      item.id = Math.floor(Math.random() * 10000);
    });

    console.log("results: ",results);

    await this.setState({ questions: results, loading: false});

    console.log("mLabQuestions again",this.state.mLabQuestions);

  };

  reset = () => {
    this.setState(
      {
        questions: [],
        mLabQuestions: [],
        current: 0,
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
    const question = this.state.questions[index];
    const isCorrect = question.correct_answer === answer;
    const results = { ...this.state.results };

    results.score = isCorrect ? results.score + 4 : results.score;
    results.correctAnswers = isCorrect
      ? results.correctAnswers + 1
      : results.correctAnswers;

    this.setState({
      current: index + 1,
      results,
      completed: index === 24 ? true : false

    });
    console.log("INDEX IS ",index);
  };

  componentDidMount() {

    this.fetchQuestions();
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

        {!!this.state.questions.length > 0 &&
          this.state.completed === false && (
            <QuestionData
              onSelect={answer => {
                this.submitAnswer(this.state.current, answer);
              }}
              question={this.state.questions[this.state.current]}
              correctPosition={Math.floor(Math.random() * 3)}
              current={this.state.current}
            />
          )}

        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          {this.state.completed === true && (
            <View style={{ alignItems: "center" }}>
              <Text style={{ fontSize: 25,color: '#0d87a1' }}>Quiz Completed</Text>
              <Text>Correct Answers: {this.state.results.correctAnswers}</Text>
              <Text>
                Incorrect Answers: {20 - this.state.results.correctAnswers}
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
    justifyContent: "center",

  },

  buttonText: {
    fontSize: 18,
    marginRight:40,
    marginLeft:40,
    color: '#0d87a1',
    alignSelf: 'center',
  },
  button: {
    marginRight:40,
    marginLeft:40,
    marginTop:60,
    paddingTop:15,
    paddingBottom:15,
    backgroundColor:'#262626',
    borderColor: '#0d87a1',
    borderRadius:30,
    borderWidth: 1,

    
    
  }


});
