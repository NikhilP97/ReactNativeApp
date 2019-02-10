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
import BackgroundView from './BackgroundView'

export default class QuizStartScreen extends React.Component {

  _onPress() {
    console.log("in on press");
    Actions.quizQuestionScreen();
  }



  render() {
    return (
      <BackgroundView>
      <View style={styles.container}>
        
        
        <Text style={styles.paragraph}>
        
          This test contains five sections with each section having equal weightage
        </Text>
        <TouchableOpacity style={styles.button} onPress={this._onPress} underlayColor="#f0f4f7">
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Icon name="md-play" size={32} color="white" />
            <Text
              style={{
                color: "white",
                
                marginLeft: 10,
                marginTop: 5
              }}
            >
              Start Test
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      </BackgroundView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    
  },

  
  button: {
    marginTop: 220,
    backgroundColor: "#0d87a1",
    padding: 10,
    borderRadius: 10
    
  },

  paragraph: {
    marginTop: 40,
    fontSize: 16,
    color: "#32CD32",
    textAlign: "center",
    padding: 10,
    lineHeight: 25
  }
});

