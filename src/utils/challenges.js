export const testDataObj = {
  square: {
    name: 'Square',
    difficulty: 'Easy',
    description: `enter code below to return the square of a number`,
    id: 'square',
    javascript: `function square(x) {

}`,
    python: `def square(x):`,
    testData: [
      { testCase: 5, testResult: 25 },
      { testCase: 10, testResult: 100 },
      { testCase: 2348, testResult: 5513104 },
    ],
  },
  add: {
    name: 'Add',
    difficulty: 'Easy',
    description:
      'enter code below to add two numbers and return the sum',
    id: 'add',
    javascript: `function add(x, y) {

}
    `,
    python: `def add (x, y):`,
    testCases: [
      [1, 2],
      [345, 829],
      [384724323, 23948293819],
    ],
    testResults: [3, 1174, 24333018142],
    testData: [
      { testCase: [1, 2], testResult: 3 },
      { testCase: [345, 829], testResult: 1174 },
      { testCase: [384724323, 23948293819], testResult: 24333018142 },
    ],
  },
  reverseAString: {
    name: 'Reverse A String',
    difficulty: 'Easy',
    description: `enter code below to take a string as input 
and return the same string, reversed.`,
    id: 'reverseAString',
    javascript: `function reverseAString(str) {

}`,
    python: `def reverseAString(str):`,
    testData: [
      { testCase: 'Hello, world!', testResult: '!dlrow ,olleH' },
      { testCase: 'Lor3m 1psum', testResult: 'musp1 m3roL' },
      {
        testCase: 'Welcome to DevCoach.com!',
        testResult: '!moc.hcaoCveD ot emocleW',
      },
    ],
  },
  rockPaperScissors: {
    name: 'Rock Paper Scissors',
    difficulty: 'Medium',
    description: `Write a function called rockPaperScissors that will
take a number, and output "n" number of possible combinations of 'rock', 'paper', and 'scissors.`,
    id: 'rockPaperScissors',
    javascript: `function rockPaperScissors(numOfRounds) {

}`,
    python: `def rockPaperScissors(numOfRounds):`,
    testData: [
      {
        testCase: 1,
        testResult: [['rock'], ['paper'], ['scissors']],
      },
      {
        testCase: 2,
        testResult: [
          ['rock', 'rock'],
          ['rock', 'paper'],
          ['rock', 'scissors'],
          ['paper', 'rock'],
          ['paper', 'paper'],
          ['paper', 'scissors'],
          ['scissors', 'rock'],
          ['scissors', 'paper'],
          ['scissors', 'scissors'],
        ],
      },
      {
        testCase: 3,
        testResult: [
          ['rock', 'rock', 'rock'],
          ['rock', 'rock', 'paper'],
          ['rock', 'rock', 'scissors'],
          ['rock', 'paper', 'rock'],
          ['rock', 'paper', 'paper'],
          ['rock', 'paper', 'scissors'],
          ['rock', 'scissors', 'rock'],
          ['rock', 'scissors', 'paper'],
          ['rock', 'scissors', 'scissors'],
          ['paper', 'rock', 'rock'],
          ['paper', 'rock', 'paper'],
          ['paper', 'rock', 'scissors'],
          ['paper', 'paper', 'rock'],
          ['paper', 'paper', 'paper'],
          ['paper', 'paper', 'scissors'],
          ['paper', 'scissors', 'rock'],
          ['paper', 'scissors', 'paper'],
          ['paper', 'scissors', 'scissors'],
          ['scissors', 'rock', 'rock'],
          ['scissors', 'rock', 'paper'],
          ['scissors', 'rock', 'scissors'],
          ['scissors', 'paper', 'rock'],
          ['scissors', 'paper', 'paper'],
          ['scissors', 'paper', 'scissors'],
          ['scissors', 'scissors', 'rock'],
          ['scissors', 'scissors', 'paper'],
          ['scissors', 'scissors', 'scissors'],
        ],
      },
    ],
  },
  fibonacci: {
    name: 'Fibonacci',
    difficulty: 'Easy',
    description: `Given an integer n, calculate the first n numbers
in the fibonacci sequence. Return the numbers in an array.`,
    id: 'fibonacci',
    javascript: `function fibonacci(n) {

}`,
    python: `def fibonacci(n):`,
    testData: [
      {
        testCase: 8,
        testResult: [0, 1, 1, 2, 3, 5, 8, 13],
      },
      {
        testCase: 50,
        testResult: [
          0,
          1,
          1,
          2,
          3,
          5,
          8,
          13,
          21,
          34,
          55,
          89,
          144,
          233,
          377,
          610,
          987,
          1597,
          2584,
          4181,
          6765,
          10946,
          17711,
          28657,
          46368,
          75025,
          121393,
          196418,
          317811,
          514229,
          832040,
          1346269,
          2178309,
          3524578,
          5702887,
          9227465,
          14930352,
          24157817,
          39088169,
          63245986,
          102334155,
          165580141,
          267914296,
          433494437,
          701408733,
          1134903170,
          1836311903,
          2971215073,
          4807526976,
          7778742049,
        ],
      },
    ],
  },
  sortString: {
    name: 'Sort A String',
    difficulty: 'Easy',
    description: `write a function that takes a string of letters and 
returns a string with the letters sorted in alphabetical order.`,
    id: 'sortString',
    javascript: `function sortString(str) {

}`,
    python: `def sortString(str):`,
    testData: [
      { testCase: 'zyx', testResult: 'xyz' },
      { testCase: 'fedcba', testResult: 'abcdef' },
      { testCase: 'vul', testResult: 'luv' },
    ],
  },
  isArmstrongNumber: {
    name: 'Armstrong Number ?',
    difficulty: 'Easy',
    description: ` An Armstrong number is an n-digit number
that is equal to the sum of the n'th powers of its digits.
Determine if the input number is an Armstrong number. Return
either true or false . For example with the number 153 
there are 3 digits so you would add together the cubed
values of all the digits like this: 1^3 + 5^3 + 3^3 === 153 `,
    id: 'isArmstrongNumber',
    javascript: `function isArmstrongNumber(n) {

}`,
    python: `def isArmstrongNumber(n):`,
    testData: [
      { testCase: 6, testResult: 'true' },
      { testCase: 153, testResult: 'true' },
      { testCase: 351, testResult: 'false' },
    ],
  },
  fizzBuzz: {
    name: 'FizzBuzz',
    difficulty: 'Easy',
    description: `Write a function that does the following:
console logs the numbers from 1 to n, where n is the integer
the function takes as its parameter logs fizz instead of the
number for multiples of 3 logs buzz instead of the number for
multiples of 5 logs fizzbuzz for numbers that are multiples
of both 3 and 5`,
    id: 'fizzBuzz',
    javascript: `function fizzBuzz(num) {

}
    `,
    python: `def fizzBuzz(num):`,
    testData: [
      {
        testCase: 3,
        testResult: [1, 2, 'fizz'],
      },
      { testCase: 5, testResult: [1, 2, 'fizz', 4, 'buzz'] },
      {
        testCase: 15,
        testResult: [
          1,
          2,
          'fizz',
          4,
          'buzz',
          'fizz',
          7,
          8,
          'fizz',
          'buzz',
          11,
          'fizz',
          13,
          14,
          'fizzbuzz',
        ],
      },
    ],
  },
  anagram: {
    name: 'Anagram',
    difficulty: 'Easy',
    description: `A word is an anagram of another word if both use the same letters 
in the same quantity, but arranged differently.
write a function that checks if two provided strings 
are anagrams of each other; letter casing shouldn’t matter. 
Also, consider only characters, not spaces or punctuation.
For example: anagram('this', 'that') -> false anagram('fired', 'fried') -> true`,
    id: 'anagram',
    javascript: `function anagram(a,b) {

}`,
    python: `def anagram(a,b):`,
    testData: [
      { testCase: `['hello', 'bye']`, testResult: 'false' },
      { testCase: `['finder', 'friend']`, testResult: 'true' },
      { testCase: `['listen', 'silent']`, testResult: 'true' },
    ],
  },
  balancedBrackets: {
    name: 'Balanced Brackets',
    difficulty: 'Medium',
    description: `Write a function balancedBrackets that accepts
a string and returns true if all types of brackets 
are balanced and false otherwise.    
ignore other characters
Examples:
balancedBrackets('[({})]');    true
balancedBrackets('[(]{)}');  false
balancedBrackets(' const obj  = { x: someFunction() }');  true`,
    id: 'balancedBrackets',
    javascript: `function balancedBrackets(str) {

}`,
    python: `def balancedBrackets(str):`,
    testData: [
      { testCase: '[({})]', testResult: 'true' },
      { testCase: '[(]{)}', testResult: 'false' },
      {
        testCase: ' const obj  = { x: someFunction() }',
        testResult: 'true',
      },
    ],
  },
  romanNumeralize: {
    name: 'Roman Numeral Presentation',
    difficulty: 'Medium',
    description: `Define a function that takes in a positive integer
and returns the Roman Numeral representation of that number.  

Symbol    Value
I         1
IV        4
V         5
IX        9
X         10
XL        40
L         50
XC        90
C         100
CD        400
D         500
CM        900
M         1,000 

Example: romanNumeralize(1973) should return 'MCMLXXIII'.`,
    id: 'romanNumeralize',
    javascript: `function romanNumeralize(n) {

}`,
    python: `def romanNumeralize(n):`,
    testData: [
      { testCase: 1973, testResult: 'MCMLXXIII' },
      { testCase: 2593, testResult: 'MMDXCIII' },
      { testCase: 3123, testResult: 'MMMCXXIII' },
    ],
  },
  collatzSequence: {
    name: 'Collatz Sequence',
    difficulty: 'Easy',
    description: `Write a function which takes a positive integer number
as an argument and returns it's "Collatz chain".
The Collatz chain will stop at one. Named  after Lothar
Collatz, the "Collatz conjecture" defines a sequence
of numbers. That sequence is the Collatz "chain". 
Starting with a positive integer, the Collatz conjecture
determines the next integer in the chain until the number
1 is obtained.Your Collatz algorithm will evaluate the 
integer and then, depending on the condition of the integer,
perform the following tasks: If the integer is even, 
then halve the number. If the integer is not even, then
multiply it by 3 and add one. An example chain starting
from the number 23 looks like this:
[23, 70, 35, 106, 53, 160, 80, 40, 20, 10, 5, 16, 8, 4, 2, 1]
Boldface signifies the odd numbers.`,
    id: 'collatzSequence',
    javascript: `function collatzSequence(num){

}`,
    python: `def collatzSequence(num):`,
    testData: [
      {
        testCase: 23,
        testResult: [
          23,
          70,
          35,
          106,
          53,
          160,
          80,
          40,
          20,
          10,
          5,
          16,
          8,
          4,
          2,
          1,
        ],
      },
      {
        testCase: 44,
        testResult: [
          44,
          22,
          11,
          34,
          17,
          52,
          26,
          13,
          40,
          20,
          10,
          5,
          16,
          8,
          4,
          2,
          1,
        ],
      },
      {
        testCase: 86,
        testResult: [
          86,
          43,
          130,
          65,
          196,
          98,
          49,
          148,
          74,
          37,
          112,
          56,
          28,
          14,
          7,
          22,
          11,
          34,
          17,
          52,
          26,
          13,
          40,
          20,
          10,
          5,
          16,
          8,
          4,
          2,
          1,
        ],
      },
    ],
  },
  vowelCount: {
    name: 'Vowel Count',
    difficulty: 'Easy',
    description: ` Write a function which counts the number of
vowels in a given string. Return the count number.
Passing the string "Hello world!" as an argument 
to your vowelCount() function would result
in the number 3 being returned.`,
    id: 'vowelCount',
    javascript: `function vowelCount(str) {

}`,
    python: `def vowelCount(str):`,
    testData: [
      {
        testCase: '-bcd-fgh-jklmn-pqrst-vwxyz',
        testResult: 0,
      },
      {
        testCase: 'e quic bron foumped ove the lazy do.',
        testResult: 12,
      },
      {
        testCase: 'A I have everanted iso be an Uberriver!',
        testResult: 16,
      },
    ],
  },
  islandCount: {
    name: 'Island Count',
    difficulty: 'Medium',
    description: `Given a 2D array binaryMatrix of 0s and 1s, implement
a function getNumberOfIslands that returns
the number of islands of 1s in binaryMatrix.
An island is defined as a group of adjacent values
that are all 1s. A cell in binaryMatrix is considered 
adjacent to another cell if they are next to each either
on the same row or column. Note that two values of 1 are
not part of the same island if they’re sharing only a 
mutual “corner” (i.e. they are diagonally neighbors).   
Explain and code the most efficient solution possible
and analyze its time and space complexities.
Example:
input:  binaryMatrix = [ [0,    1,    0,    1,    0],
                         [0,    0,    1,    1,    1],
                         [1,    0,    0,    1,    0],
                         [0,    1,    1,    0,    0],
                         [1,    0,    1,    0,    1] ]
output: 6 since this is the number of islands in binaryMatrix.`,
    id: 'islandCount',
    javascript: `function islandCount(binaryMatrix) {

}`,
    python: `def islandCount(binaryMatrix):`,
    testData: [
      {
        testCase: [
          `[
            [1, 0, 1, 0],
            [0, 1, 1, 1],
            [0, 0, 1, 0],
            [1, 1, 0, 0],
            [0, 1, 0, 1],
          ]`,
        ],
        testResult: 4,
      },
      {
        testCase: [
          `[
          [0, 1, 0, 1, 0],
          [0, 0, 1, 1, 1],
          [1, 0, 0, 1, 0],
          [0, 1, 1, 0, 0],
          [1, 0, 1, 0, 1],
        ]`,
        ],
        testResult: 6,
      },
      {
        testCase: [
          `[
          [1, 1, 1, 1, 1],
          [1, 1, 1, 1, 1],
          [1, 1, 1, 1, 1],
          [1, 1, 1, 1, 1],
          [1, 1, 1, 1, 1],
        ]`,
        ],
        testResult: 1,
      },
    ],
  },
};
