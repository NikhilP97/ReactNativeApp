import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ActivityIndicator,
  TouchableOpacity,
  NetInfo,
  Alert
} from "react-native";
import QuizQuestionScreen from "./QuizQuestionScreen";
import Icon from 'react-native-ionicons';
import {Actions, ActionConst} from 'react-native-router-flux';
import BackgroundView from './BackgroundView'

export default class QuizStartScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isConnected: true
    };

    NetInfo.isConnected.fetch().then(isConnected => {
        this.setState({isConnected});
    });

    console.log("isConnected constructor:", this.state.isConnected);

    this._onPress = this._onPress.bind(this);

  }

    

  static navigationOptions = {
    // title: 'Home screen',
    headerTintColor: 'white',
    headerTitleStyle: { color: 'white' }
  };

  componentDidMount() {
    NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
  }

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);
  }

  handleConnectivityChange = isConnected => {
    this.setState({isConnected});
  };

  _onPress() {
    // console.log("in on press");
    console.log("in on press Quiz Start screen");
    console.log("isConnected: ", this.state.isConnected);
    if(!this.state.isConnected){
      console.log("No internet connection!");
      Alert.alert(
        'No Internet Connection',
        'Kindly check your Internet Connection',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed Login')},
        ],
        {cancelable: false},
      );
      return;
    } else {
      Actions.quizQuestionScreen();
    }
    
  }

  render() {
    return (
      <BackgroundView>
      <View style={styles.container}>
        
        
        <Text style={styles.paragraph}>
          This test contains five sections with each section having equal weightage
        </Text>

        <Text style={styles.sectionsText}>
          Section 1: Quants
        </Text>

        <Text style={styles.sectionsText}>
          Section 2: LR & DI
        </Text>

        <Text style={styles.sectionsText}>
          Section 3: Verbal
        </Text>

        <Text style={styles.sectionsText}>
          Section 4: Tech
        </Text>

        <Text style={styles.sectionsText}>
          Section 5: Core
        </Text>

        <Text style={styles.instructionsTest}>
          The test comprises of Total 25 Questions
        </Text>
        <Text style={styles.instructionsTest}>
          For each correct answer you will get +4 marks
        </Text>
        <Text style={styles.negativeMarking}>
          There is NO NEGATIVE MARKING
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
    marginTop: 80,
    backgroundColor: "#427AA1",
    padding: 10,
    borderRadius: 10
    
  },

  paragraph: {
    marginTop: 20,
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    color: "#066A7F",
    textAlign: "center",
    padding: 10,
    lineHeight: 25
  },
  sectionsText: {
    marginTop: 2,
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    color: "#066A7F",
    textAlign: "center",
    padding: 10,
    lineHeight: 25
  },
  instructionsTest: {
    marginTop: 5,
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    color: "#427AA1",
    textAlign: "center",
    padding: 10,
    lineHeight: 25
  },
  negativeMarking: {
    marginTop: 5,
    fontSize: 16,
    color: "#BF211E",
    textAlign: "center",
    padding: 10,
    lineHeight: 25
  }
});
