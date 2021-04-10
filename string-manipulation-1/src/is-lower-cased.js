/* exported isLowerCased */
function isLowerCased(word) {
  var uppercaseWord = word.toUpperCase();
  var isLowerCase = true;
  for (var i = 0; i < word.length; i++) {
    if ((word[i] === uppercaseWord[i]) && (word[i] !== '-') && (word[i] !== "'")) {
      isLowerCase = false;
      break;
    }
  }
  return isLowerCase;
}
