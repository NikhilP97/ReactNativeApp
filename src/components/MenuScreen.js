import React, {Component} from 'react';
import { 
	StyleSheet,
	Dimensions,
	View
} from 'react-native';
import { CardViewWithIcon } from 'react-native-simple-card-view';
import {Actions, ActionConst} from 'react-native-router-flux';
import BackgroundView from './BackgroundView'

export default class MenuScreen extends Component {
	render(){
		const miniCardStyle = {
			shadowColor       : '#000000',
			shadowOffsetWidth : 2,
			shadowOffsetHeight: 2,
			shadowOpacity     : 0.1,
			hadowRadius       : 5,
			bgColor           : '#fff',
			padding           : 5,
			margin            : 10,
			borderRadius      : 3,
			elevation         : 3,
			width             : (Dimensions.get("window").width / 2) - 30
    	};
	    return (
	    	<BackgroundView>
	    	<View style={ styles.container }>
		        <View style={ {alignItems   : "center",flexDirection: "row",flexWrap     : 'wrap',}}>
					<CardViewWithIcon
					withBackground={ false }
					androidIcon={ 'logo-github' }
					iosIcon={ 'logo-github' }
					iconHeight={ 30 }
					iconColor={ '#333' }
					title={ 'GITHUB' }
					contentFontSize={ 10 }
					titleFontSize={ 12 }
					style={ miniCardStyle }
					onPress={ () => Actions.quizStartScreen()}
					/>
					<CardViewWithIcon
					withBackground={ false }
					androidIcon={ 'logo-youtube' }
					iosIcon={ 'logo-youtube' }
					iconHeight={ 30 }
					iconColor={ '#ff0000' }
					title={ 'YOUTUBE' }
					contentFontSize={ 10 }
					titleFontSize={ 12 }
					style={ miniCardStyle }
					onPress={ () => Actions.quizStartScreen()}
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
	