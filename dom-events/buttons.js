function handleClick(event) {
  console.log('button clicked');
  console.log(event);
  console.log(event.target);

}
// event listener: element = click button, funct = handleClick
var button = document.querySelector('.click-button');
button.addEventListener('click', handleClick, false);

// mouse-over funct
function handleMouseover(event) {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
}
// event listener: element = hover-button, event = mouseover
var mouseover = document.querySelector('.hover-button');
mouseover.addEventListener('mouseover', handleMouseover, false);

// dbl-click funct
function handleDoubleClick(event) {
  console.log('button double clicked');
  console.log(event);
  console.log(event.target);
}

// event listener: element = dbl click button, event = dblclick
var dblclick = document.querySelector('.double-click-button');
dblclick.addEventListener('dblclick', handleDoubleClick, false);
