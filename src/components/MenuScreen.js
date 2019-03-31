import React, {Component} from 'react';
import { 
	StyleSheet,
	Dimensions,
	View
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
			margin            : 15,
			borderRadius      : 3,
			elevation         : 3,
			width             : (Dimensions.get("window").width / 2) - 30
    	};
	    return (
	    	<BackgroundView>
	    	<View style={ styles.container }>
		        <View style={ {alignItems   : "center",flexDirection: "row",flexWrap     : 'wrap',}}>
					
					<CardViewWithImage
				        width={ 175}
				        source={ require('../images/menuLogos/java1.png') }
				        title={ 'Java' }
				        titleFontSize={17}
				        imageWidth={ 40 }
				        imageHeight={ 40 }
				        onPress={() => Actions.menuItem('java')}
				        roundedImage={ false }
				        roundedImageValue={ 50 }
				        style={ miniCardStyle }
				        imageMargin={ {top: 5} }
				    />
				    <CardViewWithImage
				        width={ 175}
				        source={ require('../images/menuLogos/aptitude1.jpg') }
				        title={ 'Aptitude' }
				        titleFontSize={17}
				        imageWidth={ 40 }
				        imageHeight={ 40 }
				        onPress={() => Actions.menuItem('apti')}
				        roundedImage={ false }
				        roundedImageValue={ 50 }
				        style={ miniCardStyle }
				        imageMargin={ {top: 5} }
				    />
				    <CardViewWithImage
				        width={ 175}
				        source={ require('../images/menuLogos/c1.png') }
				        imageWidth={ 82 }
				        imageHeight={ 82 }
				        onPress={() => Actions.menuItem('cLang')}
				        roundedImage={ false }
				        roundedImageValue={ 50 }
				        style={ miniCardStyle }
				        imageMargin={ {top: 5} }
				    />
				    <CardViewWithImage
				        width={ 175}
				        source={ require('../images/menuLogos/cpp1.png') }
				        imageWidth={ 82 }
				        imageHeight={ 82 }
				        onPress={() => Actions.menuItem('cppLang')}
				        roundedImage={ false }
				        roundedImageValue={ 50 }
				        style={ miniCardStyle }
				        imageMargin={ {top: 5} }
				    />
				    <CardViewWithImage
				        width={ 175}
				        source={ require('../images/menuLogos/python1.png') }
				        imageWidth={ 43 }
				        imageHeight={ 43 }
				        title={ 'Python' }
				        titleFontSize={17}
				        onPress={() => Actions.menuItem('python')}
				        roundedImage={ false }
				        roundedImageValue={ 50 }
				        style={ miniCardStyle }
				        
				    />
				    <CardViewWithImage
				        width={ 175}
				        source={ require('../images/menuLogos/ds1.png') }
				        imageWidth={ 43 }
				        imageHeight={ 43 }
				        title={ 'Data Structures' }
				        titleFontSize={17}
				        onPress={() => Actions.menuItem('ds')}
				        roundedImage={ false }
				        roundedImageValue={ 50 }
				        style={ miniCardStyle }
				    />
				    <CardViewWithImage
				        width={ 175}
				        source={ require('../images/menuLogos/algo1.png') }
				        imageWidth={ 43 }
				        imageHeight={ 43 }
				        title={ 'Algorithms' }
				        titleFontSize={17}
				        onPress={() => Actions.menuItem('algos')}
				        roundedImage={ false }
				        roundedImageValue={ 50 }
				        style={ miniCardStyle }
				    />
				    <CardViewWithImage
				        width={ 175}
				        source={ require('../images/menuLogos/dbms2.png') }
				        imageWidth={ 38 }
				        imageHeight={ 38 }
				        title={ 'DBMS' }
				        titleFontSize={17}
				        onPress={() => Actions.menuItem('dbms')}
				        roundedImage={ false }
				        roundedImageValue={ 50 }
				        style={ miniCardStyle }
				        imageMargin={ {top: 5} }
				    />
				    <CardViewWithImage
				        width={ (Dimensions.get("window").width) - 30}
				        source={ require('../images/menuLogos/mainQuiz.png') }
				        imageWidth={ 88 }
				        imageHeight={ 88 }
				        titleFontSize={17}
				        onPress={() => Actions.quizStartScreen()}
				        roundedImage={ false }
				        roundedImageValue={ 50 }
				        style={ miniCardStyle }
				        
				    />
		        </View>
	     	</View>
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
	