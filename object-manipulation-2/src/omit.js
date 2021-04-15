/* exported omit */
function omit(source, keys) {
  var key;
  // console.log("hi")
  for (key of keys) {
    // console.log("key", key)
    if (key in source) {
      delete source[key];
      // console.log("deleted")
      // console.log("deleted item",source)
    }
  }
  // console.log("source", source)
  return source;
}
