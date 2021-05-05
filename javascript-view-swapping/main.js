// query DOM for .tab-container, . tab, .view
var $tabContainer = document.querySelector('.tab-container');
var $tab = document.querySelectorAll('.tab');
// console.log($tab)
var $view = document.querySelectorAll('.view');
// console.log($view)

// callback function
function changeView(event) {
  // console.log("changView fired")
  var targetDV = event.target.getAttribute('data-view');
  // console.log("targetDV",targetDV)
  var text;
  for (text of $view) {
    var textDV = text.getAttribute('data-view');
    // console.log("textDV", textDV)
    if (textDV === targetDV) {
      text.className = 'view';
      // console.log(text, " className = view")
    } else {
      text.className = 'view hidden';
      // console.log(text, " className = hidden")
    }
  }
}
// event listener: funct = if event.target.matches(".tab")
$tabContainer.addEventListener('click', function (e) {
  // check to see if e.target is a tab --> loop thru tabs and change target to active & all others to inactive
  if (e.target.matches('.tab')) {
    var tab;
    for (tab of $tab) {
      if (e.target === tab) {
        tab.className = 'tab active';
      } else {
        tab.className = 'tab inactive';
      }
    }
  }
});
$tabContainer.addEventListener('click', changeView);
