// WRITING EXPRESSIONS WITH VARIABLES

// Exercise 1

// create a variable and initialize it to Thomas
let myName = "Thomas";
console.log(myName);

// Exercise 2

// create a variable and initialize it to 32
let age = 32;
console.log(age);

// Exercise 3

// create a variable and initialize it to 32
let juliaAge = 32;
// create a variable and substract the age from julia from my age
let ageDiff = age - juliaAge;
console.log(ageDiff);

// WRITING CODE WITH CONDITIONALS

// Exercise 4

// if my age is bigger than 21
if (age > 21) {
  // then print "you are older than 21"
  console.log("You are older than 21");
  // if not print "you are not older than 21"
} else {
  console.log("You are not older than 21");
}

// Exercise 5

// if my age is bigger than julia's age
if (age > juliaAge) {
  // then print "julia is younger than you"
  console.log("Julia is younger than you");
  // if my age is the same like julia's
} else if (age == juliaAge) {
  // then print "you have the same age as julia"
  console.log("You have the same age as Julia");
  // if not print "julia is older than you"
} else {
  console.log("Julia is older than you");
}

// SORTING AN ARRAY

// Exercise 1

// create an array with strings
let classArray = [
  "Jost",
  "Halil",
  "Stian",
  "Sarah",
  "Karolina",
  "Ottavia",
  "Thomas",
  "Yaser",
  "Raúl",
  "Jaspreet",
];
console.log(classArray);
// sort an array (e. g. alphabetical)
let classSortedArray = classArray.sort();
console.log(classSortedArray);

// save the first item of an array in a variable
let first = classSortedArray[0];
console.log("first element", first);

// save the last item of an array in a variable
let last = classSortedArray[classSortedArray.length - 1];
console.log("last element", last);

// print every element of an array in the console
classSortedArray.forEach((e) => console.log(e));

// LOOPING OVER AN ARRAY

// Exercise 2

// create an array with numbers
let classAge = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29];
let count = 0;

// as long as count is less than the length of that array (in this case 10)
while (count < classAge.length) {
  // if the remainder value is 0 then it is an even number
  // we are using % modulus operator to get the remainder value
  if (classAge[count] % 2 === 0) {
    console.log("even numbers:", classAge[count]);
  }
  count++;
}

// FUNCTIONS THAT USE ARRAYS

// Exercise 3

var arr = [6, 3, 9, 1, 4, 2, 5];

function calcMin(arr) {
  var smallest = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  console.log("smallest:", smallest);
  return smallest;
}

calcMin(arr);

// Exercise 4

var arr = [1, 6, 3, 9, 4, 11, 2, 5];

function calcMax(arr) {
  var biggest = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > biggest) {
      biggest = arr[i];
    }
  }
  console.log("biggest:", biggest);
  return biggest;
}

calcMax(arr);

// Exercise 5

var array = [
  3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99,
  100,
];

// function that needs an array and an index and prints out the element of this array with the given index
function printNumberOfIndex(array, index) {
  num = array[index];
  console.log("numberOfIndex:", num);
  return num;
}

printNumberOfIndex(array, 6);

// Exercise 6

var array = [
  3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99,
  100,
];

// function that needs an array and check if any number is redundant
function duplicateNumbers(array) {
  // create an empty array
  const res = [];
  // (1. for) index0
  // (2. for) compare index0 with index1, index2, ..
  // (1. for) increase index0 by 1
  // (2. for) compare index1 with index2, index3, ..
  // repeat
  for (var i = 0; i < array.length; i++) {
    for (var j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        // if any value is equal push this value from array with index [j] to the empty array res
        res.push(array[j]);
      }
    }
  }
  console.log("duplicate", res);
  return res;
}
duplicateNumbers(array);

// Exercise 7

/*
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(''));
// expected output: "FireAirWater"

console.log(elements.join('-'));
// expected output: "Fire-Air-Water"
*/

myColor = ["Red", "Green", "White", "Black"];

/*
toString() vs. join()
toString() -> parse the elements of an array to strings
join() -> parse the elements of an array to strings with an specified seperator
*/

// function that print the string of an array to the console as strings
function printString(myColor) {
  let myColorString = myColor.join();
  console.log("STRING:", myColorString);
  return myColorString;
}

printString(myColor);

// JAVASCRIPT STRING

// Exercise 1

num = 32443;

/*
the parseInt method parses a value as a string and returns it as integer
the toString() method returns a string representing the object
the split() method splits a string into an array of substrings
the reverse() method reverses the order of the elements in an array
the join() method returns an array as a string
*/
function reverseNumber(num) {
  let reverse = parseInt(num.toString().split("").reverse().join(""));
  console.log(reverse);
}
reverseNumber(num);

// Exercise 2

let str = "thomas";

// function that reorder the letters of a string
function orderString(str) {
  let order = str.split("").sort().join("");
  console.log("order:", order);
}
orderString(str);

// Exercise 3

// Solution 1

function uppercaseFirstLetter(sentence) {
  let res = sentence.split(" ");

  for (let i = 0; i < res.length; i++) {
    /*
      res[i][0]
      first [] -> word
      second [] -> letter

      res[i].substr(1)
      word with index i substring begins at index1
      */
    res[i] = res[i][0].toUpperCase() + res[i].substr(1);
    result = res.join(" ");
  }
  console.log("uppercase:", result);
}
uppercaseFirstLetter("prince of persia");

