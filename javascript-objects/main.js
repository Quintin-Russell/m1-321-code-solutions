// student object
var student = {
  firstName: 'Quinn',
  lastName: 'Russell',
  age: 27
};

student.fullName = student.firstName + ' ' + student.lastName;

console.log('Full name: ', student.fullName);

student.livesInIrvine = false;

student.previousOccupation = 'English Teacher';

console.log('Lives In Irvine: ', student.livesInIrvine);
console.log('Previous Occupation: ', student.previousOccupation);

// vehicle object
var vehicle = {
  make: 'Nissan',
  model: 'Versa',
  year: 2010
};

vehicle['color'] = 'black';
vehicle['isConvertable'] = false;

console.log('color of car:', vehicle['color']);
console.log('Is convertible: ', vehicle['isConvertable']);
console.log('vehicle object:', vehicle);

// pet object
var pet = {
  name: 'Earl',
  type: 'dog'
};

delete pet.name;
delete pet.type;

console.log('pet object:', pet);
