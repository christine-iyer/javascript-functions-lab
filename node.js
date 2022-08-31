
// Define a function, as a function declaration, multiplyArraythat takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]);would return 40.
// Define a function, as a function expression, numArgsthat returns the number of arguments passed to the function when called.
// Define a function, as a function declaration, reverseStringthat takes a string, reverses the characters, and returns it. For example, reverseString('rockstar');would return the string "ratskcor".
// Define a function, as a function expression, longestStringInArraythat takes an array of strings as an argument and returns the length of the longest string.
// Define a function, as a function declaration, stringsLongerThanthat takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);would return ["hello", "morning"].

// 1. (completed above) Define a function, as a function declaration, maxOfTwoNumbers,
// that takes two numbers as arguments and returns the largest of them. If they are 
// the same, return that number. Use the if-else construct or a ternary expression - 
// the Math.max method is not allowed.
function maxOfTwoNumbers(x, y) {
	if (x >= y) {
		console.log(x)
	} else (console.log(y))
}

console.log(maxOfTwoNumbers(4, 5))

// 2. Define a function, as a function expression, maxOfThree that takes three numbers 
// as arguments and returns the largest of them. Again, the Math.max method 
// is not allowed.
const maxOfThree = (x, y, z) => {
	if ((x >= y) && (x >= z)) {
		return (x);
	} else if ((y >= x) && (y >= z)) {
		return (y)
	} else {
		return (z)
	}
}
console.log(maxOfThree(4, 5, 6))

function maxOfThreeB(a, b, c) {
	if ((a >= b) && (a >= c)) {
		return a;
	} else if ((b >= a) && (b >= c)) {
		return b;
	} else {
		return c;
	}
}

console.log(maxOfThreeB(343, 18, 42));

//   3. Define a function, as a function declaration, isCharAVowelthat takes a character 
//   as an argument and returns true if it is a vowel, false otherwise.
function isCharAVowel(letter){
	let vowels = ["a","e","i","o","u"]
	letter = letter.toLowerCase();
	for (i = 0; i<=vowels.length;i++){
		if (letter != vowels[i]){
			continue;
		}
		return true;
		}
		return false;
	}
	console.log(isCharAVowel("j"));

// 4. Define a function, as a function expression, 
// sumArray that takes an array of numbers and returns 
// the sum of those numbers. For example, 
// sumArray([2, 4, 5]);would return 11.
let arr1 = [2,4,5];
const initialValue = 0;
const sumArray = (array)=> {
	let total = 0;
	for (let i = 0;i<array.length;i++) {
		total+=arr1[i];
	}
console.log(total);
}
console.log(sumArray(arr1));

// 5. Define a function, as a function declaration, multiplyArray
// that takes an array of numbers and returns the product those 
// numbers. 
// For example, multiplyArray([2, 4, 5]);would return 40.
function multiplyArray(array){
	let product = 1;
	for (let i = 0;i<array.length;i++){
	product *= array[i];
	}
	console.log(product);
}
console.log(multiplyArray(arr1));

// 6. Define a function, as a function expression, numArgs
// that returns the number of arguments passed to the 
// function when called.
const numArgs = (a, b, c, d,e,f,h) => {
	for (var i=0;i<arguments.length;i++) {
	    console.log(arguments[i]);
	}
 }
 
 console.log(numArgs.length)

//  7. Define a function, as a function declaration, reverseString, 
//  that takes a string, reverses the characters, and returns it. 
//  For example, reverseString('rockstar');would return the string 
//  "ratskcor".
function reverseString(string) {
	let reversedString = string.split('')
	reversedString.reverse();
	return reversedString;
}
console.log(reverseString("gsfdk"));

// Define a function, as a function expression, 
// longestStringInArray that takes an array of strings 
// as an argument and returns the length of the longest string.

// const longestStringInArray = (arr) => {
// 	// var lgth = 0;
// 	// var longest =1;
	
// 	for (let i = 0; i < arr.length; i++) {
// 		let lgth = 0;
// 		let longest = 1;

// 	  if (arr[i].length > lgth) {
// 		lgth = arr[i].length;
// 		longest = arr[i];
// 	  }
// 	}

// }

// var arr  = ["a","fast","fastest"]


   

   
//    console.log(longest);
   


// console.log(longestStringInArray(arr));