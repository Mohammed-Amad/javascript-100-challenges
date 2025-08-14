// Challenge 41 : Remove a Property from an Object
console.log("Challenge 41");

function removeProperty(obj, prop) {
  if (Object.keys(obj).length === 0) {
    return "The object has no properties";
  }

  if (obj.hasOwnProperty(prop)) {
    delete obj[prop];
    return obj;
  } else {
    return `Property ${prop} does not exist in this object`;
  }
}


const student = { name: "Mohammed", age: 21, grade: "A" };
console.log(removeProperty(student, "age")); 
console.log(removeProperty(student, "work"));
console.log(removeProperty(student, "grade"));

// Challenge 42 : Check Whether a String Starts and Ends with Certain Characters
console.log("Challenge 42");

function startsAndEndsWith(str42, startChar, endChar) {
  
  if (!str42) return "The string is empty";

  if (!startChar || !endChar) {
    return "Both start and end characters must be provided";
  }

   str42 = str42.toLowerCase();
  startChar = startChar.toLowerCase();
  endChar = endChar.toLowerCase();

  return str42.startsWith(startChar) && str42.endsWith(endChar);
}


console.log(startsAndEndsWith("JavaScript", "J", "t"));
console.log(startsAndEndsWith("Mohammed", "m", "D")); 
console.log(startsAndEndsWith("Mohammed", "M", "")); 
console.log(startsAndEndsWith("", "H", "o")); 

// Challenge 43 : Check If a Key Exists in an Object
console.log("Challenge 43");

function keyExists(obj43, key) {
  if (typeof obj43 !== "object" || obj43 === null) {
    return "Invalid object";
  }
  if (Object.keys(obj43).length === 0) {
    return "The object has no properties";
  }

  return obj43.hasOwnProperty(key);
}


const myObj43 = { name: "Mohammed", gender: "Male" };

console.log(keyExists(myObj43, "name")); 
console.log(keyExists(myObj43, "age")); 
console.log(keyExists({}, "name"));
console.log(keyExists(null, "name"));



// Challenge 44 : Clone a JavaScript Object
console.log("Challenge 44");


const objToClone = {
  name: "Mohammed",
  age: 25,
  skills: ["JS", "HTML", "CSS" , "Tailwind" ,"Bootstrap"]
};

const clone1 = { ...objToClone };


const clone2 = {}
Object.assign(clone2, objToClone);


const clone3 = JSON.parse(JSON.stringify(objToClone));

console.log("the main obj", objToClone);
console.log(clone1);
console.log( clone2);
console.log( clone3);

// Challenge 45 : Loop Through an Object
console.log("Challenge 45");

const myObject45 = {
  name: "Mohammed",
  age: 21,
  skills: ["JS", "HTML", "CSS", "Tailwind", "Bootstrap"]
};


for (let key in myObject45) {
  if (myObject45.hasOwnProperty(key)) { 
    console.log(`${key}: ${myObject45[key]}`);
  }
}

// Challenge 46 : Merge Properties of Two Objects
console.log("Challenge 46");

function mergingObjects(obj1, obj2) {
  return { ...obj1, ...obj2 }; 
}

const object46_1 = { name: "Mohammed", age: 21 };
const object46_2 = { skills: ["JS", "HTML", "CSS"], country: "Palestine" };

const mergedObject = mergingObjects(object46_1, object46_2);

console.log(mergedObject);

// Challenge 47 : Count the Number of Keys/Properties in an Object
console.log("Challenge 47");

function countKeys(obj) {
  return Object.keys(obj).length;
}


const obj47 = {
  name: "Mohammed",
  age: 21,
  skills: ["JS", "HTML", "CSS"],
  country: "Palestine"
};

/* function countKeys(obj) {
   let count = 0;
   for (let key in obj) {
     if (obj.hasOwnProperty(key)) { 
       count++;
     }
   }
   return count;
 } */

console.log(countKeys(obj47)); 

// Challenge 48: Add Key/Value Pair to an Object
console.log("Challenge 48");

function addKeyValue(obj, key, value) {
  obj[key] = value; 
  return obj;
}
/* 

function addKeyValue(obj, key, value) {
  return Object.assign(obj, { [key]: value });
}
*/

const exampleObj48 = { name: "Mohammed", age: 21 };

console.log(addKeyValue(exampleObj48, "country", "Palestine")); 


// Challenge 49: Replace All Occurrences of a String
console.log("Challenge 49");


function replaceAllOccurrences(str, replace, replaceWith) {
    return str.toLowerCase().replaceAll(replace.toLowerCase(), replaceWith);
}



const text49 = "im mohammed amad , im 21 years old , and i love JavaScript , and love to work in JavaScript";
console.log(replaceAllOccurrences(text49, "javaScript", "JS"));



// Challenge 50: Create Multiline Strings
console.log("Challenge 50");

const multilineString = `
Hello, my name is Mohammed
I am 21 years old
I love JavaScript and enjoy learning new technologies
`;

console.log(multilineString);

