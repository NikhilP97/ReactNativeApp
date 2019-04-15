import React, {Component} from 'react';
import { 
	StyleSheet,
	Dimensions,
	View,
	ScrollView,
	StatusBar
} from 'react-native';
import { CardViewWithIcon, CardViewWithImage } from 'react-native-simple-card-view';
import {Actions, ActionConst} from 'react-native-router-flux';
import BackgroundView from './BackgroundView'

export default class MenuScreen extends Component {

	static navigationOptions = {
    // title: 'Home screen',
    headerTintColor: 'white',
    headerTitleStyle: { color: 'white' }
 	};

	render(){
		const miniCardStyle = {
			shadowColor       : '#000000',
			shadowOffsetWidth : 2,
			shadowOffsetHeight: 2,
			shadowOpacity     : 0.1,
			shadowRadius       : 5,
			bgColor           : '#f6f5f3',
			padding           : 5,
			margin            : 5,
			borderRadius      : 3,
			elevation         : 3,
			width             : (Dimensions.get("window").width / 2) - 30,
			alignItems		  : "center"
    	};
    	const screenWidth = (Dimensions.get("window").width / 2) - 10;
    	const widthToHeightwithLabel =90;
    	const widthToHeightwithoutLabel = 142;
	    return (
	    	<BackgroundView>
	    	<ScrollView contentContainerStyle={{flexGrow: 1}}>
	    	<View style={ styles.container }>
	    		<StatusBar backgroundColor="#5487AA" barStyle="light-content" />
		        <View style={ {alignItems   : "center",flexDirection: "row",flexWrap     : 'wrap',}}>
		        	<CardViewWithImage
				        width={ (Dimensions.get("window").width) - 10}
				        source={ require('../images/menuLogos/mainQuiz_final.png') }
				        title={ 'Company Predictor' }
				        imageWidth={ widthToHeightwithoutLabel+6 }
				        imageHeight={ widthToHeightwithoutLabel+6 }
				        titleFontSize={17}
				        onPress={() => Actions.quizStartScreen('mainQuiz')}
				        roundedImage={ false }
				        roundedImageValue={ 50 }
				        style={ miniCardStyle }    
				    />
					<CardViewWithImage
				        width={ screenWidth}
				        source={ require('../images/menuLogos/cwp.png') }
				        title={ 'Company Preparation' }
				        titleFontSize={17}
				        imageWidth={ widthToHeightwithLabel - 3}
				        imageHeight={ widthToHeightwithLabel - 3}
				        onPress={() => Actions.companyprep()}
				        roundedImage={ false }
				        roundedImageValue={ 50 }
				        style={ miniCardStyle }
				        imageMargin={ {top: 5} }
				    />
				    <CardViewWithImage
				        width={ screenWidth}
				        source={ require('../images/menuLogos/core_final.png') }
				        title={ 'Core' }
				        titleFontSize={17}
				        imageWidth={ widthToHeightwithLabel }
				        imageHeight={ widthToHeightwithLabel }
				        onPress={() => Actions.menuItem({ data: 'core', title: 'Core' })}
				        roundedImage={ false }
				        roundedImageValue={ 50 }
				        style={ miniCardStyle }
				        imageMargin={ {top: 5} }
				    />
					<CardViewWithImage
				        width={ screenWidth}
				        source={ require('../images/menuLogos/java_test.png') }
				        title={ 'Java' }
				        titleFontSize={17}
				        imageWidth={ widthToHeightwithLabel }
				        imageHeight={ widthToHeightwithLabel }
				        onPress={() => Actions.menuItem({ data: 'java', title: 'Java' })}
				        roundedImage={ false }
				        roundedImageValue={ 50 }
				        style={ miniCardStyle }
				        imageMargin={ {top: 5} }
				    />
				    <CardViewWithImage
				        width={ screenWidth}
				        source={ require('../images/menuLogos/apti_final.png') }
				        title={ 'Aptitude' }
				        titleFontSize={17}
				        imageWidth={ widthToHeightwithLabel }
				        imageHeight={ widthToHeightwithLabel }
				        onPress={() => Actions.aptitudeTopics({ data: 'apti', title: 'Aptitude' })}
				        roundedImage={ false }
				        roundedImageValue={ 50 }
				        style={ miniCardStyle }
				        imageMargin={ {top: 5} }
				    />
				    <CardViewWithImage
				        width={ screenWidth}
				        source={ require('../images/menuLogos/c_final.png') }
				        imageWidth={ widthToHeightwithoutLabel -6 }
				        imageHeight={ widthToHeightwithoutLabel -6}
				        onPress={() => Actions.menuItem({ data: 'cLang', title: 'C Language' })}
				        roundedImage={ false }
				        roundedImageValue={ 50 }
				        style={ miniCardStyle }
				        imageMargin={ {top: 5} }
				    />
				    <CardViewWithImage
				        width={ screenWidth}
				        source={ require('../images/menuLogos/cpp_final.png') }
				        imageWidth={ widthToHeightwithoutLabel -6}
				        imageHeight={ widthToHeightwithoutLabel -6}
				        onPress={() => Actions.menuItem({ data: 'cppLang', title: 'C++ Language' })}
				        roundedImage={ false }
				        roundedImageValue={ 50 }
				        style={ miniCardStyle }
				        imageMargin={ {top: 5} }
				    />
				    <CardViewWithImage
				        width={ screenWidth}
				        source={ require('../images/menuLogos/python_final.png') }
				        imageWidth={ widthToHeightwithLabel +4 }
				        imageHeight={ widthToHeightwithLabel +4}
				        title={ 'Python' }
				        titleFontSize={17}
				        onPress={() => Actions.menuItem({ data: 'python', title: 'Python' })}
				        roundedImage={ false }
				        roundedImageValue={ 50 }
				        style={ miniCardStyle }
				        
				    />
				    <CardViewWithImage
				        width={ screenWidth}
				        source={ require('../images/menuLogos/ds_final.png') }
				        imageWidth={ widthToHeightwithLabel + 4}
				        imageHeight={ widthToHeightwithLabel + 4}
				        title={ 'Data Structures' }
				        titleFontSize={17}
				        onPress={() => Actions.menuItem({ data: 'ds', title: 'Data Structures' })}
				        roundedImage={ false }
				        roundedImageValue={ 50 }
				        style={ miniCardStyle }
				    />
				    <CardViewWithImage
				        width={ screenWidth}
				        source={ require('../images/menuLogos/algos_final.png') }
				        imageWidth={ widthToHeightwithLabel + 9}
				        imageHeight={ widthToHeightwithLabel + 9 }
				        title={ 'Algorithms' }
				        titleFontSize={17}
				        onPress={() => Actions.menuItem({ data: 'algos', title: 'Algorithms' })}
				        roundedImage={ false }
				        roundedImageValue={ 50 }
				        style={ miniCardStyle }
				    />
				    <CardViewWithImage
				        width={ screenWidth}
				        source={ require('../images/menuLogos/dbms_final.png') }
				        imageWidth={ widthToHeightwithLabel+6 }
				        imageHeight={ widthToHeightwithLabel+6 }
				        title={ 'DBMS' }
				        titleFontSize={17}
				        onPress={() => Actions.menuItem({ data: 'dbms', title: 'DBMS' })}
				        roundedImage={ false }
				        roundedImageValue={ 50 }
				        style={ miniCardStyle }
				        imageMargin={ {top: 5} }
				    />
				    <CardViewWithImage
				        //width={ screenWidth}
				        width={ (Dimensions.get("window").width) - 10}
				        source={ require('../images/menuLogos/policy_final.png') }
				        imageWidth={ widthToHeightwithLabel+6 }
				        imageHeight={ widthToHeightwithLabel+6 }
				        title={ 'Placement Policy' }
				        titleFontSize={17}
				        onPress={() => Actions.placement_policy()}
				        roundedImage={ false }
				        roundedImageValue={ 50 }
				        style={ miniCardStyle }
				        imageMargin={ {top: 5} }
				    />
				    
		        </View>
	     	</View>
	     	</ScrollView> 
	     	</BackgroundView>
	    );
  	}
}

const styles = StyleSheet.create({
	container: {
		flex           : 2,
		alignItems     : 'center',
		paddingTop     : 3,
		},
});


	