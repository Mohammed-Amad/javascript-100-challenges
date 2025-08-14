// Challenge 91 : Check if a Variable is a Function 
console.log("Challenge 91");

function isFunction(var91) {
  return typeof var91 === "function";
}


console.log(isFunction(function(){})); 
console.log(isFunction(123));   

// Challenges 92 : Work With Constants 
console.log("Challenge 92");

const PI = 3.14;
console.log (PI)

// Challenge 93 : Pass Parameter to a setTimeout() Function


function greet93(name) {
    console.log("Challenge 93");
  console.log(`Hello, ${name}`);
}

setTimeout(greet93, 2000, "Mohammed"); 
// Challenges 94 : Generate a Range of Numbers and Characters 
console.log("Challenge 94");


function rangeNumbers(start94, end94) {
  const arr = [];
  for (let i = start94; i <= end94; i++) arr.push(i);
  return arr;
}


function rangeChars(startChar94, endChar94) {
  const arr = [];
  for (let i = startChar94.charCodeAt(0); i <= endChar94.charCodeAt(0); i++) {
    arr.push(String.fromCharCode(i));
  }
  return arr;
}

console.log(rangeNumbers(6, 9));       
console.log(rangeChars("m", "z"));     

// Challenge 95 : Perform Function Overloading
console.log("Challenge 95 - Any number of arguments");

function addNumbers95(...args) {
  if (args.length === 0) return "No arguments Found";
  
  const sum = args.reduce((total, num) => total + num, 0);
  return `The sum of ${args.length} numbers is ${sum}`;
}


console.log(addNumbers95(2, 3));         
console.log(addNumbers95());        
console.log(addNumbers95(1, 2, 3, 4, 5));  

// Challenge 96: Implement a Stack
console.log("Challenge 96");

class Stack96 {
  constructor() {
    this.items = [];
  }


  push(element) {
    this.items.push(element);
  }


  pop() {
    if (this.items.length === 0) return "Stack is empty";
    return this.items.pop();
  }

 
  peek() {
    if (this.items.length === 0) return "Stack is empty";
    return this.items[this.items.length - 1];
  }
}


const stack96 = new Stack96();
stack96.push(10);
stack96.push(20);
stack96.push(30);

console.log(stack96.peek()); 
console.log(stack96.pop());  
console.log(stack96.peek()); 
console.log(stack96)

// Challenge 97: Implement a Queue
console.log("Challenge 97");

class Queue97 {
  constructor() {
    this.items = [];
  }


  enqueue(element) {
    this.items.push(element);
  }


  dequeue() {
    if (this.items.length === 0) return "Queue is empty";
    return this.items.shift();
  }


  peek() {
    if (this.items.length === 0) return "Queue is empty";
    return this.items[0];
  }
}


const queue97 = new Queue97();
queue97.enqueue(10);
queue97.enqueue(20);
queue97.enqueue(30);

console.log(queue97.peek());   
console.log(queue97.dequeue()); 
console.log(queue97.peek());  
console.log(queue97)

// Challenge 98: Check if a Number is Float or Integer
console.log("Challenge 98");

function checkNumberType98(num98) {
  if (typeof num98 !== "number" || isNaN(num98)) {
    return `${num98} is not a valid number`;
  }

  if (Number.isInteger(num98)) {
    return `${num98} is an Integer`;
  } else {
    return `${num98} is a Float`;
  }
}


console.log(checkNumberType98(5));        
console.log(checkNumberType98(5.5));      
console.log(checkNumberType98("hello"));  
console.log(checkNumberType98(NaN));      


// Challenge 99: Pass a Function as a Parameter
console.log("Challenge 99");

function greet99(getNameFunction) {
  const name = getNameFunction(); 
  console.log(`Hi, ${name}`);
}

function getRandomName99() {
  const names = ["Mohammed", "Ali", "Omar", "Lina"];
  const randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex];
}


greet99(getRandomName99);


// Challenge 100: Get the Dimensions of an Image
console.log("Challenge 100");


const img100 = document.querySelector("img");

if (img100) {

  console.log(`Rendered Width: ${img100.width}px`);
  console.log(`Rendered Height: ${img100.height}px`);


  console.log(`Natural Width: ${img100.naturalWidth}px`);
  console.log(`Natural Height: ${img100.naturalHeight}px`);
} else {
  console.log("No image found on the page.");
}
