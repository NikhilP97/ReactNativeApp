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

export default class AptitudeTopics extends Component {
	constructor(props) {
		super(props);
		console.log("props", props);
	}

	static navigationOptions = {
	    // title: `${getNavBarName[this.props.data]}`,
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
			bgColor           : '#fff',
			padding           : 5,
			margin            : 5,
			borderRadius      : 3,
			elevation         : 3,
			width             : (Dimensions.get("window").width)
    	};
    	const imgWidthToHeight = 137;
    	const screenWidth = (Dimensions.get("window").width) - 20;
	    return (
	    	<BackgroundView>
	    	<ScrollView contentContainerStyle={{flexGrow: 1}}>
	    		<View style={ styles.container }>
		        <View style={ {alignItems   : "center", justifyContent : "center",flexDirection: "row",flexWrap     : 'wrap',}}>
					
					<CardViewWithImage
						width={ screenWidth}
				        source={ require('../images/menuLogos/quants1.jpg') }
				        title={ 'Quantitative Aptitude' }
				        titleFontSize={17}
				        imageWidth={ imgWidthToHeight }
				        imageHeight={ imgWidthToHeight }
				        onPress={() => Actions.webViewItem({ data: 'quants', title: 'Quantitative Aptitude' })}
				        roundedImage={ false }
				        roundedImageValue={ 50 }
				        style={ miniCardStyle }
				        imageMargin={ {top: 5} }
				    />
				    <CardViewWithImage 
				    	width={ screenWidth}
				        source={ require('../images/menuLogos/logical1.jpg') }
				        title={ 'Logical Reasoning' }
				        titleFontSize={17}
				        imageWidth={ imgWidthToHeight }
				        imageHeight={ imgWidthToHeight }
				        onPress={() => Actions.webViewItem({ data: 'lr', title: 'Logical Reasoning' })}
				        roundedImage={ false }
				        roundedImageValue={ 50 }
				        style={ miniCardStyle }
				        imageMargin={ {top: 5} }
				    />
				    <CardViewWithImage
				    	width={ screenWidth}
				        source={ require('../images/menuLogos/di1.jpg') }
				        title={ 'Data Interpretation' }
				        titleFontSize={17}
				        imageWidth={ imgWidthToHeight }
				        imageHeight={ imgWidthToHeight }
				        onPress={() => Actions.webViewItem({ data: 'di', title: 'Data Interpretation' })}
				        roundedImage={ false }
				        roundedImageValue={ 50 }
				        style={ miniCardStyle }
				        imageMargin={ {top: 5} }
				    />
				    <CardViewWithImage
				    	width={ screenWidth}    
				        source={ require('../images/menuLogos/verbal3.png') }
				        title={ 'Verbal Ability' }
				        titleFontSize={17}
				        imageWidth={ imgWidthToHeight }
				        imageHeight={ imgWidthToHeight }
				        onPress={() => Actions.webViewItem({ data: 'verbal', title: 'Verbal Ability' })}
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
		paddingTop     : 5,
		paddingLeft	: 25,
		paddingRight: 25,
		},
});
	