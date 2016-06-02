//========================Warm Ups Self Challenge

function billTotal (total){
  var tip = .15;
  var tax = .095; 

  tip = total * tip;
  tax = total * tax;
  total = Math.round((tip + tax + total) * 100) / 100;
  return "Your total comes to " + total;
}

console.log('billTotal: ', billTotal(25))

function animals (animal, emotion){
  if (animal ==='cat' && emotion === 'happy'){
    return 'The cat dances with joy!';
  } else if (animal ==='cat' && emotion === 'sad'){
    return 'The cat mopes around';
  } else if (animal ==='cat' && emotion === 'angry') {
    return 'The cat shreds your favorite pair of shoes!';
  }

  if(animal ==='dog' && emotion === 'happy'){
    return 'The dog licks your face!';
  } else if (animal ==='dog' && emotion === 'sad'){
    return 'The dog gives you sad puppy eyes';
  } else if(animal ==='dog' && emotion === 'angry'){
    return 'The dog barks really loud!';
  }
}

function digitalSum(num){
  if(num === 0){
    return num;
  }
  return (num % 10) + digitalSum(Math.floor(num / 10))
}


//=================================================Exercises 
var arr = [1,2,3,4,5];

function first(array){
	return array[0];
}

function last(array){
	return array[array.length - 1];
}

function nth (arr, index){
	return arr[index];
}

function rest(arr){
	return arr.slice(1, arr.length);
}

function butLast(arr){
	return arr.slice(0, arr.length - 1);
}

//cons will always insert x in the beginning of the array
function cons(array, x) {
  array.unshift(x);
  return array;
}

//conj will always push x to the end of the array
function conj(array, x){
  array.push(x);
  return array;
}

function mystery(array) {
  if (array.length === 0) {
    return [];
  }
  return conj([], first(array));
}

console.log('mystery: ', mystery([1,2,3,4,5]));

//mystery(rest(array)) is shortening our array by one index from the front  of the array on each iteration
  //Call stack
  //[5] <==== Last in first out
  //[4,5]
  //[3,4,5]
  //[2,3,4,5]
  //[1,2,3,4,5] <===== First in last out
//mystery() is doing the recurisve call
//once the length of array is less than 0 it will exit the recursive call and return an empty array 
  // so now we have conj([], first(array));
  //it will then look at our call stack
  //conj([], first(array)) will be invoked on each number in our call stack
  //effectively pushing each new number in the array
  //sinc we start with 5 it gets pushed in
  //then 4 gets pushed after and so forth
  //until we end up with [5,4,3,2,1]




function mysteryAdd(array) {
	var total = 0;
  if (array.length === 0) {
    return 0;
  }
  return first(array) + mysteryAdd(rest(array));
}

console.log('mysteryAdd: ', mysteryAdd([1,2,3,4]));

function mysterySquared(array) {
  if (array.length === 0) {
    return [];
  }
  return cons(mysterySquared(rest(array)), first(array) * first(array));
}

console.log('mysterySquared: ', mysterySquared([2, 3, 4]))

function mysteryEven(array) {
  if (array.length === 0) {
    return [];
  }
  if(array[0] % 2 === 0){
	  return cons(mysteryEven(rest(array)), first(array));
	}
	return mysteryEven(rest(array));
}

console.log('mysteryEven: ', mysteryEven([1,2,3,4]));

