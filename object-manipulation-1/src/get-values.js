/* exported getValues */
function getValues(object) {
  var valueArray = [];
  for (var key in object) {
    var value = object[key];
    valueArray.push(value);
  }
  return valueArray;
}
