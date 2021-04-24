/* exported includesSeven */
function includesSeven(array) {
  var returnStatement = false;
  for (var i = 0; i < array.length; i++) {
    var isSeven = (array[i] === 7);
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
