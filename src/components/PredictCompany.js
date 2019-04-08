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
    this.results = 70;
    this.verbalCutoff = 45;
    this.techCutoff =55;
    this.coreCutoff =0;
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

    setTimeout(()=>{this.setState({ loading: false })}, 1000);
  }

  componentDidMount() {
    this.ShowAlertWithDelay();
  }



  render() {
    const items = [

    
    //------------------Case 1-------------------------

      { name: 'Infosys', code: '#427ABf' },           //0
      { name: 'Cognizant', code: '#9068be' },         //1
      { name: 'Fractal', code: '#0d87a1' },           //2
      { name: 'Capgemini', code: '#427AA1' },         //3
      { name: 'Citius Tech', code: '#427AA1' },       //4
      { name: 'Quantiphi', code: '#427AA1' },         //5
      { name: 'Deloitte', code: '#427AA1' },          //6
      { name: 'IVP', code: '#427AA1' },               //7
      { name: 'KPMG', code: '#427AA1' },              //8
      { name: 'GEP', code: '#066A7F' },               //9
      { name: 'Amadeus', code: '#066A7F' },           //10 
      { name: 'Siemens', code: '#066A7F' },           //11
      
      //-------------------------------------------------



      //----------------Case 2 Tech>Verbal----------------------------
      { name: 'Citius Tech', code: '#427ABf' },       //12
      { name: 'Quantiphi', code: '#427AA1' },         //13
      { name: 'Deloitte', code: '#427AA1' },          //14
      { name: 'IVP', code: '#427AA1' },               //15
      { name: 'KPMG', code: '#427AA1' },              //16
      { name: 'Amdocs', code: '#427AA1' },            //17
      { name: 'ISS', code: '#427AA1' },               //18
      { name: 'GEP', code: '#066A7F' },               //19
      { name: 'Amadeus', code: '#066A7F' },           //20
      { name: 'Siemens', code: '#066A7F' },           //21
      //---------------------------------------------------

      //----------------Case 2 Verbal>Tech----------------------------
      
      { name: 'KPMG', code: '#427ABf' },              //22
      { name: 'Quantiphi', code: '#427AA1' },         //23
      { name: 'Citius Tech', code: '#427AA1' },       //24
      { name: 'IVP', code: '#427AA1' },               //25
      { name: 'Deloitte', code: '#427AA1' },          //26
      { name: 'Amdocs', code: '#427AA1' },            //27
      { name: 'ISS', code: '#427AA1' },               //28
      { name: 'GEP', code: '#066A7F' },               //29
      { name: 'Amadeus', code: '#066A7F' },           //30
      { name: 'Siemens', code: '#066A7F' },           //31
      //---------------------------------------------------




      //----------------Case 3 Tech>Verbal-------------------------------
      { name: 'Quantiphi', code: '#427ABf' },          //32
      { name: 'Barclays', code: '#427AA1' },           //33
      { name: 'Carwale', code: '#427AA1' },            //34
      { name: 'Nomura', code: '#427AA1' },             //35
      { name: 'GEP', code: '#427AA1' },                //36
      { name: 'Amadeus', code: '#427AA1' },            //37
      { name: 'Axxela', code: '#427AA1' },             //38
      { name: 'Amazon', code: '#066A7F' },             //39
      { name: 'PhonePe', code: '#066A7F' },            //40
      { name: 'Credit Suisse', code: '#066A7F' },      //41
      //--------------------------------------------------------

      //----------------Case 3 Verbal>Tech-------------------------------
      { name: 'GEP', code: '#427ABf' },                //42
      { name: 'Barclays', code: '#427AA1' },           //43
      { name: 'Carwale', code: '#427AA1' },            //44
      { name: 'Nomura', code: '#427AA1' },             //45
      { name: 'Quantiphi', code: '#427AA1' },          //46
      { name: 'Amadeus', code: '#427AA1' },            //47
      { name: 'Axxela', code: '#427AA1' },             //48
      { name: 'Amazon', code: '#066A7F' },             //49
      { name: 'PhonePe', code: '#066A7F' },            //50
      { name: 'Credit Suisse', code: '#066A7F' },      //51
      //--------------------------------------------------------


      //--------------Case 4 Tech>Verbal---------------------------------
      { name: 'Amazon', code: '#427ABf' },             //52
       { name: 'PhonePe', code: '#427AA1' },            //53
      { name: 'Credit Suisse', code: '#427AA1' },      //54
      { name: 'JP Morgan Chase', code: '#427AA1' },    //55
      { name: 'Accolite', code: '#066A7F' },           //56
      { name: 'Deutsche Bank', code: '#066A7F' },      //57
      //--------------------------------------------------

      //--------------Case 4 Verbal>Tech---------------------------------
      { name: 'Barclays', code: '#427ABf' },           //58
      { name: 'Amazon', code: '#427AA1' },             //59
      { name: 'PhonePe', code: '#427AA1' },            //60
      { name: 'Credit Suisse', code: '#427AA1' },      //61
      { name: 'JP Morgan Chase', code: '#5d6d7e' },    //62
      { name: 'Accolite', code: '#066A7F' },           //63
      { name: 'Deutsche Bank', code: '#066A7F' },      //64
      //--------------------------------------------------

      //---------------Case 5---------------------------
      { name: 'Credit Suisse', code: '#427ABf' },     //39
      { name: 'JP Morgan Chase', code: '#427AA1' },   //40
      { name: 'Accolite', code: '#427AA1' },          //41
      { name: 'Deutsche Bank', code: '#427AA1' },     //42
      { name: 'Morgan Stanley', code: '#066A7F' },    //43
      { name: 'Microsoft', code: '#066A7F' },         //44
      //----------------------------------------------------

      //----------------Case 6---------------------------
      { name: 'Morgan Stanley', code: '#427ABf' },     //45
      { name: 'Microsoft', code: '#427ABf' },          //46
      //----------------------------------------------------




     
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
                      data: items.slice(9,12),
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

          {this.results > 25 && this.results < 40  && this.techCutoff > this.verbalCutoff    &&  (
                <SectionGrid

                  itemDimension={110}
                  // staticDimension={300}
                  // fixed
                  // spacing={20}
                  sections={[
                    {
                      title: 'Current Performance',
                      data: items.slice(12, 13),
                    },
                    {
                      title: 'Next threshold',
                      data: items.slice(13, 19),
                    },
                    {
                      title: 'Ambitious',
                      data: items.slice(19, 22),
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


            {this.results > 25 && this.results < 40  && this.verbalCutoff > this.techCutoff  &&  (
                <SectionGrid

                  itemDimension={110}
                  // staticDimension={300}
                  // fixed
                  // spacing={20}
                  sections={[
                    {
                      title: 'Current Performance',
                      data: items.slice(22, 23),
                    },
                    {
                      title: 'Next threshold',
                      data: items.slice(23, 29),
                    },
                    {
                      title: 'Ambitious',
                      data: items.slice(29, 32),
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

      
          {this.results > 39 && this.results < 50    && this.techCutoff > this.verbalCutoff  &&  (
                <SectionGrid

                  itemDimension={110}
                  // staticDimension={300}
                  // fixed
                  // spacing={20}
                  sections={[
                    {
                      title: 'Current Performance',
                      data: items.slice(32, 33),
                    },
                    {
                      title: 'Next threshold',
                      data: items.slice(33, 39),
                    },
                    {
                      title: 'Ambitious',
                      data: items.slice(39, 42),
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


            {this.results > 39 && this.results < 50    && this.techCutoff < this.verbalCutoff  &&  (
                <SectionGrid

                  itemDimension={110}
                  // staticDimension={300}
                  // fixed
                  // spacing={20}
                  sections={[
                    {
                      title: 'Current Performance',
                      data: items.slice(42, 43),
                    },
                    {
                      title: 'Next threshold',
                      data: items.slice(43, 49),
                    },
                    {
                      title: 'Ambitious',
                      data: items.slice(49, 52),
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

                  {this.results > 49 && this.results < 75 && this.techCutoff > this.verbalCutoff  &&  (
                <SectionGrid

                  itemDimension={110}
                  // staticDimension={300}
                  // fixed
                  // spacing={20}
                  sections={[
                    {
                      title: 'Current Performance',
                      data: items.slice(52, 53),
                    },
                    {
                      title: 'Next threshold',
                      data: items.slice(53, 56),
                    },
                    {
                      title: 'Ambitious',
                      data: items.slice(56, 58),
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


                  {this.results > 49 && this.results < 75 && this.techCutoff < this.verbalCutoff  &&  (
                <SectionGrid

                  itemDimension={110}
                  // staticDimension={300}
                  // fixed
                  // spacing={20}
                  sections={[
                    {
                      title: 'Current Performance',
                      data: items.slice(58, 59),
                    },
                    {
                      title: 'Next threshold',
                      data: items.slice(59, 62),
                    },
                    {
                      title: 'Ambitious',
                      data: items.slice(62, 65),
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

                  {this.results > 74 && this.results < 90  &&  (
                <SectionGrid

                  itemDimension={110}
                  // staticDimension={300}
                  // fixed
                  // spacing={20}
                  sections={[
                    {
                      title: 'Current Performance',
                      data: items.slice(39, 40),
                    },
                    {
                      title: 'Next threshold',
                      data: items.slice(40, 43),
                    },
                    {
                      title: 'Ambitious',
                      data: items.slice(43, 45),
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

                  {this.results > 89  &&  (
                <SectionGrid

                  itemDimension={110}
                  // staticDimension={300}
                  // fixed
                  // spacing={20}
                  sections={[
                    {
                      title: 'Current Performance',
                      data: items.slice(43, 45),
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