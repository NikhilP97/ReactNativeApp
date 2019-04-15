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

let getNavBarName = {
	'Morgan Stanley': {
		default: 'Morgan Stanley',
		interview: 'Morgan Stanley',
	} ,
	'Microsoft': {
		default: 'Microsoft',
		interview: 'Microsoft',
	} ,
	'Deutsche Bank': {
		default: 'Deutsche Bank',
		interview: 'Deutsche Bank',
	},

	'JP Morgan Chase': {
		default: 'JP Morgan Chase',
		interview: 'JP Morgan Chase',
	},
	'Accolite': {
		default: 'Accolite',
		interview: 'Accolite',
	},
	'Credit Suisse': {
		default: 'Credit Suisse',
		interview: 'Credit Suisse',
	},
	'PhonePe': {
		default: 'PhonePe',
		interview: 'PhonePe',
	},
	'Amazon': {
		default: 'Amazon',
		interview: 'Amazon',
	},
	'Barclays': {
		default: 'Barclays',
		interview: 'Barclays',
	},
	'Axxela': {
		default: 'Axxela',
		interview: 'Axxela',
	}
}


export default class CompanyMenuItem extends Component {
	constructor(props) {
		super(props);
		console.log("props", props);
		this.state = {
			title: getNavBarName[this.props.data],

		}
		let navBarTitle = this.props.data;
	}

	static navigationOptions = {
	    // title: `${getNavBarName[this.props.data]}`,
	    headerTintColor: 'white',
	    headerTitleStyle: { color: 'white' }
  	};

  	// componentDidMount() {
	  //   Actions.refresh({title: 'Java'});
  	// }


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
				        source={ require('../images/menuLogos/studyMat2_final.png') }
				        title={ 'Important Topics' }
				        titleFontSize={17}
				        imageWidth={ imgWidthToHeight }
				        imageHeight={ imgWidthToHeight }
				        onPress={() => Actions.webViewItem({ data: this.props.data, title: getNavBarName[this.props.data].default })}
				        roundedImage={ false }
				        roundedImageValue={ 50 }
				        style={ miniCardStyle }
				        imageMargin={ {top: 5} }
				    />
				    <CardViewWithImage 
				    	width={ screenWidth}
				        source={ require('../images/menuLogos/interview1_final.png') }
				        title={ 'Interview Experience' }
				        titleFontSize={17}
				        imageWidth={ imgWidthToHeight }
				        imageHeight={ imgWidthToHeight }
				        onPress={() => Actions.companyInterviewExp({ data: this.props.data, title: getNavBarName[this.props.data].default })}
				        roundedImage={ false }
				        roundedImageValue={ 50 }
				        style={ miniCardStyle }
				        imageMargin={ {top: 5} }
				    />
				    <CardViewWithImage
				    	width={ screenWidth}
				        source={ require('../images/menuLogos/tips.png') }
				        title={ 'Tips' }
				        titleFontSize={17}
				        imageWidth={ imgWidthToHeight }
				        imageHeight={ imgWidthToHeight }
				        onPress={() => Actions.companyTips({ data: this.props.data, title: getNavBarName[this.props.data].interview })}
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
	