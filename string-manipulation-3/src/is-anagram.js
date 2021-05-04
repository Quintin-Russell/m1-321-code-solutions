/* exported isAnagram */
function isAnagram(firstString, secondString) {
  var isAna = true;
  // remove spaces from strings
  firstString = firstString.replaceAll(' ', '');
  secondString = secondString.replaceAll(' ', '');
  // strings to arrays --> order arrays -- compare index-for-index
  var firstArray = firstString.split('');
  var secondArray = secondString.split('');
  firstArray.sort();
  secondArray.sort();
  for (var i = 0; i < firstString.length; i++) {
    if (firstArray[i] === secondArray[i]) {
      continue;
    } else {
      isAna = false;
      break;
    }
  }
  return isAna;
}
