var $hiddenDiv = document.querySelector('.hidden');

var $mainpgButton = document.querySelector('.mainpg-button');

// function that changes the .hidden display prop to flex
function modalRev(event) {
  $hiddenDiv.className = 'overlay flex';
}
// event listener that targets the 'modal-button'
$mainpgButton.addEventListener('click', modalRev, false);
