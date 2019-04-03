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

    _onPress_Infosys(companyName) {
      console.log("companyName to be passed: ", companyName);
      Actions.infosys(companyName);
    }


    constructor(props) {
    super(props);
    console.log("props: ", props);
    this.theFinalScore = props.data;
    this.theCorrectAnswers = props.correctAns;
    this.secScoreArray = props.secScore;
    this.results = 15;

	console.log("Final Score: ", this.theFinalScore);


  }



  render() {
      const items = [

      


      { name: 'Infosys', code: '#128c7e' },
      { name: 'Cognizant', code: '#9068be' },
      { name: 'Fractal', code: '#0d87a1' },
      { name: 'Capgemini', code: '#1d2120' },
      { name: 'Citius Tech', code: '#9068be' },
      { name: 'Quantiphi', code: '#e6b0aa' },
      { name: 'Deloitte', code: '#ed2939' },
      { name: 'IVP', code: '#ff6600' },
      { name: 'KPMG', code: '#935116' },
      { name: 'Amdocs', code: '#922b21' }, 
      { name: 'ISS', code: '#d4af37' },
      { name: 'ZS Associates', code: '#9b59b6' },
      { name: 'Carwale', code: '#edbb99' },
      { name: 'Interactive Brokers', code: '#d6eaf8' },
      { name: 'OM Partners', code: '#9a7d0a' },
      { name: 'GEP', code: '#ff69b4' },
      { name: 'Amadeus', code: '#7dce94' },
      { name: 'Siemens', code: '#5adc1e' },
      { name: 'LTTS', code: '#cadc1e' },
      { name: 'Barclays', code: '#8edc1e' },
      { name: 'Carwale', code: '#1ed9dc' },
      { name: 'Nomura', code: '#801edc' },
      { name: 'GEP', code: '#dc1eb0' },
      { name: 'Amadeus', code: '#dc1e77' },
      { name: 'HDFC', code: '#797d7f' },
      { name: 'Amazon', code: '#6e2c00' },
      { name: 'PhonePe', code: '#7d6608' },
      { name: 'Credit Suisse', code: '#0d87a1' },
      { name: 'JP Morgan Chase', code: '#5d6d7e' },
      { name: 'Accolite', code: '#7c0a02' },
      { name: 'Deutsche Bank', code: '#269ccc' },
      { name: 'Morgan Stanley', code: '#1e27dc' },
      { name: 'Microsoft', code: '#9955bb' },
      
    ];

    return (
      
           <BackgroundView>

            {this.results  < 25  &&  (
                <SectionGrid

                  itemDimension={110}
                  // staticDimension={300}
                  // fixed
                  // spacing={20}
                  sections={[
                    {
                      title: 'Current Performance',
                      data: items.slice(0, 1),
                    },
                    {
                      title: 'Next threshold',
                      data: items.slice(3, 9),
                    },
                    {
                      title: 'Ambitious',
                      data: items.slice(15, 18),
                    },
                  ]}


                  style={styles.gridView}

                  renderItem={({ item, section, index }) => (
                    <TouchableHighlight onPress={() => this._onPress_Infosys(item.name)}>

                      <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
                        <Text style={styles.itemName}>{item.name}</Text>
                      </View>

                    </TouchableHighlight>
                  )}
                  renderSectionHeader={({ section }) => (
                    <Text style={styles.sectionHeader}>{section.title}</Text>
                  )}
                />
            )}

          {this.theFinalScore > 25 && this.theFinalScore < 40  &&  (
                <SectionGrid

                  itemDimension={110}
                  // staticDimension={300}
                  // fixed
                  // spacing={20}
                  sections={[
                    {
                      title: 'Current Performance',
                      data: items.slice(4, 5),
                    },
                    {
                      title: 'Next threshold',
                      data: items.slice(5, 11),
                    },
                    {
                      title: 'Ambitious',
                      data: items.slice(15, 17),
                    },
                  ]}


                  style={styles.gridView}
                  renderItem={({ item, section, index }) => (
                    <TouchableHighlight onPress={() => this._onPress_Infosys(item.name)}>

                      <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
                        <Text style={styles.itemName}>{item.name}</Text>
                      </View>
                      
                    </TouchableHighlight>
                  )}
                  renderSectionHeader={({ section }) => (
                    <Text style={styles.sectionHeader}>{section.title}</Text>
                  )}
                />

      
            )}                

      
          {this.theFinalScore > 39 && this.theFinalScore < 50  &&  (
                <SectionGrid

                  itemDimension={110}
                  // staticDimension={300}
                  // fixed
                  // spacing={20}
                  sections={[
                    {
                      title: 'Current Performance',
                      data: items.slice(5, 6),
                    },
                    {
                      title: 'Next threshold',
                      data: items.slice(19, 25),
                    },
                    {
                      title: 'Ambitious',
                      data: items.slice(25, 28),
                    },
                  ]}


                  style={styles.gridView}
                  renderItem={({ item, section, index }) => (
                    <TouchableHighlight onPress={() => this._onPress_Infosys(item.name)}>

                      <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
                        <Text style={styles.itemName}>{item.name}</Text>
                      </View>
                      
                    </TouchableHighlight>
                  )}
                  renderSectionHeader={({ section }) => (
                    <Text style={styles.sectionHeader}>{section.title}</Text>
                  )}
                />

      
            )}             

                  {this.theFinalScore > 50 && this.theFinalScore < 75  &&  (
                <SectionGrid

                  itemDimension={110}
                  // staticDimension={300}
                  // fixed
                  // spacing={20}
                  sections={[
                    {
                      title: 'Current Performance',
                      data: items.slice(19, 20),
                    },
                    {
                      title: 'Next threshold',
                      data: items.slice(25, 28),
                    },
                    {
                      title: 'Ambitious',
                      data: items.slice(28, 31),
                    },
                  ]}


                  style={styles.gridView}
                  renderItem={({ item, section, index }) => (
                    <TouchableHighlight onPress={() => this._onPress_Infosys(item.name)}>

                      <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
                        <Text style={styles.itemName}>{item.name}</Text>
                      </View>
                      
                    </TouchableHighlight>
                  )}
                  renderSectionHeader={({ section }) => (
                    <Text style={styles.sectionHeader}>{section.title}</Text>
                  )}
                />

      
            )}        

                  {this.theFinalScore > 75 && this.theFinalScore < 90  &&  (
                <SectionGrid

                  itemDimension={110}
                  // staticDimension={300}
                  // fixed
                  // spacing={20}
                  sections={[
                    {
                      title: 'Current Performance',
                      data: items.slice(27, 28),
                    },
                    {
                      title: 'Next threshold',
                      data: items.slice(28, 31),
                    },
                    {
                      title: 'Ambitious',
                      data: items.slice(31, 33),
                    },
                  ]}


                  style={styles.gridView}
                  renderItem={({ item, section, index }) => (
                    <TouchableHighlight onPress={() => this._onPress_Infosys(item.name)}>

                      <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
                        <Text style={styles.itemName}>{item.name}</Text>
                      </View>
                      
                    </TouchableHighlight>
                  )}
                  renderSectionHeader={({ section }) => (
                    <Text style={styles.sectionHeader}>{section.title}</Text>
                  )}
                />

      
            )}              

                  {this.theFinalScore > 90  &&  (
                <SectionGrid

                  itemDimension={110}
                  // staticDimension={300}
                  // fixed
                  // spacing={20}
                  sections={[
                    {
                      title: 'Current Performance',
                      data: items.slice(31, 33),
                    },
                    
                  ]}


                  style={styles.gridView}
                  renderItem={({ item, section, index }) => (
                    <TouchableHighlight onPress={() => this._onPress_Infosys(item.name)}>

                      <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
                        <Text style={styles.itemName}>{item.name}</Text>
                      </View>
                      
                    </TouchableHighlight>
                  )}
                  renderSectionHeader={({ section }) => (
                    <Text style={styles.sectionHeader}>{section.title}</Text>
                  )}
                />

      
            )}                
    

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
    color: '#066A7F',
    alignSelf: 'center',
  },
  button: {
    marginRight:120,
    marginLeft:120,
    marginTop:60,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#fff',
    borderColor: '#066A7F',
    borderRadius:30,
    borderWidth: 3,

    
    
  },
  logo: {
    backgroundColor: '#fff',
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
    fontSize: 22,
    color: '#000',
    fontWeight: '600',
    alignItems: "center",
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#000',
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