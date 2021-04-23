/* exported firstChars */
function firstChars(length, string) {
  var finalStr = '';
  var len = string.length;
  if (length > len) {
    finalStr = string;
  } else {
    for (let i = 0; i < length; i++) {
      var toAdd = string[i];
      finalStr += toAdd;
    }
  }
  return finalStr;
}
