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
    //this.results = 15;

	console.log("Final Score: ", this.theFinalScore);


  }



  render() {
      const items = [
      







      


      { name: 'Infosys', code: '#128c7e' },
      { name: 'Cognizant', code: '#ed2939' },
      { name: 'Fractal', code: '#0d87a1' },
      { name: 'Capgemini', code: '#0d87a1' },
      { name: 'Citius Tech', code: '#0d87a1' },
      { name: 'Quantiphi', code: '#0d87a1' },
      { name: 'Deloitte', code: '#ed2939' },
      { name: 'IVP', code: '#ff6600' },
      { name: 'KPMG', code: '#0d87a1' },
      { name: 'Amdocs', code: '#0d87a1' }, 
      { name: 'ISS', code: '#d4af37' },
      { name: 'ZS Associates', code: '#ed2939' },
      { name: 'Carwale', code: '#0d87a1' },
      { name: 'Interactive Brokers', code: '#0d87a1' },
      { name: 'OM Partners', code: '#0d87a1' },
      { name: 'GEP ', code: '#ff69b4' },
      { name: 'Amadeus', code: '#7dce94' },
      { name: 'Siemens', code: '#0d87a1' },
      { name: 'LTTS', code: '#0d87a1' },
      { name: 'Barclays', code: '#ed2939' },
      { name: 'Carwale', code: '#0d87a1' },
      { name: 'Nomura', code: '#0d87a1' },
      { name: 'GEP ', code: '#ff69b4' },
      { name: 'Amadeus', code: '#7dce94' },
      { name: 'HDFC', code: '#0d87a1' },
      { name: 'Amazon', code: '#0d87a1' },
      { name: 'PhonePe', code: '#0d87a1' },
      { name: 'Credit Suisse', code: '#0d87a1' },
      { name: 'JP Morgan Chase', code: '#0d87a1' },
      { name: 'Accolite', code: '#7c0a02' },
      { name: 'Deutsche Bank', code: '#269ccc' },
      { name: 'Morgan Stanley', code: '#9955bb' },
      { name: 'Microsoft', code: '#9955bb' },
      
    ];

    return (
      
           <BackgroundView>

            {this.theFinalScore  < 25  &&  (
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
                    <TouchableHighlight onPress={this._onPress_Infosys}>

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
                    <TouchableHighlight onPress={this._onPress_Infosys}>

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
                    <TouchableHighlight onPress={() => alert('Past Experiences')}>

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
                    <TouchableHighlight onPress={() => alert('Past Experiences')}>

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
                    <TouchableHighlight onPress={() => alert('Past Experiences')}>

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
    fontSize: 22,
    color: '#fff',
    fontWeight: '600',
    alignItems: "center",
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