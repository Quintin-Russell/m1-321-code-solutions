/* exported tail */
function tail(array) {
  var finalArray = [];
  for (var i = 1; i < array.length; i++) {
    finalArray.push(array[i]);
  }
  return finalArray;
}
