/* exported toObject */
function toObject(keyValuePair) {
  var key = keyValuePair[0];
  var val = keyValuePair[1];
  var object = {
  };
  object[key] = val;
  return object;
}
