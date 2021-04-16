/* exported defaults */
function defaults(target, source) {
  // if prop is not in target, will add prop from source
  // make array of keys from source and target using Object.keys()--> for (of) on source: use targetkeys.indexof() = -1{target[key] =source[key]}
  var tarKeys = Object.keys(target);
  var sKeys = Object.keys(source);
  var key;
  for (key of sKeys) {
    var index = tarKeys.indexOf(key);
    if (index === -1) {
      target[key] = source[key];
    }
  }
  return target;
}
