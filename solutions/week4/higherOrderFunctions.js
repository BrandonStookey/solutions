var numsArray = [1,2,3,4,5,6,7,8,9,10];
​
​
//EACH
function each(coll, f){
	if(Array.isArray(coll)){
		for(var i = 0; i < coll.length; i++){
			f(coll[i], i);
    }
	}else{
		for(var key in coll){
			f(coll[key], key);
    }
  }
}
​
//MAP
function map(coll, f){
	var acc = [];
	if(!Array.isArray(coll))
		acc = {};
	each(coll, function(number, key){
		acc[key] = f(number, key);
	});
	return acc;
}
​
//FILTER Filter is taking an array and pushing out any elements
// that are true because of the predicate function
 //predicate is testing whether element true....if true function continues
 // if not the fuction does not continue
//
function filter(coll, predicate){
		var acc = [];
each(coll, function(number, key){
		if(predicate(number,key)){
				acc.push(number);
			}
	});
	return acc;
}
​
​
function doubleNumbersWithEvenIndex(array) {
	var result = filter(array, function(number,i){
		return i % 2  === 0;
	});
	return map(result, function(number){
		return number * 2;
	});
}
​
var people = [
  {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
  {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
  {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 13},
  {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
  {name: {first: "Louis", last: "Reasoner"}, age: 19}
];
​
function under21(coll) {
  return filter(coll, function(element,i){
	 return element.age < 21;
 });
}
​
//REDUCE
function reduce(arr, f, acc){
	if(acc === undefined){
		acc = arr[0];
		arr = arr.slice(1);
	}
	each(arr, function(element, i){
		acc = f(acc, element, i);
	});
	return acc;
}
​
function sumOfEvenIndexOnly(array) {
	return reduce(array, function(total,element,i){
		return total + (i%2 === 0 ?element: 0);
	}, 0);
}
​
function reduce(array, f, start){
	var acc = start;
	each(array, function(element){
		acc = f(acc, element);
	});
	return acc;
}
​
function everyEvenNumber(arr){
	return reduce(arr, function(result, element){
		return result && element % 2  === 0;
	},true);
}
​
var arr1 = [1,2,3];
var arr2 = [4,5,6];
​
function arrayBuilder (arr1,arr2){
	return reduce(arr2, function(total,element){
	 arr1.push(element);
		return total;
	},arr1);
}
​
//SOME
function some(array, predicate) {
	var acc = false;
	each(array, function(num, i){
		if(predicate(num)){
		 acc = true;
		}
	});
	return acc;
}
​
function isaNumberEven(array){
	return some(array, function(num){
		return num % 2 === 0;
	});
}
​
​
function every(array, predicate){
	var acc = true;
	each(array, function(num){
		if(!predicate(num)){
			acc = false;
		}
	});
	return acc;
}
​
	function isEveryNumberEven(array){
		return every(array, function(num){
			return num % 2 === 0;
		});
	}
​
​
//REJECT
function reject(array, func) {
	return filter(array, function(element){
		return!predicate(element);
	});
​
}
​
function allEvenNumbersReject(array) {
	return reject(array, function(num){
		return num % 2 === 0;
	});
}
​
// allEvenNumberReject(numsArray);