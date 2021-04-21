/* exported isVowel */
function isVowel(char) {
  var char1 = char.toLowerCase();
  var isVowel = false;
  if ((char1 === 'a') || (char1 === 'e') || (char1 === 'i') || (char1 === 'o') || (char1 === 'u')) {
    isVowel = true;
  }
  return isVowel;
}
