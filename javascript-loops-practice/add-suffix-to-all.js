/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var newArray = [];
  for (var i = 0; i < words.length; i++) {
    var word = words[i] + suffix;
    newArray.push(word);
  }
  return newArray;
}
