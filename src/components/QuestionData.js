import React from "react";
import { View, Text, StyleSheet, Button, TouchableHighlight } from "react-native";
import { RadioGroup, RadioButton } from "react-native-flexi-radio-button";
//import BackgroundView from './BackgroundView'


export default class QuestionData extends React.Component {
  constructor() {
    super();

    this.state = {
      answer: null
    };
  }

  renderOptions = question => {
    if (question.type === "boolean") {
      return [
        <RadioButton value={"True"} key={1}>
          <Text style={styles.radioText}>True</Text>
        </RadioButton>,

        <RadioButton value={"False"} key={2}>
          <Text style={styles.radioText}>False</Text>
        </RadioButton>
      ];
    } else {
      const result = [];

      question.incorrect_answers.forEach((item, index) => {
        let key = `${question.id}-${index}`;

        if (index === this.props.correctPosition) {
          let key2 = `${question.id}-100`;
          result.push(
            <RadioButton value={question.correct_answer} key={key2}>
              <Text style={styles.radioText}>{question.correct_answer}</Text>
            </RadioButton>
          );
        }

        result.push(
          <RadioButton value={item} key={key}>
            <Text style={styles.radioText}>{item}</Text>
          </RadioButton>
        );
      });

      return result;
    }
  };

  render() {
    return (
      
      <View style={{ flex: 1, padding: 12 }}>
        <Text style={{ fontSize: 16, color: "#d4d4dc", textAlign: "right" }}>
          {this.props.current + 1} out of 25
        </Text>

        <Text style={{ fontSize: 27, fontWeight: "bold", color: "#0d87a1" }}>
          {this.props.question.question}
        </Text>
        <RadioGroup
          onSelect={(index, answer) => this.setState({ answer })}
          selectedIndex={null}
        >
          {this.renderOptions(this.props.question)}
        </RadioGroup>

       
          

          <TouchableHighlight
          style={styles.button}
          onPress={() => {
            this.props.onSelect(this.state.answer);
          }}
          underlayColor="#f0f4f7">
          <Text style={styles.buttonText}>Submit Answer</Text>
        </TouchableHighlight>



          
          
        
        


      </View>
     

    );
  }
}

const styles = StyleSheet.create({
  radioText: {
    fontSize: 20,
    
    color: '#0d87a1'
  },

  buttonText: {
    fontSize: 18,
    color: '#0d87a1',
    alignSelf: 'center',
  },
  button: {
    marginRight:40,
    marginLeft:40,
    marginTop:20,
    paddingTop:15,
    paddingBottom:15,
    backgroundColor:'#262626',
    borderColor: '#0d87a1',
    borderRadius:30,
    borderWidth: 1,

    
    
  }

  

  

    
    
  });
