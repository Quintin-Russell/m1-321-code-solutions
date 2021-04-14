/* exported chunk */
function chunk(array, size) {
  var len = array.length;
  var finalArray = [];
  if (len === 0) {
    return finalArray;
  } else {
    for (let i = 0; i < len; i += size) {
      var newArray = [];
      for (let L = i; L < (i + size); L++) {
        if ((array[L] === undefined) || (array[L] === null)) {
          continue;
        } else {
          newArray.push(array[L]);
        }
      }
      finalArray.push(newArray);
    }
  }
  return finalArray;
}
