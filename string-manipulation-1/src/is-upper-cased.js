/* exported isUpperCased */
function isUpperCased(word) {
  var lowercaseWord = word.toLowerCase();
  var isUpperCase = true;
  for (var i = 0; i < word.length; i++) {
    if (word[i] === lowercaseWord[i]) {
      isUpperCase = false;
      break;
    }
  }
  return isUpperCase;
}
