/* exported difference */
function difference(first, second) {
  var finalArray = [];
  // for loop that goes thru array, if not in finallArray, finalArray.push(value)
  var val;
  for (val of first) {
    if (second.includes(val) === false) {
      finalArray.push(val);
    }
  }
  for (val of second) {
    if (first.includes(val) === false) {
      finalArray.push(val);
    }
  }
  // console.log(finalArray)
  return finalArray;
}
