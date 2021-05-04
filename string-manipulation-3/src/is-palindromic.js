/* exported isPalindromic */
function isPalindromic(string) {
  // for loop that compares string[i] to string[length-(i+1)]
  var isPal = true;
  string = string.replaceAll(' ', '');
  var len = string.length;
  // console.log("no space str", string)
  for (var i = 0; i < len; i++) {
    if (string[i] === string[len - (i + 1)]) {
      continue;
    } else {
      // console.log("false char", i);
      isPal = false;
      break;
    }
  }
  return isPal;
}
