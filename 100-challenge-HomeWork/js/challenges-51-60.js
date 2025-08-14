// Challenge 51: Format Numbers as Currency Strings
console.log("Challenge 51");

function formatCurrency(amount, currencyCode = "USD", locale = "en-US") {
  return amount.toLocaleString(locale, {
    style: "currency",
    currency: currencyCode
  });
}

console.log(formatCurrency(1500));
console.log(formatCurrency(1500, "EUR", "de-DE")); 
console.log(formatCurrency(1500, "GBP", "en-GB")); 
console.log(formatCurrency(1500, "JPY", "ja-JP"));
console.log(formatCurrency(1500, "ILS", "he-IL")); 


// Challenge 52: Generate a Random String
console.log("Challenge 52");

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateRandomString(length) {
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

console.log(generateRandomString(8)); 
console.log(generateRandomString(12));


// Challenge 53: Check If a String Starts with Another String
console.log("Challenge 53");

function startsWithSubstring(str35, subStr) {
  return str35.toLowerCase().startsWith(subStr.toLowerCase());
}


console.log(startsWithSubstring("Mohammed Amad", "mohammed"));
console.log(startsWithSubstring("Mohammed Amad", "amad")); 

// Challenge 54: Trim a String
console.log("Challenge 54");

let str54 = "   Hello World!   ";
console.log(str54.trim()); 

// Challenge 55: Convert Objects to Strings
console.log("Challenge 55");

function convertingObjectToString(obj55) {
  return JSON.stringify(obj55);
}


const myObject55 = {
  name: "Mohammed",
  age: 21,
  skills: ["JS", "HTML", "CSS"]
};
console.log(myObject55); 
console.log(convertingObjectToString(myObject55)); 

// Challenge 56 : Check Whether a String Contains a Substring 
console.log("Challenge 56");

function containsSubstring(str56, subStr56) {
  return str56.toLowerCase().includes(subStr56.toLowerCase());
}

console.log(containsSubstring("Mohammed Amad", "amad")); 
console.log(containsSubstring("Mohammed Amad", "ali")); 

// Challenge 57: Compare Two Strings
console.log("Challenge 57");

function areStringsEqual(str57_1, str57_2) {
  return str57_1 === str57_2;
}

console.log(areStringsEqual("Mohammed", "Mohammed")); 
console.log(areStringsEqual("Mohammed", "mohammed")); 


// Challenge 58 : Encode a String to Base64

console.log("Challenge 58");

function encodeBase64(str58) {
  return btoa(str58);
}

console.log(encodeBase64("Mohammed Amad"));


// Challenge 59 : Replace All Instances of a Character in a String


console.log("Challenge 59");

function replaceCharacter(str59, charToReplace59, replacement59) {
  return str59.toLowerCase().replaceAll(charToReplace59.toLowerCase(), replacement59);
}

console.log(replaceCharacter("Mohammed", "e", "a")); 

// Challenge 60 : Replace All Line Breaks with <br>
console.log("Challenge 60");

function replaceLineBreaks(str60) {
  return str60.replaceAll("\n", "<br>");
}
// another solution 
/*function replaceLineBreaks(str60) {
  return str60.replace(/(\r\n|\r|\n)/g, '<br>');
}*/
const text60 = "Hello \n , \n Hi \n I am Mohammed Amad \nAnd im working \n in js\n challenges ";
console.log(replaceLineBreaks(text60));
