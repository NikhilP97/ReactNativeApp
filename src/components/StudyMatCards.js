import React, {Component} from 'react';
import { 
	StyleSheet,
	Dimensions,
	View
} from 'react-native';
import { CardViewWithIcon, CardViewWithImage } from 'react-native-simple-card-view';
import {Actions, ActionConst} from 'react-native-router-flux';
import BackgroundView from './BackgroundView'

let getCardData = {
	java: {
		c1: 'Overview',
		c2: 'Packages',
		c3: 'Basics',
		c4: 'Collections',
		c5: 'OOPS concepts',
		c6: 'Multithreading',
		c7: 'Operators',
		c8: 'File Handling'
	},
}

export default class StudyMatCards extends Component {
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
			width             : (Dimensions.get("window").width / 2) - 30
    	};
	    return (
	    	<BackgroundView>
	    	<View style={ styles.container }>
		        <View style={ {alignItems   : "center",flexDirection: "row",flexWrap     : 'wrap',}}>
					
					<CardViewWithImage
				        width={ 175}				        
				        title={ getCardData[this.props.data].c1 }
				        titleFontSize={17}
				        imageWidth={ 10 }
				        imageHeight={ 10 }
				        onPress={() => Actions.webViewItem(getCardData[this.props.data].c1)}
				        roundedImage={ false }
				        roundedImageValue={ 50 }
				        style={ miniCardStyle }
				        imageMargin={ {top: 5} }
				    />
				    <CardViewWithImage
				        width={ 175}				       
				        title={ getCardData[this.props.data].c2 }
				        titleFontSize={17}
				        imageWidth={ 10 }
				        imageHeight={ 10 }
				        onPress={() => Actions.webViewItem(getCardData[this.props.data].c2)}
				        roundedImage={ false }
				        roundedImageValue={ 50 }
				        style={ miniCardStyle }
				        imageMargin={ {top: 5} }
				    />
				    <CardViewWithImage
				        width={ 175}				        				       
				        title={ getCardData[this.props.data].c3 }
				        titleFontSize={17}
				        imageWidth={ 10 }
				        imageHeight={ 10 }
				        onPress={() => Actions.webViewItem(getCardData[this.props.data].c3)}
				        roundedImage={ false }
				        roundedImageValue={ 50 }
				        style={ miniCardStyle }
				        imageMargin={ {top: 5} }
				    />
				    <CardViewWithImage
				        width={ 175}
				        title={ getCardData[this.props.data].c4 }
				        titleFontSize={17}
				        imageWidth={ 10 }
				        imageHeight={ 10 }
				        onPress={() => Actions.webViewItem(getCardData[this.props.data].c4)}
				        roundedImage={ false }
				        roundedImageValue={ 50 }
				        style={ miniCardStyle }
				        imageMargin={ {top: 5} }
				    />
				    <CardViewWithImage
				        width={ 175}				        
				        title={ getCardData[this.props.data].c5 }
				        titleFontSize={17}
				        imageWidth={ 10 }
				        imageHeight={ 10 }
				        onPress={() => Actions.webViewItem(getCardData[this.props.data].c5)}
				        roundedImage={ false }
				        roundedImageValue={ 50 }
				        style={ miniCardStyle }
				        imageMargin={ {top: 5} }
				    />
				    <CardViewWithImage
				        width={ 175}			        
				        title={ getCardData[this.props.data].c6 }
				        titleFontSize={17}
				        imageWidth={ 10 }
				        imageHeight={ 10 }
				        onPress={() => Actions.webViewItem(getCardData[this.props.data].c6)}
				        roundedImage={ false }
				        roundedImageValue={ 50 }
				        style={ miniCardStyle }
				        imageMargin={ {top: 5} }
				    />
				    <CardViewWithImage
				        width={ 175}				        
				        title={ getCardData[this.props.data].c7 }
				        titleFontSize={17}
				        imageWidth={ 10 }
				        imageHeight={ 10 }
				        onPress={() => Actions.webViewItem(getCardData[this.props.data].c7)}
				        roundedImage={ false }
				        roundedImageValue={ 50 }
				        style={ miniCardStyle }
				        imageMargin={ {top: 5} }
				    />
				    <CardViewWithImage
				        width={ 175}				    
				        title={ getCardData[this.props.data].c8 }
				        titleFontSize={17}
				        imageWidth={ 10 }
				        imageHeight={ 10 }
				        onPress={() => Actions.webViewItem(getCardData[this.props.data].c8)}
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
	