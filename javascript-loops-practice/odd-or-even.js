/* exported oddOrEven */
function oddOrEven(numbers) {
  var strArray = [];
  for (var num of numbers) {
    if ((num % 2) === 0) {
      strArray.push('even');
    } else {
      strArray.push('odd');
    }
  }
  return strArray;
}
