//===================================Warm Ups!

// 1. Write a function sayHello that takes a language parameter, and returns "hello" in that language. Make the function work with at least three languages.

function sayHello(language){
	if (language === 'Spanish'){
		return 'Hola!';
	} else if( language === 'English'){
		return 'Hello!';
	} else if(language === 'French'){
		return 'Bonjour!'
	} else {
		return 'Error. Error. I do not know that language!';
	}
}	

// 2. Write a function validCredentials that accepts two parameters: username and password, and returns true if both are long enough, and false otherwise. You can decide what constitutes "long enough".

function validCredentials(username, password){
	if(username.length >= 5 && password.length >= 5){
		return 'Your Username and Password is long enough!';
	} else {
		return 'Your password and username must be five characters or more buddy!';
	}
}

//=====================================================Exercises for First 
// Basic Requirements
// Summation to n: Let's implement the function sum that 
// takes a single parameter n, and computes the sum of all 
// integers up to n starting from 0, e.g.:
​
function sum(n) {
  if (n === 0) {
  	return 0;
  }
  return n + sum(n - 1);
​
}
​
// HINT: We can rephrase "the sum of n" as "n plus the sum of 
// - 1".
​
// Factorial of n: The factorial of n is the product of all 
// the integers preceding n, starting with 1, e.g.:
​
function factorial(n) {
  if (n < 1) {
  	return 1;
  }
  return n * factorial(n-1);
}
​
​
// Implement the factorial function by observing that the 
// "factorial of n" can be rephrased as "n times the 
// factorial of n - 1".
​
// Repeating a String n Times: Let's write a function called 
// repeatString that takes two parameters: a string str, 
// which is the string to be repeated, and count -- 
// a number representing how many times the string str should 
// be repeated, e.g.
​
function repeatString(str, count) {
  if (count === 0) {
  	return '';
  }
  return str + repeatString(str,count -1);
}
​
​
// Your task is to implement the repeatString function using 
// the observation that to repeat a string some count, we can 
// concatenate that string onto the result of repeating the 
// string count - 1.
​
// HINT: Observe that repeatString('dog', 0) should yield 
// the empty string, ''. What happens if you evaluate 
// this: '' + 'dog'?
​
// Compute the nth Fibonacci Number: The fibonacci numbers 
// are represented by the following sequence:
​
// fib(n): 1 1 2 3 5 8 13 21
//         | | | | | |  |  |
//      n: 0 1 2 3 4 5  6  7
​
// That is, fib(0) is 1, fib(1) is 1, fib(2) is 2, fib(3) 
// is 3, fib(4) is 5, etc.
​
// Notice that each fibonacci number can be computed by 
// adding the previous two fibonacci numbers, with the 
// exception of the first two: fib(0) and fib(1). More 
// succinctly,
​
// fib(0) is 1
// fib(1) is 1
// fib(n) is fib(n - 1) + fib(n - 2)
​
// Write a function called fib that accepts a number n 
// as a parameter and computes the nth fibonacci number 
// using the above rules.
​
function fib(n) {
	if (n < 2) {
		return 1;
	}
	return fib(n-1) + fib(n-2);
}
​
​
​
// More Practice
​
// Modify your sum function from the Basic Requirements 
// section to accept two parameters, start and end: 
// sum should now compute the sum of the numbers from start 
// to end, e.g.
​
function sum(start, end) {
  if (start === end) {
  	return start;
  }
  return start + sum(start +1, end);
}
								
