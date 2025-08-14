// Challenge 81 : Perform Intersection Between Two Arrays
console.log("Challenge 81");

function intersection81(arr81_1, arr81_2) {
  const result = [];
  for (let i = 0; i < arr81_1.length; i++) {
    if (arr81_2.includes(arr81_1[i]) && !result.includes(arr81_1[i])) {
      result.push(arr81_1[i]); 
    }
  }
  return result;
}


const arrayA = [1, 2, 3, 4, 5];
const arrayB = [3, 4, 5, 6, 7];

console.log(intersection81(arrayA, arrayB)); 

// Challenge 82 : Split Array into Smaller Chunks
console.log("Challenge 82");

function splitArrayintoChunks(arr82, size82) {
  const result = [];
  for (let i = 0; i < arr82.length; i += size82) {
    result.push(arr82.slice(i, i + size82));
  }
  return result;
}


const nums82 = [1, 2, 3, 4, 5, 6, 7];
console.log(splitArrayintoChunks(nums82, 3));

// Challenge 83 : Include a JS File in Another JS File
console.log("Challenge 83");

import greet from './greet.js';

greet("Mohammed");

// Challenge 84: Get File Extension
console.log("Challenge 84");

function getFileExtension(filename84) {
  return filename84.split('.').pop();
}


console.log(getFileExtension("document.pdf"));  
console.log(getFileExtension("image.jpeg"));
console.log(getFileExtension("greet.js"));  
console.log(getFileExtension("hi.html"));      




// Challenge 85: Check if a Variable is Undefined or Null
console.log("Challenge 85");

let value85; 


if (value85 === undefined) {
  console.log("The variable is undefined");
} else if (value85 === null) {
  console.log("The variable is null");
} else {
  console.log(`The variable has a value : ${value85}`);
}

// Challenge 86: Set a Default Parameter Value for a Function
console.log("Challenge 86");

function greet86(name = "Guest") {
  console.log(`Hello, ${name}`);
}


greet86("Mohammed"); 
greet86();



// Challenge 87: Illustrate Different Set Operations
console.log("Challenge 87");

const set87_1 = new Set([1, 2, 3, 4]);
const set87_2 = new Set([3, 4, 5, 6]);

const setsUnion87  = set87_1.union(set87_2);                  
const setsintersection87  = set87_1.intersection(set87_2);         
const setsdifference87  = set87_1.difference(set87_2);               

console.log("union" ,[...setsUnion87])
console.log("intersection",[...setsintersection87]);
console.log("difference",[...setsdifference87]);

// Challenge 88: Generate a Random Number Between Two Numbers
console.log("Challenge 88");

function getRandomBetween(min, max) {
  return Math.random() * (max - min + Number.EPSILON) + min;
}


console.log(getRandomBetween(1, 10)); 
console.log(getRandomBetween(5, 15)); 

/* 
// this is another solution for integer values
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt(1, 10)); 
console.log(getRandomInt(5, 15)); 
*/

// Challenge 89: Get the Current URL
console.log("Challenge 89");

const currentURL = window.location.href;
console.log("Current URL:", currentURL);


// Challenge 90: Validate an Email Address
console.log("Challenge 90");

function validateEmail(email90) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email90);
}

console.log(validateEmail("test@example.com"));  
console.log(validateEmail("invalid-email"));     
