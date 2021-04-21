/* exported drop */
function drop(array, count) {
  var len = array.length;
  var finalArray = [];
  for (var i = count; i < len; i++) {
    var extractedVal = array[i];
    finalArray.push(extractedVal);
  }
  return finalArray;
}
