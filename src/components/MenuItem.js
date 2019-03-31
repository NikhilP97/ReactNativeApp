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
	constructor(props) {
		super(props);
		console.log("props", props);
	}




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
			width             : (Dimensions.get("window").width)
    	};
	    return (
	    	<BackgroundView>
	    	<View style={ styles.container }>
		        <View style={ {alignItems   : "center", justifyContent : "center",flexDirection: "row",flexWrap     : 'wrap',}}>
					
					<CardViewWithImage
				        source={ require('../images/menuLogos/studyMat2.png') }
				        title={ 'Study Material' }
				        titleFontSize={17}
				        imageWidth={ 62 }
				        imageHeight={ 62 }
				        onPress={() => Actions.studyMatCards(this.props.data)}
				        roundedImage={ false }
				        roundedImageValue={ 50 }
				        style={ miniCardStyle }
				        imageMargin={ {top: 5} }
				    />
				    <CardViewWithImage 
				        source={ require('../images/menuLogos/quiz2.jpg') }
				        title={ 'Take a Quiz' }
				        titleFontSize={17}
				        imageWidth={ 62 }
				        imageHeight={ 62 }
				        onPress={() => Actions.webViewItem()}
				        roundedImage={ false }
				        roundedImageValue={ 50 }
				        style={ miniCardStyle }
				        imageMargin={ {top: 5} }
				    />
				    <CardViewWithImage
				        source={ require('../images/menuLogos/interview1.png') }
				        title={ 'Interview Questions' }
				        titleFontSize={17}
				        imageWidth={ 62 }
				        imageHeight={ 62 }
				        onPress={() => Actions.webViewItem()}
				        roundedImage={ false }
				        roundedImageValue={ 50 }
				        style={ miniCardStyle }
				        imageMargin={ {top: 5} }
				    />
				    <CardViewWithImage    
				        source={ require('../images/menuLogos/important2.png') }
				        title={ 'Important Topics' }
				        titleFontSize={17}
				        imageWidth={ 67 }
				        imageHeight={ 62 }
				        onPress={() => Actions.webViewItem()}
				        roundedImage={ false }
				        roundedImageValue={ 50 }
				        style={ miniCardStyle }
				        imageMargin={ {top: 5} }
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
	