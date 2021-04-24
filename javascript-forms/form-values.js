var contact = document.querySelector('#contact-form');

function funct(event) {
  event.preventDefault();
  var object = {};
  var name = contact.elements.name.value;
  object.name = name;
  var email = contact.elements.email.value;
  object.email = email;
  var message = contact.elements.message.value;
  object.message = message;
  console.log(object);
  contact.reset();
}
// event listener: submit event: target - form element; event - submit
contact.addEventListener('submit', funct);
