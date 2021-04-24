/* exported findIndex */
function findIndex(array, value) {
  var defIndex = -1;
  var i = 0;
  for (var l = 0; l < array.length; l++) {
    if (array[i] === value) {
      defIndex = i;
      break;
    }
    i += 1;
  }
  return defIndex;
}
