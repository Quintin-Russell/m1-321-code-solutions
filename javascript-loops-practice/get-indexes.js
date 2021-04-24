/* exported getIndexes */
function getIndexes(array) {
  var newArray = [];
  var lenArray = array.length;
  for (let i = 0; i < lenArray; i++) {
    newArray.push(i);
  }
  return newArray;
}
