/* exported sumAll */
function sumAll(numbers) {
  var sum = 0;
  for (var num of numbers) {
    sum += num;
  }
  return sum;
}
