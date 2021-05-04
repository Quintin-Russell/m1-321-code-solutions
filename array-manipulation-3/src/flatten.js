/* exported flatten */
// find array.length and create [ ]--> for loop: for i find length, for each i, push to [ ] --> return [ ]
function flatten(array) {
  // console.log("length of array", array.length)
  var finalArray = [];
  for (var i = 0; i < array.length; i++) {
    if (typeof (array[i]) === 'object') {
      var innerIndex;
      for (innerIndex of array[i]) {
        finalArray.push(innerIndex);
      }
    } else {
      finalArray.push(array[i]);
    }
  }
  // console.log("finalArray", finalArray)
  return finalArray;
}
