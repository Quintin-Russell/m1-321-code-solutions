// goals 2 event listeners that update value of backgorund color prop of element with '.lightbulb'
// to grey and '.container' to black

// isolate elements w/ class '.lightbulb' and '.container'
var container = document.querySelector('.container');
// console.dir(container)
var lightbulb = document.querySelector('.lightbulb');
// function that changes background color to grey or back to rgb(255, 239, 95)
function changeBackground(event) {
  // change container
  var bkcolor = container.attributes;
  // console.log('bkcolor', bkcolor)
  bkcolor = bkcolor.value;
  // console.log("bkcolor value", bkcolor)
  if (bkcolor === 'rgb(255, 239, 95)') {
    bkcolor = 'gray';
  } else {
    bkcolor = 'rgb(255, 239, 95)';
  }
}
// function that changes background color to black

// 2 event listeners that are triggered on a click of the lightbulb
lightbulb.addEventListener('click', changeBackground, false);
