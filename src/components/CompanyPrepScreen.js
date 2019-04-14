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

export default class CompanyPrepScreen extends Component {

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
			width             : (Dimensions.get("window").width / 2) - 30
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
				        width={ screenWidth}
				        source={ require('../images/menuLogos/morgan_stanley.png') }
				        //title={ 'Morgan Stanley' }
				        titleFontSize={17}
				        imageWidth={ widthToHeightwithLabel + 60 }
				        imageHeight={ widthToHeightwithLabel + 60}
				        onPress={() => Actions.companymenuitem({ data: 'Morgan Stanley', title: 'Morgan Stanley' })}
				        roundedImage={ false }
				        roundedImageValue={ 50 }
				        style={ miniCardStyle }
				        imageMargin={ {top: 5} }
				    />
					<CardViewWithImage
				        width={ screenWidth}
				        source={ require('../images/menuLogos/microsoft.png') }
				        //title={ 'Microsoft' }
				        titleFontSize={17}
				        imageWidth={ widthToHeightwithLabel +60 }
				        imageHeight={ widthToHeightwithLabel + 60}
				        onPress={() => Actions.companymenuitem({ data: 'Microsoft', title: 'Microsoft' })}
				        roundedImage={ false }
				        roundedImageValue={ 50 }
				        style={ miniCardStyle }
				        imageMargin={ {top: 5} }
				    />
				    <CardViewWithImage
				        width={ screenWidth}
				        source={ require('../images/menuLogos/deutsche_bank.png') }
				        //title={ 'Deutsche Bank' }
				        titleFontSize={17}
				        imageWidth={ widthToHeightwithLabel + 65}
				        imageHeight={ widthToHeightwithLabel + 55}
				        onPress={() => Actions.companymenuitem({ data: 'Deutsche Bank', title: 'Deutsche Bank' })}
				        roundedImage={ false }
				        roundedImageValue={ 50 }
				        style={ miniCardStyle }
				        imageMargin={ {top: 5} }
				    />
					<CardViewWithImage
				        width={ screenWidth}
				        source={ require('../images/menuLogos/jpmc.png') }
				        //title={ 'JP Morgan Chase' }
				        titleFontSize={17}
				        imageWidth={ widthToHeightwithLabel + 60}
				        imageHeight={ widthToHeightwithLabel + 60 }
				        onPress={() => Actions.companymenuitem({ data: 'JP Morgan Chase', title: 'JP Morgan Chase' })}
				        roundedImage={ false }
				        roundedImageValue={ 50 }
				        style={ miniCardStyle }
				        imageMargin={ {top: 5} }
				    />
				    <CardViewWithImage
				        width={ screenWidth}
				        source={ require('../images/menuLogos/accolite.png') }
				        //title={ 'Accolite' }
				        titleFontSize={17}
				        imageWidth={ widthToHeightwithLabel + 60 }
				        imageHeight={ widthToHeightwithLabel + 60}
				        onPress={() => Actions.companymenuitem({ data: 'Accolite', title: 'Accolite' })}
				        roundedImage={ false }
				        roundedImageValue={ 50 }
				        style={ miniCardStyle }
				        imageMargin={ {top: 5} }
				    />
				    <CardViewWithImage
				        width={ screenWidth}
				        source={ require('../images/menuLogos/credit_suisse.png') }
				        //title={ 'Credit Suisse' }
				        titleFontSize={17}
				        imageWidth={ widthToHeightwithLabel + 60 }
				        imageHeight={ widthToHeightwithLabel + 60}
				        onPress={() => Actions.companymenuitem({ data: 'Credit Suisse', title: 'Credit Suisse' })}
				        roundedImage={ false }
				        roundedImageValue={ 50 }
				        style={ miniCardStyle }
				        imageMargin={ {top: 5} }
				    />
				    <CardViewWithImage
				        width={ screenWidth}
				        source={ require('../images/menuLogos/phonepe.png') }
				        //title={ 'PhonePe' }
				        titleFontSize={17}
				        imageWidth={ widthToHeightwithLabel + 60 }
				        imageHeight={ widthToHeightwithLabel + 60}
				        onPress={() => Actions.companymenuitem({ data: 'PhonePe', title: 'PhonePe' })}
				        roundedImage={ false }
				        roundedImageValue={ 50 }
				        style={ miniCardStyle }
				        imageMargin={ {top: 5} }
				    />
				    <CardViewWithImage
				        width={ screenWidth}
				        source={ require('../images/menuLogos/amazon.png') }
				        //title={ 'Amazon AWS' }
				        titleFontSize={17}
				        imageWidth={ widthToHeightwithLabel + 60 }
				        imageHeight={ widthToHeightwithLabel + 60}
				        onPress={() => Actions.companymenuitem({ data: 'Amazon', title: 'Amazon' })}
				        roundedImage={ false }
				        roundedImageValue={ 50 }
				        style={ miniCardStyle }
				        imageMargin={ {top: 5} }
				    />
				    <CardViewWithImage
				        width={ screenWidth}
				        source={ require('../images/menuLogos/barclays.png') }
				        //title={ 'Barclays' }
				        titleFontSize={17}
				        imageWidth={ widthToHeightwithLabel + 60 }
				        imageHeight={ widthToHeightwithLabel + 60}
				        onPress={() => Actions.companymenuitem({ data: 'Barclays', title: 'Barclays' })}
				        roundedImage={ false }
				        roundedImageValue={ 50 }
				        style={ miniCardStyle }
				        imageMargin={ {top: 5} }
				    />
				    <CardViewWithImage
				        width={ screenWidth}
				        source={ require('../images/menuLogos/axxela.png') }
				        //title={ 'Axxela' }
				        titleFontSize={17}
				        imageWidth={ widthToHeightwithLabel + 60 }
				        imageHeight={ widthToHeightwithLabel + 60}
				        onPress={() => Actions.companymenuitem({ data: 'Axxela', title: 'Axxela' })}
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


	