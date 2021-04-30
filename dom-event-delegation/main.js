// funct for eventListener
function tLFunct(event) {
  console.log('target', event.target);
  console.log('tagName', event.target.tagName);
}

// event listener on .task-list
var taskList = document.querySelector('.task-list');
taskList.addEventListener('click', tLFunct);
taskList.addEventListener('click', function (e) {
  if (e.target && (e.target.tagName === 'BUTTON')) {
    var closest = event.target.closest('.task-list-item');
    console.log('closest', closest);
    closest.remove();
  }
});
