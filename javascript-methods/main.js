// math object
var a = 1;
var b = 2;
var c = 999909;
var maximumValue = Math.max(a, b, c);
console.log('maximumValue:', maximumValue);
// Heroes array
var heroes = ['Capt Underpants', 'Afroman', 'Super Panda', 'Dolphin'];
var randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('randomIndex value:', randomIndex);
var randomHero = heroes[randomIndex];
console.log('random hero:', randomHero);
// Array Methods
var library = [
  {
    title: 'The Subtle Art',
    author: 'Mark Manson'
  },
  {
    title: 'The Obstacle is the Way',
    author: 'Ryan Holliday'
  },
  {
    title: 'El Principito',
    author: 'French Guy'
  }
];
var lastBook = library.pop();
console.log('lastBook:', lastBook);
var firstBook = library.shift();
console.log('firstBook:', firstBook);
// new book objs
var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library:', library);
// string methods
var fullName = 'Quintin Russell';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
