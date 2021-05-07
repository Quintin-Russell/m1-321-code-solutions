var books = [
  {
    isbn: '400',
    author: 'Quinn Russell',
    title: 'Book'
  },
  {
    isbn: '500',
    author: 'Brett',
    title: 'The Teacher Guy'
  },
  {
    isbn: '600',
    author: 'Ema Smith',
    title: 'That Girl'
  }
];

console.log('Book Array', books, typeof (books));

// stringify()
var booksJSON = JSON.stringify(books);
console.log('JSON books', booksJSON, typeof (booksJSON));

// JSON student obj as string
var student = JSON.stringify(
  { 'number id': '1000', 'string Name': 'Billy Gates' }
);
console.log('student', student, typeof (student));

// JSON.parse of student
var parsedStudent = JSON.parse(student);
console.log('parsed student', parsedStudent, typeof (parsedStudent));
