/* exported unique */
function unique(array) {
  var finalArray = [];
  // for loop that goes thru array, if not in finallArray, finalArray.push(value)
  var val;
  for (val of array) {
    if (finalArray.includes(val) === false) {
      finalArray.push(val);
    }
  }
  // console.log(finalArray)
  return finalArray;
}
