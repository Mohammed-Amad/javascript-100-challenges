// challenge 21 : Find the Sum of Natural Numbers
console.log("Challenge 21");

const sumOfNaturalNumbers = (num21) => {
  if (num21 < 1) return "the number should be >= 1";
  let sum21 = 0;
  for (let i = 1; i <= num21; i++) {
    sum21 += i;
  }
  return sum21;
};
console.log(sumOfNaturalNumbers(6))
console.log(sumOfNaturalNumbers(9))
// challenge 22 : Check If Two Numbers Have Same Last Digit
console.log("Challenge 22");

const sameLastDigit = (num22_1, num22_2) => {
  return (Math.abs(num22_1) % 10) === (Math.abs(num22_2) % 10);
};
console.log(sameLastDigit(64,94))
console.log(sameLastDigit(89.9,89.89))

// Challenge 23 : Find HCF (Greatest Common Divisor)
console.log("Challenge 23");

function greatestCommonDivisor(num23_1, num23_2) {
    let min23 = Math.min(num23_1, num23_2);
    let hcf = 1;

    for (let i = 1; i <= min23; i++) {
        if (num23_1 % i === 0 && num23_2 % i === 0) {
            hcf = i;
        }
    }

    return hcf;
}
console.log(greatestCommonDivisor(12,24))
console.log(greatestCommonDivisor(18,48))

// Challenge 24 : Find LCM (Least Common Multiple) 
console.log("Challenge 24");

function leastCommonMultiple(num24_1, num24_2) {
    let lcm = (num24_1 * num24_2) / greatestCommonDivisor(num24_1, num24_2)
    return lcm ;
}
console.log(leastCommonMultiple(8, 20));

// Challenge 25 : Find the Factors of a Number 
console.log("Challenge 25");

function findFactors(num25) {
    const factors = [];
    for (let i = 1; i <= num25; i++) {
        if (num25 % i === 0) {
            factors.push(i);
        }
    }
    return factors;
}
console.log(findFactors(28));

// Challenge 26: Find Sum of Natural Numbers Using Recursion
console.log("Challenge 26");

function sumOfNaturalNumbersRec(num26) {
    if (num26 < 1) return "the number should be >= 1";
    if (num26 === 1) return 1; 
    return num26 + sumOfNaturalNumbersRec(num26 - 1); 
}
console.log(sumOfNaturalNumbersRec(6))
console.log(sumOfNaturalNumbersRec(9))

// Challenge 27: Guess a Random Number
console.log("Challenge 27");


function numberGuessingGame() {
    const target = Math.floor(Math.random() * 100) + 1; 
    let attempts = 0;
    let guess;

    do {
        guess = parseInt(prompt("Guess a number between 1 and 100:"), 10);
        attempts++;

        if (guess > target) {
            console.log("Too high Try again with a lower number .");
        } else if (guess < target) {
            console.log("Too low Try again with a higher number .");
        } else if (guess === target) {
            console.log(`Correct The number was ${target}. You guessed it in ${attempts} attempts.`);
        } else {
            console.log("Invalid input. Please enter a number.");
        }

    } while (guess !== target);
}

//to run the gussing game just remove the //
//numberGuessingGame();


// Challenge 28 : Shuffle Deck of Cards 
console.log("Challenge 28");

function createDeck() {
    const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
    const values = [
        "Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10",
        "Jack", "Queen", "King"
    ];

    const deck = [];
    for (let suit of suits) {
        for (let value of values) {
            deck.push(`${value} of ${suit}`);
        }
    }
    return deck;
}

function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[randomIndex]] = [deck[randomIndex], deck[i]];
    }
    return deck;
}



let deck28 = createDeck();
console.log("Original Deck:", deck28);

let shuffledDeck = shuffleDeck(deck28);
console.log("Shuffled Deck:", shuffledDeck);


// Challenge 29 : Display Fibonacci Sequence Using Recursion
console.log("Challenge 29");

const fibonacciSequence = (num29) => {
  if (num29 <= 0) return [];
  if (num29 === 1) return [0];
  if (num29 === 2) return [0, 1];

  const seq29 = fibonacciSequence(num29 - 1);
  seq29.push(seq29[seq29.length - 1] + seq29[seq29.length - 2]);
  return seq29;
};


console.log(fibonacciSequence(7));



// Challenge 30 : Find Factorial of a Number Using Recursion
console.log("Challenge 30");

const factorialRecursive = (num30) => {
  if (num30 < 0) return "Factorial is not defined for negative numbers";
  if (num30 === 0) return 1;
  return num30 * factorialRecursive(num30 - 1);
};

console.log(factorialRecursive(0))
console.log(factorialRecursive(5))
console.log(factorialRecursive(-2))

