/* exported capitalizeWord */
function capitalizeWord(word) {
  var firstChar = word[0];
  firstChar = firstChar.toUpperCase();
  var lwrCase = word.toLowerCase();
  var lwrCaseChar = lwrCase[0];
  var word1 = lwrCase.replace(lwrCaseChar, firstChar);
  if (word1 === 'Javascript') {
    word1 = 'JavaScript';
  }
  return word1;
}
