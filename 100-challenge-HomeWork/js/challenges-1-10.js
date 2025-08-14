// challenge 1 : Print "Hello, World!"
console.log("Challenge 1")
console.log("Hello, World!")
// challenge 2 : Add Two Numbers 
console.log("Challenge 2")
const sum = (num1,num2)=> num1 + num2
console.log(sum(6,9))
// challenges 3 : Calculate Square Root
console.log("Challenge 3")
const squareRoot = (num3) => {
     if (num3 < 0) return 'the input value should be  >=0';
  return Math.sqrt(num3)
}
console.log(squareRoot(16))
console.log(squareRoot(-1))
// challenges 4 : Calculate the Area of a Triangle 
console.log("Challenge 4")
const triangleArea = (base, height) => 0.5 * base * height;
console.log(triangleArea(6,3))
console.log(triangleArea(4,4))
// challenges 5 : Swap Two Variables
console.log("Challenge 5")
/* 
//this is using es6 but its not working in vscode
let swapnum1 = 6 , swapnum2 = 9;
console.log (`before swap first variable ${swapnum1} second  variable ${swapnum2}`)
[swapnum1, swapnum2] = [swapnum2, swapnum1]
console.log (`after swap first variable ${swapnum1} second  variable ${swapnum2}`)  */ 

let swapnum1 = 6 , swapnum2 = 9;
console.log (`before swap first variable ${swapnum1} second  variable ${swapnum2}`)
swapnum1 = swapnum1 + swapnum2;
swapnum2 = swapnum1 - swapnum2; 
swapnum1 = swapnum1 - swapnum2; 
console.log (`after swap first variable ${swapnum1} second  variable ${swapnum2}`)  
// challenge 6 : Solve a Quadratic Equation
console.log("Challenge 6");

const solveQuadratic = (a, b, c) => {
  const d = b*b - 4*a*c; 
  if (d > 0) {
    return [(-b + Math.sqrt(d)) / (2*a), (-b - Math.sqrt(d)) / (2*a)];
  } else if (d === 0) {
    return [-b / (2*a)];
  } else {
    const m = -b / (2*a);
    const z = Math.sqrt(-d) / (2*a);
    return [`${m} + ${z}i`, `${m} - ${z}i`];
  }
};
console.log(solveQuadratic(1, -3, 2)); 
console.log(solveQuadratic(1, 2, 1));  
console.log(solveQuadratic(1, 0, 1)); 
// challenge 7 : Convert Kilometers to Miles
console.log("Challenge 7");

const convertkmToMiles = (km) => km * 0.621371;

console.log(convertkmToMiles(1));   
console.log(convertkmToMiles(10));  
// challenge 8 : Convert Celsius to Fahrenheit
console.log("Challenge 8");

const cToF = (tempIncelsius) => (tempIncelsius * 9/5) + 32;

console.log(cToF(0));    
console.log(cToF(36));   
// challenge 9 : Generate a Random Number
console.log("Challenge 9");

const generateRandom = () => Math.floor(Math.random() * 100) + 1; 
console.log(generateRandom())
console.log(generateRandom())
console.log(generateRandom())
// challenge 10 : Check If a Number is Positive, Negative, or Zero
console.log("Challenge 10");

const checkNumber = (num10) => {
  if (num10 > 0) return ` ${num10} Is Positive`;
  else if (num10 < 0) return `${num10} Is Negative`;
  else return "Zero";
};

console.log(checkNumber(5));   
console.log(checkNumber(0));  
console.log(checkNumber(-8));  

