/* exported omit */
function omit(source, keys) {
  var objKeys = Object.keys(source);
  objKeys = objKeys.sort();
  var dupObjKeys = objKeys;
  dupObjKeys = dupObjKeys.sort();
  keys = keys.sort();
  var key;
  var newKey;
  for (key of keys) {
    var check = objKeys.indexOf(key);
    if (check !== -1) {
      var index = objKeys.indexOf(key);
      dupObjKeys.splice(index, 1);
    }
  }
  var newObj = {};
  for (newKey of dupObjKeys) {
    newObj[newKey] = source[newKey];
  }
  return newObj;
}
