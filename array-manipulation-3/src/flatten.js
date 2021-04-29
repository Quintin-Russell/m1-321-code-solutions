/* exported flatten */
// find array.length and create [ ]--> for loop: for i find length, for each i, push to [ ] --> return [ ]
function flatten(array) {
  var finalArray = [];
  var innerArray;
  for (innerArray of array) {
    // console.log("inner loop fired", innerArray)
    var innerIndex;
    for (innerIndex of innerArray) {
      // console.log("push loop fired", innerIndex)
      // console.log(typeof(innerIndex))
      finalArray.push(innerIndex);
    }
  }
  // console.log("finalArray", finalArray)
  return finalArray;
}
