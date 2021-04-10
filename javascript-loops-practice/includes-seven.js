/* exported includesSeven */
function includesSeven(array) {
  var returnStatement = false;
  for (var num of array) {
    var isSeven = (num === 7);
    // console.log("val of isSeven", isSeven);
    if (isSeven === true) {
      returnStatement = isSeven;
      // console.log("contains 7", returnStatement)
      break;
    } else {
      continue;
    }
  }
  return returnStatement;
}
