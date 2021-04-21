/* exported getWords */
function getWords(string) {
  var returnArray = [];
  if (string) {
    returnArray = string.split(' ');
  }
  return returnArray;
}
