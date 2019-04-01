import React, {Component} from 'react';
import { 
	StyleSheet,
	Dimensions,
	View
} from 'react-native';
import { CardViewWithIcon, CardViewWithImage } from 'react-native-simple-card-view';
import {Actions, ActionConst} from 'react-native-router-flux';
import BackgroundView from './BackgroundView'
//5D6367 805A5A 67605D
let getCardData = {
	java: {
		c1: 'Overview',
		c2: 'Packages',
		c3: 'Java Basics',
		c4: 'Collections',
		c5: 'OOPS concepts',
		c6: 'Multithreading',
		c7: 'Java Operators',
		c8: 'Exceptions',
		c9: 'Java Strings',
		c10:'Garbage Collector',
		c11:'Wrapper Classes',
		c12:'Important Keywords',
		c13:'Methods',
		c14:'Constructors',
		c15:'Interfaces',
		c16:'Abstract Classes'
	},
	cLang: {
		c1: 'C Basics',
		c2: 'C Functions',
		c3: 'Variables & Keywords',
		c4: 'Pointers',
		c5: 'Data Types',
		c6: 'Storage Classes',
		c7: 'Enumerations',
		c8: 'Structures',
		c9: 'Union',
		c10:'Memory Layout',
		c11:'File Handling',
		c12:'Operators in C',
		c13:'Arrays in C',
		c14:'Strings in C',
		c15:'Multithreading in C',
		c16:'Macros vs Functions'
	},
	cppLang: {
		c1: 'C++ Basics',
		c2: 'Strings in C++',
		c3: 'Pointers in C++',
		c4: 'OOPS in C++',
		c5: 'STL Library',
		c6: 'Vectors',
		c7: 'C++ vs Java',
		c8: 'C vs C++',
		c9: 'Dynamic Memory',
		c10:'Function Overloading',
		c11:'Operator Overloading',
		c12:'Inheritance in C++',
		c13:'Constructors in C++',
		c14:'Destructors in C++',
		c15:'Exception Handling',
		c16:'Virtual Functions'
	}
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
			bgColor           : '#5D6367',
			padding           : 5,
			margin            : 5,
			borderRadius      : 3,
			elevation         : 3,
			width             : (Dimensions.get("window").width / 2) - 10
    	};
    	const screenWidth = (Dimensions.get("window").width / 2) - 10;
    	const imgHeightandWidth = Math.ceil(0.04063567 * Dimensions.get("window").height)//35;
    	console.log("window height: ", Dimensions.get("window").height);
	    return (
	    	<BackgroundView>
	    	<View style={ styles.container }>
		        <View style={ {alignItems   : "center",flexDirection: "row",flexWrap     : 'wrap',}}>
					
					<CardViewWithImage
				        width={ screenWidth}				        
				        title={ getCardData[this.props.data].c1 }
				        titleFontSize={17}
				        imageWidth={ imgHeightandWidth }
				        imageHeight={ imgHeightandWidth }
				        onPress={() => Actions.webViewItem(getCardData[this.props.data].c1)}
				        roundedImage={ false }
				        roundedImageValue={ 50 }
				        style={ miniCardStyle }
				        imageMargin={ {top: 5} }
				    />
				    <CardViewWithImage
				        width={ screenWidth}				       
				        title={ getCardData[this.props.data].c2 }
				        titleFontSize={17}
				        imageWidth={ imgHeightandWidth }
				        imageHeight={ imgHeightandWidth }
				        onPress={() => Actions.webViewItem(getCardData[this.props.data].c2)}
				        roundedImage={ false }
				        roundedImageValue={ 50 }
				        style={ miniCardStyle }
				        imageMargin={ {top: 5} }
				    />
				    <CardViewWithImage
				        width={ screenWidth}				        				       
				        title={ getCardData[this.props.data].c3 }
				        titleFontSize={17}
				        imageWidth={ imgHeightandWidth }
				        imageHeight={ imgHeightandWidth }
				        onPress={() => Actions.webViewItem(getCardData[this.props.data].c3)}
				        roundedImage={ false }
				        roundedImageValue={ 50 }
				        style={ miniCardStyle }
				        imageMargin={ {top: 5} }
				    />
				    <CardViewWithImage
				        width={ screenWidth}
				        title={ getCardData[this.props.data].c4 }
				        titleFontSize={17}
				        imageWidth={ imgHeightandWidth }
				        imageHeight={ imgHeightandWidth }
				        onPress={() => Actions.webViewItem(getCardData[this.props.data].c4)}
				        roundedImage={ false }
				        roundedImageValue={ 50 }
				        style={ miniCardStyle }
				        imageMargin={ {top: 5} }
				    />
				    <CardViewWithImage
				        width={ screenWidth}				        
				        title={ getCardData[this.props.data].c5 }
				        titleFontSize={17}
				        imageWidth={ imgHeightandWidth }
				        imageHeight={ imgHeightandWidth }
				        onPress={() => Actions.webViewItem(getCardData[this.props.data].c5)}
				        roundedImage={ false }
				        roundedImageValue={ 50 }
				        style={ miniCardStyle }
				        imageMargin={ {top: 5} }
				    />
				    <CardViewWithImage
				        width={ screenWidth}			        
				        title={ getCardData[this.props.data].c6 }
				        titleFontSize={17}
				        imageWidth={ imgHeightandWidth }
				        imageHeight={ imgHeightandWidth }
				        onPress={() => Actions.webViewItem(getCardData[this.props.data].c6)}
				        roundedImage={ false }
				        roundedImageValue={ 50 }
				        style={ miniCardStyle }
				        imageMargin={ {top: 5} }
				    />
				    <CardViewWithImage
				        width={ screenWidth}				        
				        title={ getCardData[this.props.data].c7 }
				        titleFontSize={17}
				        imageWidth={ imgHeightandWidth }
				        imageHeight={ imgHeightandWidth }
				        onPress={() => Actions.webViewItem(getCardData[this.props.data].c7)}
				        roundedImage={ false }
				        roundedImageValue={ 50 }
				        style={ miniCardStyle }
				        imageMargin={ {top: 5} }
				    />
				    <CardViewWithImage
				        width={ screenWidth}				    
				        title={ getCardData[this.props.data].c8 }
				        titleFontSize={17}
				        imageWidth={ imgHeightandWidth }
				        imageHeight={ imgHeightandWidth }
				        onPress={() => Actions.webViewItem(getCardData[this.props.data].c8)}
				        roundedImage={ false }
				        roundedImageValue={ 50 }
				        style={ miniCardStyle }
				        imageMargin={ {top: 5} }
				    />
				    <CardViewWithImage
				        width={ screenWidth}				    
				        title={ getCardData[this.props.data].c9 }
				        titleFontSize={17}
				        imageWidth={ imgHeightandWidth }
				        imageHeight={ imgHeightandWidth }
				        onPress={() => Actions.webViewItem(getCardData[this.props.data].c9)}
				        roundedImage={ false }
				        roundedImageValue={ 50 }
				        style={ miniCardStyle }
				        imageMargin={ {top: 5} }
				    />
				    <CardViewWithImage
				        width={ screenWidth}				    
				        title={ getCardData[this.props.data].c10 }
				        titleFontSize={17}
				        imageWidth={ imgHeightandWidth }
				        imageHeight={ imgHeightandWidth }
				        onPress={() => Actions.webViewItem(getCardData[this.props.data].c10)}
				        roundedImage={ false }
				        roundedImageValue={ 50 }
				        style={ miniCardStyle }
				        imageMargin={ {top: 5} }
				    />
				    <CardViewWithImage
				        width={ screenWidth}				    
				        title={ getCardData[this.props.data].c11 }
				        titleFontSize={17}
				        imageWidth={ imgHeightandWidth }
				        imageHeight={ imgHeightandWidth }
				        onPress={() => Actions.webViewItem(getCardData[this.props.data].c11)}
				        roundedImage={ false }
				        roundedImageValue={ 50 }
				        style={ miniCardStyle }
				        imageMargin={ {top: 5} }
				    />
				    <CardViewWithImage
				        width={ screenWidth}				    
				        title={ getCardData[this.props.data].c12 }
				        titleFontSize={17}
				        imageWidth={ imgHeightandWidth }
				        imageHeight={ imgHeightandWidth }
				        onPress={() => Actions.webViewItem(getCardData[this.props.data].c12)}
				        roundedImage={ false }
				        roundedImageValue={ 50 }
				        style={ miniCardStyle }
				        imageMargin={ {top: 5} }
				    />
				    <CardViewWithImage
				        width={ screenWidth}				    
				        title={ getCardData[this.props.data].c13 }
				        titleFontSize={17}
				        imageWidth={ imgHeightandWidth }
				        imageHeight={ imgHeightandWidth }
				        onPress={() => Actions.webViewItem(getCardData[this.props.data].c13)}
				        roundedImage={ false }
				        roundedImageValue={ 50 }
				        style={ miniCardStyle }
				        imageMargin={ {top: 5} }
				    />
				    <CardViewWithImage
				        width={ screenWidth}				    
				        title={ getCardData[this.props.data].c14 }
				        titleFontSize={17}
				        imageWidth={ imgHeightandWidth }
				        imageHeight={ imgHeightandWidth }
				        onPress={() => Actions.webViewItem(getCardData[this.props.data].c14)}
				        roundedImage={ false }
				        roundedImageValue={ 50 }
				        style={ miniCardStyle }
				        imageMargin={ {top: 5} }
				    />
				    <CardViewWithImage
				        width={ screenWidth}				    
				        title={ getCardData[this.props.data].c15 }
				        titleFontSize={17}
				        imageWidth={ imgHeightandWidth }
				        imageHeight={ imgHeightandWidth }
				        onPress={() => Actions.webViewItem(getCardData[this.props.data].c15)}
				        roundedImage={ false }
				        roundedImageValue={ 50 }
				        style={ miniCardStyle }
				        imageMargin={ {top: 5} }
				    />
				    <CardViewWithImage
				        width={ screenWidth}				    
				        title={ getCardData[this.props.data].c16}
				        titleFontSize={17}
				        imageWidth={ imgHeightandWidth }
				        imageHeight={ imgHeightandWidth }
				        onPress={() => Actions.webViewItem(getCardData[this.props.data].c16)}
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
		paddingTop     : 13,
		},
});
	