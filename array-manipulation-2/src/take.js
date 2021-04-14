/* exported take */
function take(array, count) {
  var finalArray = [];
  var ct = count;
  for (let i = 1; i <= ct; i++) {
    var extractedVal = array[i - 1];
    if (extractedVal !== undefined) {
      finalArray.push(extractedVal);
    } else {
      return finalArray;
    }
  }
  return finalArray;
}
