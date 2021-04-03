// function 1
function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return console.log('convertMinutesToSeconds output:', seconds);
}
convertMinutesToSeconds(5);
// function 2
function greet(name) {
  var greeting = 'Hey, ' + name;
  return console.log('greet output:', greeting);
}
greet('Beavis');
// function 3
function getArea(width, height) {
  var area = height * width;
  return console.log('getArea output:', area);
}
getArea(17, 42);
// function 4
function getFirstName(person) {
  var firstName = person.firstName;
  return console.log('getFirstName output:', firstName);
}
getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });
// function 4
function getLastElement(array) {
  var lastElement = (array.length) - 1;
  return console.log('getLastElement output:', array[lastElement]);
}
getLastElement(['propane', 'and', 'propane', 'accessories']);
