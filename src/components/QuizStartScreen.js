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
          source={require("../assets/sss.jpg")}
          style={{ width: 150, height: 150 }}
        />
        <Text style={styles.welcome}>Placement Predict</Text>
        <Text style={styles.paragraph}>
          This test contains four sections with each section having equal weightage
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
              Start Test
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
    backgroundColor: "#262626",
    alignItems: "center",
    justifyContent: "center"
  },

  welcome: {

    marginTop: 15,
    fontSize: 22,
    fontWeight: "bold",
    backgroundColor: "#262626",
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
    color: "#32CD32",
    textAlign: "center",
    padding: 10,
    marginTop: 15,
    lineHeight: 25
  }
});





        