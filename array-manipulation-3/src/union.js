/* exported union */
function union(first, second) {
  var finalArray = [];
  // for loop that goes thru array, if not in finallArray, finalArray.push(value)
  var val;
  for (val of first) {
    if (finalArray.includes(val) === false) {
      finalArray.push(val);
    }
  }
  for (val of second) {
    if (finalArray.includes(val) === false) {
      finalArray.push(val);
    }
  }
  // console.log(finalArray)
  return finalArray;
}
