/* exported reverseWord */
function reverseWord(word) {
  var newWord = word[word.length - 1];
  for (var i = (word.length - 2); i >= 0; i--) {
    newWord += word[i];
  }
  return newWord;
}