function sum1(start, end) {
	if (start > end) {
		return sum1(end, start);
	} else if (start === end) {
		return start;
	}
	return start + sum1(start + 1, end);
}
​
// What happens if start is larger than end? Modify sum to 
// check for this case and, when found, swap the start and 
// end arguments.
​
// Write a function product that works like sum, except 
// it should compute the product of the numbers from start 
// to end.
​
function product(start, end) {
  if (start > end) {
  	return 1;
  }
  return start * product(start +1, end);
}
​
// Refactor your factorial function from earlier to be 
// implemented in terms of product.
​
// Let's pretend for a moment that JavaScript does not have 
// the addition operator + -- instead, it comes with two 
// functions called inc and dec that perform increment and 
// decrement respectively:
​
// ignore the fact that inc makes use of +
​
function inc(x) {
  return x + 1;
}
​
function dec(x) {
  return x - 1;
}
​
function add(x,y){
	if (y === 1) {
		return inc(x);
	}
	return add(inc(x), dec(y));
}
​
​
​
// Your task is to write a function called add that takes 
// two numbers as parameters, x and y, and adds them 
// together. The catch is that you can only use inc and dec 
// to accomplish this.
​
// Write a function called isEven that, given a number n as 
// a parameter, returns true if that number is even, and 
// false otherwise; however, you need to do this without 
// using the % operator.
​
function isEven(num) {
	if (num === 2) {
		return true;
	} else if (num === 1){
		return false;
	}
	return isEven(num -2);
}
​
​
// Write a function called multiply that accepts two numbers 
// as parameters, and multiplies them together -- but without 
// using the * operator; instead, you'll need to use 
// repeated addition.
​
function multiplyWithAddition(x,y) {
	if (y === 0) {
		return 0;
	}
​
	return x + multiplyWithAddition(x, y -1);
}
// Advanced
​
// By now you should have worked with the length property 
// of strings, e.g. "hello".length. Your task is to write 
// a function called stringLength that accepts a string as 
// a parameter and computes the length of that string; 
// however, as you may have guessed, you are not allowed 
// to use the length property of the string!
​
// Instead, you'll need to make use of the string method 
// called slice. To get an idea of how slice works, try the 
// following at a console:
​
// "hello".slice(0);
// "hello".slice(1);
// "".slice(1);
​
// For our purposes, we can consider slice as taking one 
// argument -- the index to begin slicing from, and returns 
// a new string starting from that index onwards.
​
// Indices are positions of characters within strings, and 
// they always begin counting from 0, e.g.:
​
// "h e l l o" (spaces added for clarity)
//  | | | | |
//  0 1 2 3 4
​
// The "h" character has index (position) 0 in the string 
// "hello", "e" has index 1, l has index 2, etc.
​
function stringLength(str) {
	if (str.slice(1) === "") {
		return 1;
	}
	return 1 + stringLength(str.slice(1));
}
​
​
// The "modulo" operator (%) computes the remainder after 
// dividing its left operand by its right one, e.g.
​
// 5 % 2; // => 1
// 8 % 10; // => 8
// 7 % 5; // => 2
​
// Write a function called modulo that works like the % 
// operator, but without using it.
​
function modulo(x,y) {
	if (x < y){
		return x;
	}
	return modulo(x-y, y);
}
​
// Write a function called countChars that accepts two 
// parameters: a string and a character. This function 
// should return a number representing the number of times 
// that the character appears in string. To access the 
// first element of a string, you can use the following 
// syntax:
​
function countChars(str, letter) {
	if (str.slice(1) === "") {
		return 0;
	} else if( str.slice(0,1) === letter) {
		return 1 + countChars(str.slice(1), letter);
	}
	return countChars(str.slice(1), letter);
}
​
​
​
// access the element at index 0
​
// "hello"[0]; // => "h"
// "dog"[0]; // => "d"
// HINT: You'll also need to make use of the slice 
// method as shown above in the exercise on computing 
// the length of a string.
​
// Implement a function called indexOf that accepts two 
// paramters: a string and a character, and returns the 
// first index of character in the string. You'll need to 
// make use of the techniques for accessing the first 
// element of a string and the rest of the string (slice) 
// as before.
​
function indexOf(str, char, index) {
	
	if (str.slice(0,1) === char) {
		return index;
	} else if (str.slice(0,1) === "") {
		return "Not here" ;
	} else {
			return  indexOf(str.slice(1), char, index +1);
		}
}
​
​
​
// The power function in the lecture works, but can be made 
// considerably faster through a method known as successive 
// squaring.
​
// To get an idea of how this works, observe that:
​
// 2^4=(2^2)^2
// 2^7=2(2^3)^2
// 2^8=(2^4)^2
// Modify the power function to take advantage of this 
// technique.
function powerSquaring (x, n){
	if(n === 1){
		return x;
	}
	if(n % 2 === 0){
		return powerSquaring(x * x, n/2);
	} else{
		return x * powerSquaring(x * x, (n - 1)/ 2);
	}
}
	