/* exported intersection */
function intersection(first, second) {
  var finalArray = [];
  // for loop that goes thru array, if not in finallArray, finalArray.push(value)
  var val;
  for (val of first) {
    if (second.includes(val) === true) {
      finalArray.push(val);
    }
  }
  // console.log(finalArray)
  return finalArray;
}
