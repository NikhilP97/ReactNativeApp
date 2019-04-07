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
      loading: true,
    };
    console.log("props: ", props);
    this.theFinalScore = props.data;
    this.theCorrectAnswers = props.correctAns;
    this.secScoreArray = props.secScore;
    this.results = 15;
    console.log("Final Score: ", this.theFinalScore);
  }

  static navigationOptions = {
    // title: 'Home screen',
    headerTintColor: 'white',
    headerTitleStyle: { color: 'white' }
  };

  _onPress_Infosys(companyName) {
    console.log("companyName to be passed: ", companyName);
    Actions.infosys(companyName);
  }

  ShowAlertWithDelay (){
 
    // setTimeout(function(){
    //   //Put All Your Code Here, Which You Want To Execute After Some Delay Time.
    //   this.setState({ loading: false });
    // }, 5000);

    setTimeout(()=>{this.setState({ loading: false })}, 5000);
  }

  componentDidMount() {
    this.ShowAlertWithDelay();
  }


  render() {
    const items = [

    { name: 'Infosys', code: '#427ABf' },
    { name: 'Cognizant', code: '#9068be' },
    { name: 'Fractal', code: '#0d87a1' },
    { name: 'Capgemini', code: '#427AA1' },
    { name: 'Citius Tech', code: '#427AA1' },
    { name: 'Quantiphi', code: '#427AA1' },
    { name: 'Deloitte', code: '#427AA1' },
    { name: 'IVP', code: '#427AA1' },
    { name: 'KPMG', code: '#427AA1' },
    { name: 'Amdocs', code: '#922b21' }, 
    { name: 'ISS', code: '#d4af37' },
    { name: 'ZS Associates', code: '#9b59b6' },
    { name: 'Carwale', code: '#edbb99' },
    { name: 'Interactive Brokers', code: '#d6eaf8' },
    { name: 'OM Partners', code: '#9a7d0a' },
    { name: 'GEP', code: '#066A7F' },
    { name: 'Amadeus', code: '#066A7F' },
    { name: 'Siemens', code: '#066A7F' },
    { name: 'LTTS', code: '#cadc1e' },
    { name: 'Barclays', code: '#8edc1e' },
    { name: 'Carwale', code: '#1ed9dc' },
    { name: 'Nomura', code: '#801edc' },
    { name: 'GEP', code: '#066A7F' },
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

           {!this.state.loading && (
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
        )}

        {this.state.loading && ( 
        <View style={styles.loadingQuestions}>
          <ActivityIndicator size="large" color="#066A7F" />
          
        </View>
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
  loadingQuestions: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    color:'#000'
  },
  buttonText: {
    fontFamily: 'Merriweather-Regular',
    fontSize: 20,
    color: '#000',
    alignSelf: 'center',
    },
    button: {
    marginRight:120,
    marginLeft:120,
    marginTop:60,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#000',
    borderColor: '#000',
    borderRadius:30,
    borderWidth: 3,
  },
  logo: {
    backgroundColor: '#000',
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
    fontFamily: 'Raleway-Bold',
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
    alignItems: 'center',
    backgroundColor: '#06A77D',
    color: 'white',
    padding: 10,
  },
});