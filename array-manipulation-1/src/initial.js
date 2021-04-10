/* exported initial */
function initial(array) {
  var finalArray = [];
  for (var i = 0; i < (array.length - 1); i++) {
    finalArray.push(array[i]);
  }
  return finalArray;
}
