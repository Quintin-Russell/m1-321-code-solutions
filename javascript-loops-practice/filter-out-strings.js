/* exported filterOutStrings */
function filterOutStrings(values) {
  var finalArray = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof (values[i]) !== 'string') {
      finalArray.push(values[i]);
    }
  }
  return finalArray;
}
