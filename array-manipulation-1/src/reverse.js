/* exported reverse */
function reverse(array) {
  var finalArray = [];
  for (var i = (array.length - 1); i >= 0; i--) {
    finalArray.push(array[i]);
  }
  return finalArray;
}
