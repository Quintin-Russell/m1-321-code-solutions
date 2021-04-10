/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var newArray = [];
  var word;
  for (word of words) {
    word = word + suffix;
    newArray.push(word);
  }
  return newArray;
}
