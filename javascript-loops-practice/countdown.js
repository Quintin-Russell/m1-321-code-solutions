/* exported countdown */
function countdown(number) {
  var ctdown = [];
  while (number >= 0) {
    ctdown.push(number);
    number--;
  }
  return ctdown;
}
