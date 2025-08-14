// challenge 11 : Check If a Number is Odd or Even
console.log("Challenge 11");

const checkOddEven = (num11) => (num11 % 2 === 0 ? `${num11} is an even number ` : `${num11} is an odd number `);

console.log(checkOddEven(6));  
console.log(checkOddEven(9));                                                                                                                                  
console.log(checkOddEven(0));  

// challenge 12 : Find the Largest Among Three Numbers
console.log("Challenge 12");
const maxOfThree = (num12_1, num12_2, num12_3) => {
  let max12 = num12_1;
  if (num12_2 > max12) max12 = num12_2;
  if (num12_3 > max12) max12 = num12_3;
  return max12;
};
//  this is an alternative solution using Math.max
// const maxOfThree = (num12_1, num12_2, num12_3) => Math.max(num12_1, num12_2, num12_3);

console.log(maxOfThree(6, 9, -4));   
console.log(maxOfThree(-28, -7, 4)); 

// challenge 13 : Check If a Number is Prime
console.log("Challenge 13");

const isPrime = (num13) => {
  if (num13 < 2) return false;
  for (let i = 2; i <= Math.sqrt(num13); i++) {
    if (num13 % i === 0) return false;
  }
  return true;
};

console.log(isPrime(2));
console.log(isPrime(18));  

// challenge 14 : Print All Prime Numbers in an Interval 
console.log("Challenge 14");

const printPrimesInRange = (num14_1, num14_2) => {
  let start = Math.min(num14_1, num14_2);
  let end = Math.max(num14_1, num14_2);

  if (end < 2) {
    console.log("No prime numbers in the range.");
    return;
  }

  if (start < 2) {
    console.log("Note: Prime numbers start from number 2.");
    start = 2;
  }

  for (let i = start; i <= end; i++) {
    let prime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        prime = false;
        break;
      }
    }
    if (prime) console.log(i);
  }
};
printPrimesInRange(10, 30);
printPrimesInRange(-5, 10);
printPrimesInRange(30, 10);
printPrimesInRange(-3, 1);
// challenge 15 : Find the Factorial of a Number
console.log("Challenge 15");

const getFactorial = (num15) => {
  if (num15 < 0) return "Factorial is not defined for negative numbers.";
  if (num15 === 0) return 1; 

  let fact = 1;
  for (let i = 1; i <= num15; i++) {
    fact *= i;
  }
  return fact;
};
console.log(getFactorial(0))
console.log(getFactorial(5))
console.log(getFactorial(-2))

// challenge 16 : Display the Multiplication Table
console.log("Challenge 16");

const displayMultiplicationTable = (num16) => {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num16} * ${i} = ${num16 * i}`);
  }
};
displayMultiplicationTable(5)
displayMultiplicationTable(2)

// challenge 17 : Print Fibonacci Sequence 
console.log("Challenge 17");

const fib = (num17) => {
  if (num17 === 1) return 0; 
  if (num17 === 2) return 1; 
  return fib(num17 - 1) + fib(num17 - 2);
};

const printFibonacci = (count, current = 1) => {
  if (count <= 0) {
    console.log("Please enter a positive integer.");
    return;
  }
  if (current <= count) {
    console.log(fib(current));
    printFibonacci(count, current + 1);
  }
};

printFibonacci(1)
printFibonacci(2)
printFibonacci(7)

// challenge 18 : Check Armstrong Number (using ** instead of Math.pow)
console.log("Challenge 18");

const isArmstrong = (num18) => {
  let temp = num18;
  let digitsCount = 0;


  while (temp > 0) {
    digitsCount++;
    temp = Math.floor(temp / 10);
  }

  temp = num18;
  let sum = 0;
  while (temp > 0) {
    const digit = temp % 10;
    sum += digit ** digitsCount;
    temp = Math.floor(temp / 10);
  }

  return sum === num18;
};


console.log(isArmstrong(153));  
console.log(isArmstrong(123));  
console.log(isArmstrong(9474)); 

// challenge 19 : Find Armstrong Numbers in an Interval
console.log("Challenge 19");
const printArmstrongInRange = (start19, end19) => {
  let min19 = Math.min(start19, end19);
  let max19 = Math.max(start19, end19);

  if (max19 < 0) {
    console.log("No Armstrong numbers in the range.");
    return;
  }

  if (min19 < 0) min19 = 0;

  for (let i = min19; i <= max19; i++) {
    if (isArmstrong(i)) {
      console.log(i);
    }
  }
};
printArmstrongInRange (1, 500)

// challenge 20 : Create a Simple Calculator
console.log("Challenge 20");

const calculator = (num20_1, operator, num20_2) => {
  switch (operator) {
    case "+":
      return num20_1 + num20_2;
    case "-":
      return num20_1 - num20_2;
    case "*":
      return num20_1 * num20_2;
    case "/":
      return num20_2 !== 0 ? num20_1 / num20_2 : " Division by zero cant be done ";
    default:
      return " Invalid operator";
  }
};


console.log(calculator(6, "+", 9)); 
console.log(calculator(6, "-", 9)); 
console.log(calculator(6, "*", 9)); 
console.log(calculator(6, "/", 9)); 
console.log(calculator(5, "/", 0)); 

