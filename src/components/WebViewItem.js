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
	'Java Garbage Collector': 'https://www.geeksforgeeks.org/garbage-collection-java/',
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
	'Virtual Functions': 'https://www.geeksforgeeks.org/virtual-functions-and-runtime-polymorphisms-in-c-set-1-introduction/',
	'------------------------------Python':'Lang----------------------------------------------',
	'Python Basics': 'https://www.geeksforgeeks.org/python-language-introduction/',
	'Keywords in Python': 'https://www.geeksforgeeks.org/keywords-python-set-1/',
	'I/O in Python': 'https://www.geeksforgeeks.org/taking-input-in-python/',
	'Python Data Types': 'https://www.geeksforgeeks.org/python-set-3-strings-lists-tuples-iterations/',
	'Variables': 'https://www.geeksforgeeks.org/python-set-2-variables-expressions-conditions-and-functions/',
	'Operators in Python': 'https://www.geeksforgeeks.org/basic-operators-python/',
	'Control Flow': 'https://www.geeksforgeeks.org/loops-in-python/',
	'Pandas': 'https://www.geeksforgeeks.org/python-pandas-dataframe/',
	'Numpy': 'https://www.geeksforgeeks.org/python-numpy/',
	'Functions in Python': 'https://www.geeksforgeeks.org/functions-in-python/',
	'OOPS in Python': 'https://www.geeksforgeeks.org/object-oriented-programming-in-python-set-1-class-and-its-members/',
	'Python Exceptions': 'https://www.geeksforgeeks.org/python-set-5-exception-handling/',
	'Python Modules': 'https://www.geeksforgeeks.org/python-modules/',
	'Constructors in Python': 'https://www.geeksforgeeks.org/constructors-in-python/',
	'Destructors in Python': 'https://www.geeksforgeeks.org/destructors-in-python/',
	'Garbage Collector': 'https://www.geeksforgeeks.org/garbage-collection-python/',
	'------------------------------Data':'Structures----------------------------------------------',
	'Arrays': 'https://www.geeksforgeeks.org/array-data-structure/',
	'Linked Lists': 'https://www.geeksforgeeks.org/data-structures/linked-list/',
	'Stacks': 'https://www.geeksforgeeks.org/stack-data-structure/',
	'Queue': 'https://www.geeksforgeeks.org/queue-data-structure/',
	'Binary Trees': 'https://www.geeksforgeeks.org/binary-tree-data-structure/',
	'Binary Search Tree': 'https://www.geeksforgeeks.org/binary-search-tree-data-structure/',
	'Heaps': 'https://www.geeksforgeeks.org/heap-data-structure/',
	'Hashing': 'https://www.geeksforgeeks.org/hashing-data-structure/',
	'Graphs': 'https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/',
	'Matrices': 'https://www.geeksforgeeks.org/matrix/',
	'Trie': 'https://www.geeksforgeeks.org/trie-insert-and-search/',
	'Red-Black Tree': 'https://www.geeksforgeeks.org/red-black-tree-set-1-introduction-2/',
	'B-Tree': 'https://www.geeksforgeeks.org/b-tree-set-1-introduction-2/',
	'AVL Tree': 'https://www.geeksforgeeks.org/avl-tree-set-1-insertion/',
	'Circular Linked List': 'https://www.geeksforgeeks.org/circular-linked-list/',
	'Doubly Linked List': 'https://www.geeksforgeeks.org/doubly-linked-list/',
'--------------------------------Algos':'Lang--------------------------------------',
	'Analysis of Algorithms': 'https://www.geeksforgeeks.org/analysis-of-algorithms-set-1-asymptotic-analysis/',
	'Time Complexity Cases': 'https://www.geeksforgeeks.org/analysis-of-algorithms-set-2-asymptotic-analysis/',
	'Asymptotic Notations': 'https://www.geeksforgeeks.org/analysis-of-algorithms-set-3asymptotic-notations/',
	'omega notations': 'https://www.geeksforgeeks.org/analysis-of-algorithems-little-o-and-little-omega-notations/',
	'Analysis of Loops': 'https://www.geeksforgeeks.org/analysis-of-algorithms-set-4-analysis-of-loops/',
	'Solving Recurrences': 'https://www.geeksforgeeks.org/analysis-algorithm-set-4-master-method-solving-recurrences/',
	'Amortized Analysis': 'https://www.geeksforgeeks.org/analysis-algorithm-set-5-amortized-analysis-introduction/',
	'Space Complexity': 'https://www.geeksforgeeks.org/g-fact-86/',
	'Pseudo-polynomial Algorithms': 'https://www.geeksforgeeks.org/pseudo-polynomial-in-algorithms/',
	'NP-Completeness Introduction': 'https://www.geeksforgeeks.org/np-completeness-set-1/',
	'Polynomial Time Approximation Scheme': 'https://www.geeksforgeeks.org/polynomial-time-approximation-scheme/',
	'A Time Complexity Question': 'https://www.geeksforgeeks.org/a-time-complexity-question/',
	'Time Complexity of building a heap': 'https://www.geeksforgeeks.org/time-complexity-of-building-a-heap/',
	'Time Complexity of loop variable': 'https://www.geeksforgeeks.org/time-complexity-where-loop-variable-is-incremented-by-1-2-3-4/',
	'Time Complexity of Loop with Powers': 'https://www.geeksforgeeks.org/time-complexity-of-loop-with-powers/',
	'Performance of loops A caching question': 'https://www.geeksforgeeks.org/performance-of-loops-a-caching-question/',








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