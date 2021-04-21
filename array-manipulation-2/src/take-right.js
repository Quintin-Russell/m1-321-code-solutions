/* exported takeRight */
function takeRight(array, count) {
  var len = array.length;
  var finalArray = [];
  if (len === 0) {
    return finalArray;
  } else {
    for (let i = (len - count); i < len; i++) {
      finalArray.push(array[i]);
    }
  }
  return finalArray;
}
