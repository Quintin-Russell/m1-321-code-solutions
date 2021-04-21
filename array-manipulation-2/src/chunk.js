/* exported chunk */
function chunk(array, size) {
  var len = array.length;
  var finalArray = [];
  if (len === 0) {
    return finalArray;
  } else {
    for (let i = 0; i < len; i += size) {
      var newArray = [];
      for (let L = 0; L < size; L++) {
        if ((L + i) < len) {
          newArray.push(array[i + L]);
        } else {
          break;
        }
      }
      finalArray.push(newArray);
    }
  }
  return finalArray;
}
