/* exported includes */
function includes(array, value) {
  var include = false;
  var len = array.length;
  for (let i = 0; i < len; i++) {
    if (array[i] === value) {
      include = true;
      break;
    } else {
      continue;
    }
  }
  return include;
}
