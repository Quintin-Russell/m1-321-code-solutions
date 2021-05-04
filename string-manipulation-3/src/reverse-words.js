/* exported reverseWords */
function reverseWords(string) {
  var finalStr = '';
  string = string.split(' ');
  // console.log(string);
  // for word in string, for letter in word, unshift to final string --> add space after each word
  var word;
  var letter;
  for (word of string) {
    var newWord = '';
    for (letter of word) {
      newWord = letter + newWord;
    }
    finalStr = finalStr + newWord + ' ';
  }
  finalStr = finalStr.trim();
  // console.log("finalStr", finalStr)
  return finalStr;
}
