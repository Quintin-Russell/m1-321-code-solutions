/* exported ransomCase */
function ransomCase(string) {
  var len = string.length;
  var newStr = '';
  for (var i = 0; i < len; i++) {
    if ((i % 2) === 0) {
      var lwrCaseLetter = string[i].toLowerCase();
      newStr += lwrCaseLetter;
    } else {
      var upperCaseLetter = string[i].toUpperCase();
      newStr += upperCaseLetter;
    }
  }
  return newStr;
}
