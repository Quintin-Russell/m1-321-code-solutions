// goals 2 event listeners that update value of backgorund color prop of element with '.lightbulb'
// to grey and '.container' to black

// isolate elements w/ class '.lightbulb' and '.container'
var container = document.querySelector('.container');
var lightbulb = document.querySelector('.lightbulb');
// function that changes background color to grey or back to rgb(255, 239, 95)
function changeBackground(event) {
  // change container
  var bkcolor = container.className;
  var other = lightbulb.className;
  if ((bkcolor.includes('bkgrdcolor-white')) === true) {
    var val = bkcolor.replace('bkgrdcolor-white', 'bkgrdcolor-black');
    container.className = val;
  } else {
    var val1 = bkcolor.replace('bkgrdcolor-black', 'bkgrdcolor-white');
    container.className = val1;
  }
  // change lightbulb
  if ((other.includes('bkgrdcolor-yel')) === true) {
    var newother = other.replace('bkgrdcolor-yel', 'bkgrdcolor-gray');
    lightbulb.className = newother;
  } else {
    var newother1 = other.replace('bkgrdcolor-gray', 'bkgrdcolor-yel');
    lightbulb.className = newother1;
  }
}
// function that changes background color to black

// 2 event listeners that are triggered on a click of the lightbulb
lightbulb.addEventListener('click', changeBackground, false);
