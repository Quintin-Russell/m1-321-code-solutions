/* exported lastChars */
function lastChars(length, string) {
  var finalStr = '';
  var len = string.length;
  if (length > len) {
    finalStr = string;
  } else {
    for (let i = (len - length); i < len; i++) {
      var toAdd = string[i];
      finalStr += toAdd;
    }
  }
  return finalStr;
}
