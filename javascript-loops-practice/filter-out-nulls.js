/* exported filterOutNulls */
function filterOutNulls(values) {
  var finalArray = [];
  var val;
  for (val of values) {
    if (val != null) {
      finalArray.push(val);
    }
  }
  return finalArray;
}
