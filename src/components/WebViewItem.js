import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

let getCorrectURI = {
	'Overview': 'https://www.geeksforgeeks.org/java-how-to-start-learning-java/',
	'Packages': 'https://www.geeksforgeeks.org/packages-in-java/',
	'Java Basics': 'https://www.geeksforgeeks.org/java-identifiers/',
	'Collections': 'https://www.geeksforgeeks.org/collections-in-java-2/',
	'OOPS concepts': 'https://www.geeksforgeeks.org/classes-objects-java/',
	'Multithreading': 'https://www.geeksforgeeks.org/multithreading-in-java/',
	'Java Operators': 'https://www.geeksforgeeks.org/operators-in-java/',
	'Exceptions': 'https://www.geeksforgeeks.org/exceptions-in-java/',
	'Java Strings': 'https://www.geeksforgeeks.org/how-to-initialize-and-compare-strings-in-java/',
	'Garbage Collector': 'https://www.geeksforgeeks.org/garbage-collection-java/',
	'Wrapper Classes': 'https://www.geeksforgeeks.org/wrapper-classes-java/',
	'Important Keywords': 'https://www.geeksforgeeks.org/important-keywords-java/',
	'Methods': 'https://www.geeksforgeeks.org/methods-in-java/',
	'Constructors': 'https://www.geeksforgeeks.org/constructors-in-java/',
	'Interfaces': 'https://www.geeksforgeeks.org/interfaces-in-java/',
	'Abstract Classes': 'https://www.geeksforgeeks.org/abstract-classes-in-java/',
	'-------------------------------------C':'Lang----------------------------------',
	'C Basics': 'https://www.geeksforgeeks.org/c-language-set-1-introduction/',
	'C Functions': 'https://www.geeksforgeeks.org/functions-in-c/',
	'Variables & Keywords': 'https://www.geeksforgeeks.org/variables-and-keywords-in-c/',
	'Pointers': 'https://www.geeksforgeeks.org/pointers-in-c-and-c-set-1-introduction-arithmetic-and-array/',
	'Data Types': 'https://www.geeksforgeeks.org/data-types-in-c/',
	'Storage Classes': 'https://www.geeksforgeeks.org/storage-classes-in-c/',
	'Enumerations': 'https://www.geeksforgeeks.org/enumeration-enum-c/',
	'Structures': 'https://www.geeksforgeeks.org/structures-c/',
	'Union': 'https://www.geeksforgeeks.org/union-c/',
	'Memory Layout': 'https://www.geeksforgeeks.org/memory-layout-of-c-program/',
	'File Handling': 'https://www.geeksforgeeks.org/basics-file-handling-c/',
	'Operators in C': 'https://www.geeksforgeeks.org/operators-in-c-set-1-arithmetic-operators/',
	'Arrays in C': 'https://www.geeksforgeeks.org/arrays-in-c-cpp/',
	'Strings in C': 'https://www.geeksforgeeks.org/strings-in-c-2/',
	'Multithreading in C': 'https://www.geeksforgeeks.org/multithreading-c-2/',
	'Macros vs Functions': 'https://www.geeksforgeeks.org/macros-vs-functions/',
	'--------------------------------C++':'Lang--------------------------------------',
	'C++ Basics': 'https://www.geeksforgeeks.org/fine-write-void-main-cc/',
	'Strings in C++': 'https://www.geeksforgeeks.org/c-string-class-and-its-applications/',
	'Pointers in C++': 'https://www.geeksforgeeks.org/pointers-in-c-and-c-set-1-introduction-arithmetic-and-array/',
	'OOPS in C++': 'https://www.geeksforgeeks.org/basic-concepts-of-object-oriented-programming-using-c/',
	'STL Library': 'https://www.geeksforgeeks.org/the-c-standard-template-library-stl/',
	'Vectors': 'https://www.geeksforgeeks.org/vector-in-cpp-stl/',
	'C++ vs Java': 'https://www.geeksforgeeks.org/similarities-between-java-and-c/',
	'C vs C++': 'https://www.geeksforgeeks.org/difference-c-structures-c-structures/',
	'Dynamic Memory': 'https://www.geeksforgeeks.org/new-and-delete-operators-in-cpp-for-dynamic-memory/',
	'Function Overloading': 'https://www.geeksforgeeks.org/function-overloading-c/',
	'Operator Overloading': 'https://www.geeksforgeeks.org/operator-overloading-c/',
	'Inheritance in C++': 'https://www.geeksforgeeks.org/g-fact-4/',
	'Constructors in C++': 'https://www.geeksforgeeks.org/constructors-c/',
	'Destructors in C++': 'https://www.geeksforgeeks.org/destructors-c/',
	'Exception Handling': 'https://www.geeksforgeeks.org/exception-handling-c/',
	'Virtual Functions': 'https://www.geeksforgeeks.org/virtual-functions-and-runtime-polymorphisms-in-c-set-1-introduction/'







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