// Exercise 4

function longestWord(x) {
  let res = x.split(" ");
  let word = "";
  for (let i = 0; i < res.length; i++) {
    if (word.length < res[i].length) {
      word = res[i];
    }
  }
  console.log("longest word:", word);
}
longestWord("Web Development Tutorial");

// EXTRA EXERCISES

// Exercise 1

function multiplicateNumbers() {
  let a = 2;
  let b = 3;
  res = a * b;
  console.log("res1", res);
}

multiplicateNumbers();

// Exercise 2

function multiplicateNumbers2() {
  let a = 2;
  let b = 3;
  res = a * b;
  return res;
}

multiplicateNumbers2();

console.log("res2", multiplicateNumbers2());

// Exercise 3

function multiplicateNumbers3(a, b) {
  res = a * b;
  console.log("res3", res);
}

multiplicateNumbers3(3, 3);

// Exercise 4

function typeOfTriangle(a, b, c) {
  if (a == b && a == c && b == c) {
    console.log("Equilateral");
  } else if (a == b || a == c || b == c) {
    console.log("Isosceles");
  } else {
    console.log("Scalene");
  }
}

typeOfTriangle(3, 3, 2);

// Exercise 5

arrayOfParameters = ["JavaScript", "Thomas", "Halil"];

function replaceParameters(array) {
  res = [];

  for (i = 0; i < array.length; i++) {
    let itr = array[i].replaceAll("a", 1);
    res.push(itr);
  }
  console.log(res);
}

replaceParameters(arrayOfParameters);

// Exercise 6

arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumOfNumbers(array) {
  let sum = 0;

  for (i = 0; i < array.length; i++) {
    sum += array[i];
  }
  console.log("sum:", sum);
  return sum;
}

sumOfNumbers(arrayOfNumbers);

function findSmallest(array) {
  var smallest = arr[0];

  for (var i = 0; i < array.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  console.log("smallestNumber:", smallest);
  return smallest;
}

findSmallest(arrayOfNumbers);

// Exercise 7

arrayDiffNumbers = [1, 2, 8, 3, 2];
let count2 = 0;
arr = [];
let newSum = 0;

function sumEvenNumbers(array) {
  while (count2 < array.length) {
    if (array[count2] % 2 === 0) {
      arr.push(array[count2]);
    }
    count2++;
  }
  for (i = 0; i < arr.length; i++) {
    newSum += arr[i];
  }
  console.log("even numbers:", arr);
  console.log("sum of even numbers:", newSum);
}

sumEvenNumbers(arrayDiffNumbers);

// Exercise 8 (hardmode :D)

newArr = [1, 2, 8, 3, 2, 3, 4];

function sumOfEvenPositions(newArr) {
  let i = 0;
  let sum = 0;
  for (i = 0; i < newArr.length; i += 2) {
    if (newArr[i] % 2 == 0) {
      sum += newArr[i];
    }
  }
  console.log("even numbers on even position:", sum);
  return sum;
}
sumOfEvenPositions(newArr);

// Exercise 9

let newNum = 9;

function evenNumBefore(newNum) {
  let i = newNum;
  evenMoreArray = [];
  newEvenArray = [...Array(newNum).keys()];

  for (i = 0; i < newEvenArray.length; i++) {
    if (newEvenArray[i] % 2 == 0) {
      evenMoreArray.push(newEvenArray[i]);
    }
  }
  console.log("newEvenArray", newEvenArray);
  console.log("evenMoreArray", evenMoreArray);
}

evenNumBefore(newNum);

// Exercise 10

let newNum1 = 1;
let newNum2 = 13;

function oddNumBetween(newNum1, newNum2) {
  oddNumberArray = [];
  rangeArray = [...Array(newNum2 - newNum1 + 1).keys()].map((x) => x + newNum1);
  console.log("rangeArray", rangeArray);

  for (i = 0; i < rangeArray.length; i++) {
    if (rangeArray[i] % 2 !== 0) {
      oddNumberArray.push(rangeArray[i]);
    }
  }
  console.log("rangeArray", oddNumberArray);
}

oddNumBetween(newNum1, newNum2);

// DOM MANIPULATION EXERCISES

// Exercise 1

function addBands(myBandList) {
  console.log("myBandList:", myBandList);

  for (var i = 0; i < myBandList.length; i++) {
    const myUl = document.getElementById("band-list");
    const myLi = document.createElement("li");

    myLi.appendChild(document.createTextNode(myBandList[i]));
    myUl.appendChild(myLi);
  }
}
addBands(["Dire Straits", "Kansas", "Steely Dan"]);

// Exercise 2

function addMultTable(rows, cols) {
  myBody = document.querySelector("body");
  const tbl = document.createElement("table");
  tbl.setAttribute("class", "myTable");
  myBody.appendChild(tbl);

  for (let i = 0; i < rows; i++) {
    let mycurrent_row = document.createElement("tr");

    for (let i = 0; i < cols; i++) {
      let mycurrent_col = document.createElement("td");

      mycurrent_row.appendChild(mycurrent_col);
      tbl.appendChild(mycurrent_row);
    }
  }
}

addMultTable(4, 8);
