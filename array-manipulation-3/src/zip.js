/* exported zip */
function zip(first, second) {
  var finalArray = [];
  var lenFinal;
  // find length of shorter array --> = length of final array
  if (first.length <= second.length) {
    lenFinal = first.length;
  } else {
    lenFinal = second.length;
  }
  // console.log(lenFinal)
  // for loop that loops through both arrays and maps the corresponding indexes to each other in a final array
  for (var i = 0; i < lenFinal; i++) {
    var subArray = [];
    subArray.push(first[i]);
    subArray.push(second[i]);
    finalArray.push(subArray);
    // console.log("subArray", subArray)
  }
  // return finalArray
  return finalArray;
}
