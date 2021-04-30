/* exported reverseWords */
function reverseWords(string) {
  var wordArray = [];
  // split strings at " "
  string = string.split(' ');
  // for loop (outer array); for loop (inner array): creates a new array --> .shift() to reverse order
  var word;
  for (word of string) {
    var array = [];
    for (var i = 0; i < word.length; i++) {
      array.unshift(word[i]);
      // console.log("letter", word[i])
    }
    // console.log("array", array)
    wordArray.push(array);
  }
  // console.log(wordArray)
  // itterate thru word array and add letters to blank str
}
