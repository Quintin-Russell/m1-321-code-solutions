/* exported invert */
function invert(source) {
  // for (in) loop: assigns key and value to variables --> assigns value:key to new obj
  var newObj = {};
  var key;
  for (key in source) {
    var val = source[key];
    newObj[val] = key;
  }
  return newObj;
}
