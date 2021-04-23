/* exported pick */
function pick(source, keys) {
  var newObj = {};
  var key;
  var objKey;
  for (objKey in source) {
    if (source[objKey] === undefined) {
      continue;
    } else {
      for (key of keys) {
        if (key === objKey) {
          newObj[key] = source[key];
        }
      }
    }
  }
  return newObj;
}
