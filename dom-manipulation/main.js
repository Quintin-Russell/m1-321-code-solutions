var hotButton = document.querySelector('.hot-button');
var clickCount = document.querySelector('.click-count');
var counter = 0;

// call-back counting function
function count(event) {
  counter++;
  // access node; DOM query--> get text content
  var text = clickCount.textContent;
  // use .replace()
  var newCounter = 'Clicks: ' + counter;
  var newText = text.replace(text, newCounter);
  // reassign
  clickCount.textContent = newText;

}
// event listener: element = hotButton; event = click
hotButton.addEventListener('click', count, false);
