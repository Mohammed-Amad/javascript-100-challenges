// Challenge 61 : Display Date and Time
console.log("Challenge 61");
console.log(new Date().toString());

// Challenge 62 : Check Leap Year
console.log("Challenge 62");
function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0))
  {
            console.log(year + ' is a leap year');
  }
  else console.log(year + ' is not a leap year');
}
isLeapYear(2004); 
isLeapYear(1999); 

// Challenge 63 : Format the Date 
console.log("Challenge 63");
function formatDate(date) {
  const d = new Date(date);
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  const yyyy = d.getFullYear();
  return `${mm}/${dd}/${yyyy}`;
}
console.log(formatDate(new Date()));
console.log(formatDate("2004-9-07"));


// Challenge 64 : Display Current Date
console.log("Challenge 64");
const today64 = new Date();
console.log(today64.toLocaleDateString("en-CA")); 

// Challenge 65: Compare the Value of Two Dates
console.log("Challenge 65");

function compareDates(date1, date2) {
  const d1 = new Date(date1);
  const d2 = new Date(date2);

  if (d1.getTime() === d2.getTime()) {
    return "Dates are equal";
  } else if (d1 < d2) {
    return "First date is before the second date";
  } else {
    return "First date is after the second date";
  }
}


console.log(compareDates("2025-08-13", "2025-08-13")); 
console.log(compareDates("2025-08-10", "2025-08-13")); 
console.log(compareDates("2025-08-15", "2025-08-13")); 

// Challenge 66: Create a Countdown Timer
console.log("Challenge 66");

function countdown(seconds) {
  let remaining = seconds;

  const timer = setInterval(() => {
    console.log(`Time left: ${remaining} seconds`);
    remaining--;

    if (remaining < 0) {
      clearInterval(timer);
      console.log("Countdown finished!");
    }
  }, 1000);
}


countdown(5);

// Challenge 67: Remove Specific Item from an Array
console.log("Challenge 67");
function removeItemFromArray(arr67, itemToRemove67) {
  return arr67.filter(element => element.toLowerCase() !== itemToRemove67.toLowerCase()
  );
}



const names67 = ["Mohammed", "Waleed", "Ali", "Omar"];
console.log(removeItemFromArray(names67, "omar")); 
console.log(removeItemFromArray(names67, "ALI"))

// Challenge 68: Check if an Array Contains a Specified Value
console.log("Challenge 68");

function containsValue(arr68, value68) {
  let found = false;
  arr68.forEach(item => {
    if (item.toLowerCase() === value68.toLowerCase()) {
      found = true;
    }
  });
  return found;
}

const names68 = ["Mohammed", "Waleed", "Ali", "Omar"];
console.log(containsValue(names68, "omar")); 
console.log(containsValue(names68, "hi"));  


// Challenge 69: Insert Item in an Array (using splice)
console.log("Challenge 69");

function insertItemAtIndexAlt(arr69, index69, item69) {
  arr69.splice(index69, 0, item69); 
  return arr69;
}


const numbers69 = [10, 20, 30, 40];
console.log(insertItemAtIndexAlt(numbers69, 2, 25)); 


// Challenge 70: Append an Object to an Array
console.log("Challenge 70");

function appendObjectToArray(arr70, obj70) {
  arr70.push(obj70);
  return arr70;
}


const names70 = [
  { name: "Mohammed", age: 21 },
  { name: "Waleed", age: 22 }
];

console.log(appendObjectToArray(names70, { name: "Ali", age: 21 }));




