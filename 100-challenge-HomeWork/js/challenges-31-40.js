// Challenge 31 : Convert Decimal to Binary
console.log("Challenge 31");

const decimalToBinary = (num31) => {
  if (num31 < 0) return "Please enter a non-negative integer";
  return num31.toString(2); 
}
console.log(decimalToBinary(10));


// challenge 32 : Find ASCII Value of Character
console.log("Challenge 32");

const getAsciiValue = (char) => {
  if (char.length !== 1) {
    return "Please enter exactly one character.";
  }
  return char.charCodeAt(0);
};
console.log(getAsciiValue("A"));
console.log(getAsciiValue("c"));

// challenge 33 : Check Whether a String is Palindrome
console.log("Challenge 33");

const isPalindrome = (str33) => {
  const cleaned = str33.toLowerCase().replace(/[\W_]/g, "");
  
  return cleaned === cleaned.split("").reverse().join("");
};

console.log(isPalindrome("racecar"));     
console.log(isPalindrome("Hello"));         
console.log(isPalindrome("A man, a plan, a canal: Panama"));

// challenge 34 : Sort Words in Alphabetical Order
console.log("Challenge 34");

const sortWords = (sentence34) => sentence34.toLowerCase().split(" ").sort().join(" ");


console.log(sortWords("mohammed and waleed is working "));

// challenge 35 : Replace Characters in a String
console.log("Challenge 35");

const replaceCharacter = (str35, oldChar35, newChar35) => {
  return str35.replaceAll(oldChar35, newChar35);
};

console.log(replaceCharacter("mohammed", "e", "a"));

// challenge 36 : Reverse a String
console.log("Challenge 36");

function reverseString(str36) {
  let reversed36 = "";
  for (let i = str36.length - 1; i >= 0; i--) {
    reversed36 += str36[i];
  }
  return reversed36;
}

console.log(reverseString("Hello World"));
console.log(reverseString("12345"));

//Challenge 37 : Create Objects in Different Ways 
console.log("Challenge 37");

const personLiteral = {
  name: "Alice",
  age: 25,
  greet: function () {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
};
personLiteral.greet();


function PersonConstructor(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  };
}
const personFromConstructor = new PersonConstructor("Bob", 30);
personFromConstructor.greet();

const personPrototype = {
  greet: function () {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
};
const personFromCreate = Object.create(personPrototype);
personFromCreate.name = "Charlie";
personFromCreate.age = 35;
personFromCreate.greet();

// Challenge 38 : Count the Occurrences of a Character in a String
console.log("Challenge 38");

function countCharacterOccurrences(str38, char38) {
  let count = 0;

    str38 = str38.toLowerCase();
  char38 = char38.toLowerCase();
  for (let i = 0; i < str38.length; i++) {
    if (str38[i] === char38) {
      count++;
    }
  }

  return count;
}


console.log(countCharacterOccurrences("mohammed amad", "m")); 
console.log(countCharacterOccurrences("Hello World", "L")); 

// Challenge 39 : Convert First Letter of a String to Uppercase 
console.log("Challenge 39");

function capitalizeFirstLetter(str39) {
  if (!str39) return "There is no character to capitalize"; 
  return str39.charAt(0).toUpperCase() + str39.slice(1);
}

console.log(capitalizeFirstLetter("javaScript"));
console.log(capitalizeFirstLetter("")); 

// Challenge 40 : Count the Number of Vowels in a String
console.log("Challenge 40");

function countVowels(str40) {
  if (!str40) return "The string is empty.";
  
  const vowels = "aeoui";
  let count = 0;

  for (let char of str40.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("MohAmmed"));   
console.log(countVowels(""));         
