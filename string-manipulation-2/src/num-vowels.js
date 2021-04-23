/* exported numVowels */
function numVowels(string) {
  // for loop if char = aeiou, add to VowelArray the count vowel array
  var vowels = 0;
  var char;
  for (char of string) {
    char = char.toLowerCase();
    if ((char === 'a') || (char === 'e') || (char === 'i') || (char === 'o') || (char === 'u')) {
      vowels = vowels + 1;
    }
  }
  return vowels;
}
