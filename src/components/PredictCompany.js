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
  Platform,
  Image
  
} from "react-native";

import BackgroundView from './BackgroundView'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
// import CountdownCircle from 'react-native-countdown-circle'
import * as Progress from 'react-native-progress';
import Pie from 'react-native-pie';
import { SectionGrid } from 'react-native-super-grid';
import {Actions, ActionConst} from 'react-native-router-flux';

export default class PredictCompany extends React.Component {
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
      linearProgVar: 0,
      lastIndexProgress: 0,

      results: {
        score: 9,
        section1: 10,
        section2: 15,
        section3: 20,
        section4: 20,


        
        correctAnswers: 0
      },
      completed: true
    };



  }



  render() {
      const items = [
      { name: 'Deloitte', code: '#0d87a1' },
      { name: 'Infosys', code: '#0d87a1' },
      { name: 'Capgemini', code: '#0d87a1' },
      { name: 'Cognizant', code: '#0d87a1' },
      { name: 'IVP', code: '#0d87a1' },
      { name: 'Quantiphi', code: '#0d87a1' },
      { name: 'Infosys', code: '#0d87a1' },
      { name: 'Infosys HOLE', code: '#0d87a1' },
      { name: 'Infosys', code: '#0d87a1' },
      { name: 'Infosys BLUE', code: '#0d87a1' },
      { name: 'Infosys', code: '#0d87a1' },
      { name: 'Infosys', code: '#0d87a1' },
      { name: 'Infosys', code: '#0d87a1' },
      { name: 'Infosys', code: '#0d87a1' },
      { name: 'Infosys', code: '#0d87a1' },
      { name: 'Infosys', code: '#0d87a1' },
      { name: 'Infosys', code: '#0d87a1' },
      { name: 'Infosys', code: '#0d87a1' },
      { name: 'Infosys', code: '#0d87a1' },
      { name: 'Infosys', code: '#0d87a1' },
    ];

    return (
      
           <BackgroundView>

      <SectionGrid

        itemDimension={110}
        // staticDimension={300}
        // fixed
        // spacing={20}
        sections={[
          {
            title: 'Current Performance',
            data: items.slice(0, 6),
          },
          {
            title: 'Next threshold',
            data: items.slice(6, 12),
          },
          {
            title: 'Ambitious',
            data: items.slice(12, 20),
          },
        ]}


        style={styles.gridView}
        renderItem={({ item, section, index }) => (
          <View style={[styles.itemContainer, { backgroundColor: item.code }]}>

          <TouchableHighlight onPress={() => alert('Do something!')}>
            <Text style={styles.itemName}>{item.name}</Text>
            </TouchableHighlight>
            
          </View>
        )}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
      />

      
 

      

    

      
    </BackgroundView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: "100%",
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

buttonContainer: {
        flex: 1,
        margin: 35,
        marginTop: -80
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

    
    
  },
  logo: {
    backgroundColor: '#056ecf',
    height: 128,
    width: 128,
  },
  gridView: {
    marginTop: 20,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 17,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
  sectionHeader: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
    alignItems: 'center',
    backgroundColor: '#636e72',
    color: 'white',
    padding: 10,
  },

  
  
});