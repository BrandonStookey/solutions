//=======================================Warm Ups
// What do we use arrays for? Discuss the purpose of arrays with your partner until you are both confident that you can explain why this construct is useful.

//=====> Arrays are used to store a collection of data; often of the same type. 
	//This construct is useful because we can access data in an array through indexes. 
function squareNumbers(array){
	var result = [];

	for(var i = 0; i < array.length; i++){
		result.push(array[i] * array[i]);
	}
	return result;
}

function addArrays(arr1, arr2){
	var length = 0;
	var result = [];

	if(arr1.length < arr2.length){
		length = arr2.length;
	} else{
		length = arr1.length;
	}

	for(var i = 0; i < length; i++){
		console.log(arr1[i])
		if(arr1[i] !== undefined && arr2[i] !== undefined){
			result.push(arr1[i] + arr2[i])
		} else if(arr1[i] === undefined){
			result.push(arr2[i]);
		} else if(arr2 === undefined){
			result.push(arr1[i])
		}
	}
	return result;
}

console.log('addArrays: ', addArrays([1,2,3], [4,3,2,1])); // => [5,5,5,1]


//=========================================Exercises 

var aboutMe = {
	name: {	
				first: 'Brandon', 
				middle: 'William',
				last: 'Stookey'
				},
	age: 30,
	hometown: 'Hammond',
	favoriteTvShow: 'Flash',
	DoB: 'Jan 16, 1986',
	Pets: 'Dog'
}
console.log('aboutMe: ', aboutMe.name.first)

var objMe = {
	first: 'Brandon',
	middle: 'William',
	last: 'Stookey'
}

var favoriteMovie = {
	title: 'Inception',
	director: 'Christopher Nolan',
	year: 2010,
	actors: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Ellen Page']
}

var key = 'name';
var person = {
    name: 'Alyssa P. Hacker',
    age: 26,
    hometown: 'somewhere'
};
person['age']; // => 26
person[key]; // => 'Alyssa P. Hacker'
person['hometown'] // => 'somewhere'

var people = [
	{name: {first: "Brandon", middle: "William", last: "Stookey"}, age: 30},
  {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
  {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
  {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
  {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
  {name: {first: "Louis", last: "Reasoner"}, age: 21}
];

function formatName(obj){
	return obj.name.first + " " + obj.name.middle + " " + obj.name.last;
}


function arrayOfNames(array){
	var result = [];
	for(var i = 0; i < array.length; i++){
		result.push(formatName(array[i]));
	}
	return result; 
}

console.log('arrayOfNames: ', arrayOfNames(people));

function averageAge(array){
	var result = 0;

	for(var i = 0; i < array.length; i++){
		result = result + array[i].age;
	}
	result = result / array.length;
	return result;
}

function findAge(array, age){
	var result = [];

	for(var i = 0; i < array.length; i++){
		if(array[i].age > age){
			result.push(array[i].name.first + ' ' + array[i].name.last);
		}
	}
	return result;
}

var dirtyObject = {
  _fht: 192492,
  name: "Alyssa P. Hacker",
  age: 26,
  _byz: 939205,
  _ttrs: 510852
}

function clean(obj) {
	var newObj = {};
  for(var key in obj){
  	if('n' !== '_'){
  		newObj['name'] = obj['name'];
  	}
  }
  return newObj;
}

var objNumbers = {
	example1: 2,
	example2: 3,
	example3: 'Bob',
	example4: '()#&)',
	example5: 7,
	example6: 9,
	exmaple7: 8
}


function removeOddValues(obj) {
	var newObj = {};
	for(var key in obj){
		if(obj[key] % 2 === 0){
			newObj[key] = obj[key];
		}
	}
	return newObj;
}

function countWords(str){
	var objResult = {};
	str = str.split(' ');

	for(var i = 0; i < str.length; i++){
		var key = str[i].toLowerCase();
		if(!objResult[key]){
			objResult[key] = 1;
		} else {
			objResult[key] = objResult[key] + 1;
		}
	}
	return objResult;
}

function countCharacters(str){
	var objResult = {};
	str = str.split('');

	for(var i = 0; i < str.length; i++){
		var key = str[i].toLowerCase();
		if(!objResult[key] && key !== ' '){
			objResult[key] = 1;
		} else if (key !== ' ') {
			objResult[key] = objResult[key] + 1;
		}
	}
	return objResult;
}

function select(obj, keys) {
  var objResult = {};

  for(var i = 0; i < keys.length; i++){
  	var key = keys[i];
  	if(!objResult[key]){
  		if(obj[key] !== undefined){
	  		objResult[key] = obj[key];
	  	}	
  	}
  }
  return objResult;
}

function extend(obj1, obj2) {
	for(var key in obj2){
		obj1[key] = obj2[key];
	}
	return obj1;
}

//==================================================Advance
//Object.keys;

function objectKeysExtend(obj1, obj2) {
	if(typeof obj1 !== 'object' && obj1 !== null){
		return obj1;
	} else if (typeof obj2 !== 'object' && obj2 !== null){
		return obj2;
	}

	var objKeys1 = Object.keys(obj1);
	var objKeys2 = Object.keys(obj2);
	var allObjKeys = objKeys1.concat(objKeys2);
	var objValue = [];
	var result = {};

	for(var key in obj1){
		objValue.push(obj1[key]);
	}

	for(var key in obj2){
		objValue.push(obj2[key]);
	}

	for(var i = 0; i < allObjKeys.length; i++){
		result[objectKeysExtend(allObjKeys[i], null)] = objectKeysExtend(null, objValue[i]);
	}
	return result;
}

var stringifyJSON = function(obj) {
	if(Array.isArray(obj)){
	  	var results = [];
	  	
	  	for(var i = 0; i < obj.length; i++){
	  	};

	  	return '[' + results + ']';
  	};
  	
	if(obj && typeof obj === 'object'){
		var valuesArray = [];
		var keysArray;
		var results = [];

		for(var key in obj){
			valuesArray.push(obj[key]);
		};
			
		keysArray = Object.keys(obj);

		for(var i = 0; i < keysArray.length; i++){
			if(valuesArray[i] === undefined || typeof valuesArray[i] === 'function') {
	    		return '{' + '}';
	  		};
			if(typeof valuesArray[i] !== 'number'){
				results.push(stringifyJSON(keysArray[i]) + ':' + stringifyJSON(valuesArray[i]));
			} else{
				results.push(stringifyJSON(keysArray[i]) + ':' + valuesArray[i]);
			}
		}	
		return '{' + results + '}'
	
	};	

	if(typeof obj === 'string'){
		return obj =  '"' + obj + '"';
	};
	
	return '' + obj;
};





