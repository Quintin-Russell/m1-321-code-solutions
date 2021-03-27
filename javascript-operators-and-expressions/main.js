// Width, height, area
var width = 10;
var height = 10;
var area = width * height;
console.log('Area = ', area);
console.log('Data type of area: ', typeof area);

// bill and payment
var bill = 1000;
var payment = 1800;
var change = payment - bill;

console.log('change = ', change);
console.log('data type of change:', typeof change);

// quizzes, midterm, and final
var quizzes = 85;
var midterm = 90;
var final = 97;
var grade = (quizzes + midterm + final) / 3;

console.log('grade = ', grade);
console.log('data type of grade:', typeof grade);

// firstName and lastName
var firstName = 'Quinn';
var lastName = 'Russell';
var fullName = firstName + ' ' + lastName;

console.log('full name = ', fullName);
console.log('data type of fullName:', typeof fullName);

// pH
var pH = 6;
var isAcidic = (pH < 7);

console.log('isAcidic = ', isAcidic);
console.log('data type of isAcidic:', typeof isAcidic);

// headCount
var headCount = 150;
var isSparta = (headCount === 300);

console.log('isSparta = ', isSparta);
console.log('data type of isSparta:', typeof isSparta);

// Motto
var motto = fullName;
motto = fullName + ' ' + 'is the GOAT';

console.log('motto = ', motto);
console.log('data type of motto:', typeof motto);
