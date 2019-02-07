import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ActivityIndicator,
  TouchableOpacity
} from "react-native";
import QuizQuestionScreen from "./QuizQuestionScreen";
import Icon from 'react-native-ionicons';
import {Actions, ActionConst} from 'react-native-router-flux';

export default class QuizStartScreen extends React.Component {

  _onPress() {
    console.log("in on press");
    Actions.quizQuestionScreen();
  }



  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require("../assets/logo.png")}
          style={{ width: 200, height: 85 }}
        />
        <Text style={styles.welcome}>YOUR ALL FAVORITE QUIZ APP</Text>
        <Text style={styles.paragraph}>
          eQuiz fetches 10 questions from an open API and asks you question one
          by one. You've to answer all the qeustions to understand your IQ
          level.
        </Text>
        <TouchableOpacity style={styles.button} onPress={this._onPress} underlayColor="#f0f4f7">
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Icon name="md-play" size={32} color="white" />
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                marginLeft: 10,
                marginTop: 5
              }}
            >
              Start QuizQuestionScreen
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },

  welcome: {
    fontSize: 22,
    fontWeight: "bold",
    backgroundColor: "#3498db",
    color: "white",
    padding: 10
  },

  button: {
    backgroundColor: "#3498db",
    padding: 10,
    borderRadius: 10
  },

  paragraph: {
    fontSize: 16,
    color: "#777",
    textAlign: "center",
    padding: 10,
    marginTop: 15,
    lineHeight: 25
  }
});
