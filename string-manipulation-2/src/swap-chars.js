/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  // split string into sub-strings (.split())
  var strArray = string.split('');
  // save char @ 1st/2nd index to variable
  var first = strArray[firstIndex];
  var second = strArray[secondIndex];
  // reassign values in array
  strArray[secondIndex] = first;
  strArray[firstIndex] = second;
  // concat array --> str
  var char;
  var finalStr = '';
  for (char of strArray) {
    finalStr += char;
  }
  return finalStr;
}
