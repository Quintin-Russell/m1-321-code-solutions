/* exported compact */

function compact(array) {
  var finalArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      finalArray.push(array[i]);
    }
  }
  return finalArray;
}
