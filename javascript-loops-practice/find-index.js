/* exported findIndex */
function findIndex(array, value) {
  var defIndex = -1;
  var val;
  var i = 0;
  for (val of array) {
    if (val === value) {
      defIndex = i;
      break;
    }
    i += 1;
  }
  return defIndex;
}
