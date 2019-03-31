import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

let getCorrectURI = {
	'Overview': 'https://www.geeksforgeeks.org/java-how-to-start-learning-java/',
	'Packages': 'https://www.geeksforgeeks.org/packages-in-java/',
	'Basics': 'https://www.geeksforgeeks.org/java-identifiers/',
	'Collections': 'https://www.geeksforgeeks.org/collections-in-java-2/',
	'OOPS concepts': 'https://www.geeksforgeeks.org/classes-objects-java/',
	'Multithreading': 'https://www.geeksforgeeks.org/multithreading-in-java/',
	'Operators': 'https://www.geeksforgeeks.org/operators-in-java/',
	'File Handling': 'https://www.geeksforgeeks.org/file-class-in-java/',
}


export default class WebViewItem extends Component {
	constructor(props) {
		super(props);
		console.log("props", props);
	}

	render() {
		return (
			<WebView
				source={{uri: getCorrectURI[this.props.data]}}
			/>
		);
	}
}