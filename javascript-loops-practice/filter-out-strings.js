/* exported filterOutStrings */
function filterOutStrings(values) {
  var finalArray = [];
  var val;
  for (val of values) {
    if (typeof (val) !== 'string') {
      finalArray.push(val);
    }
  }
  return finalArray;
}
