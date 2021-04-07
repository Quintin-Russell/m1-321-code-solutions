/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */
function isUnderFive(number) {
  return (number < 5);
}

function isEven(number) {
  var even = (number % 2);
  return (even === 0);
}

function startsWithJ(string) {
  return (string[0] === 'J');
}

function isOldEnoughToDrink(person) {
  return (person.age >= 21);
}

function isOldEnoughToDrive(person) {
  return (person.age >= 16);
}

function isOldEnoughToDrinkAndDrive(person) {
  return false;
}

function categorizeAcidity(pH) {
  if ((pH >= 0) && (pH <= 14)) {
    if (pH === 7) {
      document.write('neutral');
    } else {
      if (pH < 7) {
        document.write('acid');
      } else {
        document.write('base');
      }
    }
  } else {
    document.write('invalid pH level');
  }
}

function introduceWarnerBro(name) {
  if ((name === 'yakko') || (name === 'wakko') || (name === 'dot')) {
    if ((name === 'yakko') || (name === 'wakko')) {
      document.write("We're the warner brothers!");
    } else {
      document.write("I'm cute~");
    }
  } else {
    document.write('Goodnight everybody');
  }
}
