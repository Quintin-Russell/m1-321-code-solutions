// create array: literal
var colors;
colors = ['red', 'white', 'blue'];
// log values to console
console.log('value of colors:', colors);

var americaString = 'America is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2] + '.';
console.log(americaString);
// value [2] reassign
colors[2] = 'green';

var mexicoString = 'Mexico is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2] + '.';
console.log(mexicoString);

// students array
var students;
students = ['Billy-Joe', 'Ricky', 'Bobby', 'Cal'];
// length property and logging length prop
var numberOfStudents = students.length;
console.log('There are', numberOfStudents, 'students in the class');
// altering numberOfStudents var; lastStudent logging
var lastIndex = numberOfStudents - 1;
var lastStudent = students[lastIndex];
console.log('The last student in the array is', lastStudent);
console.log('value of students:', students);
