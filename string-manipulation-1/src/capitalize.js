/* exported capitalize */
function capitalize(word) {
  var firstChar = word[0].toUpperCase();
  var lowerCaseWord = word.toLowerCase();
  var word1 = lowerCaseWord.replace(lowerCaseWord[0], firstChar);
  return word1;
}
