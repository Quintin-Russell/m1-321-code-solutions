/* exported equal */
function equal(first, second) {
  var equiv = true;
  var longer;
  if (first.length >= second.length) {
    longer = first.length;
  } else {
    longer = second.length;
  }
  for (var i = 0; i < longer; i++) {
    if (first[i] === second[i]) {
      continue;
    } else {
      equiv = false;
      break;
    }
  }
  return equiv;
}
