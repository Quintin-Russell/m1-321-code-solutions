/* exported dropRight */
function dropRight(array, count) {
  var len = array.length;
  var finalArray = [];
  if (len === 0) {
    return finalArray;
  } else {
    var ctIndex = (len - (count));
    for (let i = 0; i < ctIndex; i++) {
      finalArray.push(array[i]);
    }
  }
  return finalArray;
}
