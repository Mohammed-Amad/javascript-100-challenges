// Challenge 71: Check If an Object is an Array
console.log("Challenge 71");

function isArray71(value71) {
  return Array.isArray(value71);
}


console.log(isArray71([1, 2, 3])); 
console.log(isArray71({ name: "Mohammed" }));
console.log(isArray71("Hello")); 

// Challenge 72: Empty an Array
console.log("Challenge 72");

function emptyArray72(arr72) {
arr72.length = 0; 
  return arr72;
}


const numbers72 = [1, 2, 3, 4, 5];
console.log(emptyArray72(numbers72));
console.log(numbers72);

// Challenge 73: Add Element to Start of an Array
console.log("Challenge 73");

let arr73 = [2, 3, 4];
arr73.unshift(1); 
// another solution
// arr73 = [1,...arr73]
console.log(arr73);

// Challenge 74: Remove Duplicates from an Array
console.log("Challenge 74");

function removeDuplicates(arr74) {
  return [...new Set(arr74)];
}
// another solution 
// function removeDuplicates(arr74) {
//   return arr74.filter((item, index) => arr74.indexOf(item) === index);
// }

const numbers74 = [1, 2, 3, 2, 4, 1, 5, 3];
console.log(removeDuplicates(numbers74)); 


// Challenge 75: Merge Two Arrays and Remove Duplicate Items
console.log("Challenge 75");

function mergeAndRemoveDuplicates(arr75_1, arr75_2) {
  return [...new Set([...arr75_1, ...arr75_2])];
}
// another solution 
// function mergeAndRemoveDuplicates(arr75_1, arr75_2) {
//   const merged = arr75_1.concat(arr75_2);
//   return merged.filter((item, index) => merged.indexOf(item) === index);
// }

const arr75_1 = [1, 2, 3, 4];
const arr75_2 = [3, 4, 5, 6];
console.log(mergeAndRemoveDuplicates(arr75_1, arr75_2)); 

// Challenge 76: Sort Array of Objects by Property Values
console.log("Challenge 76");

const people76 = [
  { name: "Mohammed", age: 21 },
  { name: "Ali", age: 20 },
  { name: "Omar", age: 19 }
];


const byAge = [...people76].sort((a, b) => a.age - b.age);
console.log("sort by age ")
console.log( byAge); 


const byName = [...people76].sort((a, b) => a.name.localeCompare(b.name));
console.log("sort by name ")
console.log( byName); 


// Challenge 77: Create Two Dimensional Array
console.log("Challenge 77");

const matrix77 = [];

for (let i = 0; i < 3; i++) {      
  matrix77[i] = [];
  for (let j = 0; j < 3; j++) {     
    matrix77[i][j] = i + j;         
}
}
console.log(matrix77);

// Challenge 78: Extract Given Property Values from Objects as Array
console.log("Challenge 78");

const people78 = [
  { name: "Mohammed", age: 21 },
  { name: "Ali", age: 20 },
  { name: "Omar", age: 19 }
];

function extractProperty(arr78, prop78) {
  return arr78.map(obj => obj[prop78]);
}

console.log(extractProperty(people78, "name")); 
console.log(extractProperty(people78, "age"));  

// Challenge 79: Compare Elements of Two Arrays
console.log("Challenge 79");

function checkArraysEquality(arr79_1, arr79_2) {
  if (arr79_1.length !== arr79_2.length) return false; 

  for (let i = 0; i < arr79_1.length; i++) {
    if (arr79_1[i] !== arr79_2[i]) {
      return false; 
    }
  }
  return true; 
}


console.log(checkArraysEquality([1, 2, 3], [1, 2, 3])); 
console.log(checkArraysEquality([1, 2, 3], [1, 3, 2])); 
console.log(checkArraysEquality([1, 2], [1, 2, 3]));    

// Challenge 80: Get Random Item from an Array
console.log("Challenge 80");

const names80 = ["mohammed" ,"ali" , "waleed"];

const randomName = names80[Math.floor(Math.random() * names80.length)];

console.log( randomName);


