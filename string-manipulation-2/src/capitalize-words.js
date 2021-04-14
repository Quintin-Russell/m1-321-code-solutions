/* exported capitalizeWords */
function capitalizeWords(string) {
  var splitArray = string.split(' ');
  var finalStr = '';
  var word;
  var formattedArray = [];
  for (word of splitArray) {
    var lwrcase = word.toLowerCase();
    var firstChar = lwrcase[0].toUpperCase();
    var toReplace = lwrcase[0];
    lwrcase = lwrcase.replace(toReplace, firstChar);
    formattedArray.push(lwrcase);
  }
  for (word of formattedArray) {
    var addStr = ' ' + word;
    finalStr += addStr;
  }
  return finalStr.trim();
}
