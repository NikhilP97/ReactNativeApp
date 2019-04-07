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
		c10:'Java Garbage Collector',
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
	},
	python: {
		c1: 'Python Basics',
		c2: 'Keywords in Python',
		c3: 'I/O in Python',
		c4: 'Python Data Types',
		c5: 'Variables',
		c6: 'Operators in Python',
		c7: 'Control Flow',
		c8: 'Pandas',
		c9: 'Numpy',
		c10:'Functions in Python',
		c11:'OOPS in Python',
		c12:'Python Exceptions',
		c13:'Python Modules',
		c14:'Constructors in Python',
		c15:'Destructors in Python',
		c16:'Garbage Collector'
	},
	ds: {
		c1: 'Arrays',
		c2: 'Linked Lists',
		c3: 'Stacks',
		c4: 'Queue',
		c5: 'Binary Trees',
		c6: 'Binary Search Tree',
		c7: 'Heaps',
		c8: 'Hashing',
		c9: 'Graphs',
		c10:'Matrices',
		c11:'Trie',
		c12:'Red-Black Tree' ,
		c13:'B-Tree',
		c14:'AVL Tree',
		c15:'Circular Linked List',
		c16:'Doubly Linked List'
	},
	algos: {
		c1: 'Analysis of Algorithms',
		c2: 'Time Complexity Cases',
		c3: 'Asymptotic Notations',
		c4: 'omega notations',
		c5: 'Analysis of Loops',
		c6: 'Solving Recurrences',
		c7: 'Amortized Analysis',
		c8: 'Space Complexity',
		c9: 'Pseudo-polynomial Algorithms',
		c10:'NP-Completeness Introduction',
		c11:'Polynomial Time Approximation Scheme',
		c12:'A Time Complexity Question',
		c13:'Time Complexity of building a heap',
		c14:'Time Complexity of loop variable',
		c15:'Time Complexity of Loop with Powers',
		c16:'Performance of loops A caching question'
	},
	dbms: {
		c1: 'Introduction',
		c2: 'ER Model',
		c3: 'Relational Model',
		c4: 'CODD Rules',
		c5: 'DBMS Relational Algebra',
		c6: 'Functional Dependencies',
		c7: 'Normalisation',
		c8: 'ACID Properties',
		c9: 'Deadlock in DBMS',
		c10:'Indexing',
		c11:'B-Tree',
		c12:'B+ Tree',
		c13:'File Organization',
		c14:'RAID',
		c15:'SQL Basics',
		c16:'SQL Datatypes'
	}
}

export default class StudyMatCards extends Component {
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
			bgColor           : '#f6f5f3',
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
	    	<ScrollView contentContainerStyle={{flexGrow: 1}}>
		        <View style={ {alignItems   : "center",flexDirection: "row",flexWrap     : 'wrap',}}>
					
					<CardViewWithImage
				        width={ screenWidth}				        
				        title={ getCardData[this.props.data].c1 }
				        titleFontSize={17}
				        imageWidth={ imgHeightandWidth }
				        imageHeight={ imgHeightandWidth }
				        onPress={() => Actions.webViewItem({ data: getCardData[this.props.data].c1, title: getCardData[this.props.data].c1 })}
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
				        onPress={() => Actions.webViewItem({ data: getCardData[this.props.data].c2, title: getCardData[this.props.data].c2 })}
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
				        onPress={() => Actions.webViewItem({ data: getCardData[this.props.data].c3, title: getCardData[this.props.data].c3 })}
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
				        onPress={() => Actions.webViewItem({ data: getCardData[this.props.data].c4, title: getCardData[this.props.data].c4 })}
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
				        onPress={() => Actions.webViewItem({ data: getCardData[this.props.data].c5, title: getCardData[this.props.data].c5 })}
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
				        onPress={() => Actions.webViewItem({ data: getCardData[this.props.data].c6, title: getCardData[this.props.data].c6 })}
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
				        onPress={() => Actions.webViewItem({ data: getCardData[this.props.data].c7, title: getCardData[this.props.data].c7 })}
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
				        onPress={() => Actions.webViewItem({ data: getCardData[this.props.data].c8, title: getCardData[this.props.data].c8 })}
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
				        onPress={() => Actions.webViewItem({ data: getCardData[this.props.data].c9, title: getCardData[this.props.data].c9 })}
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
				        onPress={() => Actions.webViewItem({ data: getCardData[this.props.data].c10, title: getCardData[this.props.data].c10 })}
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
				        onPress={() => Actions.webViewItem({ data: getCardData[this.props.data].c11, title: getCardData[this.props.data].c11 })}
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
				        onPress={() => Actions.webViewItem({ data: getCardData[this.props.data].c12, title: getCardData[this.props.data].c12 })}
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
				        onPress={() => Actions.webViewItem({ data: getCardData[this.props.data].c13, title: getCardData[this.props.data].c13 })}
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
				        onPress={() => Actions.webViewItem({ data: getCardData[this.props.data].c14, title: getCardData[this.props.data].c14})}
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
				        onPress={() => Actions.webViewItem({ data: getCardData[this.props.data].c15, title: getCardData[this.props.data].c15 })}
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
				        onPress={() => Actions.webViewItem({ data: getCardData[this.props.data].c16, title: getCardData[this.props.data].c16})}
				        roundedImage={ false }
				        roundedImageValue={ 50 }
				        style={ miniCardStyle }
				        imageMargin={ {top: 5} }
				    />
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
		paddingTop     : 13,
		},
});
	