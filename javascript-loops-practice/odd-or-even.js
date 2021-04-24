/* exported oddOrEven */
function oddOrEven(numbers) {
  var strArray = [];
  for (var i = 0; i < numbers.length; i++) {
    var num = numbers[i];
    if ((num % 2) === 0) {
      strArray.push('even');
    } else {
      strArray.push('odd');
    }
  }
  return strArray;
}
