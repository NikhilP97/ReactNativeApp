import React, {Component} from 'react';
import { 
	StyleSheet,
	Dimensions,
	View,
	ScrollView
} from 'react-native';
import { CardViewWithIcon, CardViewWithImage } from 'react-native-simple-card-view';
import {Actions, ActionConst} from 'react-native-router-flux';
import BackgroundView from './BackgroundView'

export default class MenuScreen extends Component {
	render(){
		const miniCardStyle = {
			shadowColor       : '#000000',
			shadowOffsetWidth : 2,
			shadowOffsetHeight: 2,
			shadowOpacity     : 0.1,
			shadowRadius       : 5,
			bgColor           : '#fff',
			padding           : 5,
			margin            : 5,
			borderRadius      : 3,
			elevation         : 3,
			width             : (Dimensions.get("window").width / 2) - 30
    	};
    	const screenWidth = (Dimensions.get("window").width / 2) - 10;
    	const widthToHeightwithLabel =90;
    	const widthToHeightwithoutLabel = 142;
	    return (
	    	<BackgroundView>
	    	<ScrollView contentContainerStyle={{flexGrow: 1}}>
	    	<View style={ styles.container }>
		        <View style={ {alignItems   : "center",flexDirection: "row",flexWrap     : 'wrap',}}>
					
					<CardViewWithImage
				        width={ screenWidth}
				        source={ require('../images/menuLogos/java1.png') }
				        title={ 'Java' }
				        titleFontSize={17}
				        imageWidth={ widthToHeightwithLabel }
				        imageHeight={ widthToHeightwithLabel }
				        onPress={() => Actions.menuItem('java')}
				        roundedImage={ false }
				        roundedImageValue={ 50 }
				        style={ miniCardStyle }
				        imageMargin={ {top: 5} }
				    />
				    <CardViewWithImage
				        width={ screenWidth}
				        source={ require('../images/menuLogos/aptitude1.jpg') }
				        title={ 'Aptitude' }
				        titleFontSize={17}
				        imageWidth={ widthToHeightwithLabel }
				        imageHeight={ widthToHeightwithLabel }
				        onPress={() => Actions.aptitudeTopics('apti')}
				        roundedImage={ false }
				        roundedImageValue={ 50 }
				        style={ miniCardStyle }
				        imageMargin={ {top: 5} }
				    />
				    <CardViewWithImage
				        width={ screenWidth}
				        source={ require('../images/menuLogos/c1.png') }
				        imageWidth={ widthToHeightwithoutLabel }
				        imageHeight={ widthToHeightwithoutLabel }
				        onPress={() => Actions.menuItem('cLang')}
				        roundedImage={ false }
				        roundedImageValue={ 50 }
				        style={ miniCardStyle }
				        imageMargin={ {top: 5} }
				    />
				    <CardViewWithImage
				        width={ screenWidth}
				        source={ require('../images/menuLogos/cpp1.png') }
				        imageWidth={ widthToHeightwithoutLabel }
				        imageHeight={ widthToHeightwithoutLabel }
				        onPress={() => Actions.menuItem('cppLang')}
				        roundedImage={ false }
				        roundedImageValue={ 50 }
				        style={ miniCardStyle }
				        imageMargin={ {top: 5} }
				    />
				    <CardViewWithImage
				        width={ screenWidth}
				        source={ require('../images/menuLogos/python1.png') }
				        imageWidth={ widthToHeightwithLabel }
				        imageHeight={ widthToHeightwithLabel }
				        title={ 'Python' }
				        titleFontSize={17}
				        onPress={() => Actions.menuItem('python')}
				        roundedImage={ false }
				        roundedImageValue={ 50 }
				        style={ miniCardStyle }
				        
				    />
				    <CardViewWithImage
				        width={ screenWidth}
				        source={ require('../images/menuLogos/ds1.png') }
				        imageWidth={ widthToHeightwithLabel }
				        imageHeight={ widthToHeightwithLabel }
				        title={ 'Data Structures' }
				        titleFontSize={17}
				        onPress={() => Actions.menuItem('ds')}
				        roundedImage={ false }
				        roundedImageValue={ 50 }
				        style={ miniCardStyle }
				    />
				    <CardViewWithImage
				        width={ screenWidth}
				        source={ require('../images/menuLogos/algo1.png') }
				        imageWidth={ widthToHeightwithLabel }
				        imageHeight={ widthToHeightwithLabel }
				        title={ 'Algorithms' }
				        titleFontSize={17}
				        onPress={() => Actions.menuItem('algos')}
				        roundedImage={ false }
				        roundedImageValue={ 50 }
				        style={ miniCardStyle }
				    />
				    <CardViewWithImage
				        width={ screenWidth}
				        source={ require('../images/menuLogos/dbms2.png') }
				        imageWidth={ widthToHeightwithLabel-4 }
				        imageHeight={ widthToHeightwithLabel-4 }
				        title={ 'DBMS' }
				        titleFontSize={17}
				        onPress={() => Actions.menuItem('dbms')}
				        roundedImage={ false }
				        roundedImageValue={ 50 }
				        style={ miniCardStyle }
				        imageMargin={ {top: 5} }
				    />
				    <CardViewWithImage
				        width={ (Dimensions.get("window").width) - 10}
				        source={ require('../images/menuLogos/mainQuiz.png') }
				        imageWidth={ widthToHeightwithoutLabel+6 }
				        imageHeight={ widthToHeightwithoutLabel+6 }
				        titleFontSize={17}
				        onPress={() => Actions.quizStartScreen('mainQuiz')}
				        roundedImage={ false }
				        roundedImageValue={ 50 }
				        style={ miniCardStyle }    
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
		paddingTop     : 25,
		},
});
	