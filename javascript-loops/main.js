/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */
// while loops

function getNumbersToTen() {
  var numbers = [];
  var currentNumber = 1;
  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}

function getEvenNumbersToTwenty() {
  var evenNumbers = [];
  var currentNumber = 2;
  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}

function repeatWord(word, times) {
  var count = 1;
  var repeated = '';
  while (count <= times) {
    repeated += (word + ' ');
    count++;
  }
  return repeated;
}

// for loops

function logEachCharacter(string) {
  var i = 0;
  var stringLen = string.length;
  for (i; i < stringLen; i++) {
    console.log(string[i]);
  }
}

function doubleAll(numbers) {
  var doubled = [];
  for (let i = 0; i < numbers.length; i++) {
    doubled[i] = (numbers[i] * 2);
  }
  return doubled;
}

function getKeys(object) {
  var keys = [];
  var prop;
  for (prop in object) {
    keys.push(prop);
  }
  return keys;
}

function getValues(object) {
  var values = [];
  var prop;
  for (prop in object) {
    values.push(object[prop]);
  }
  return values;
}
