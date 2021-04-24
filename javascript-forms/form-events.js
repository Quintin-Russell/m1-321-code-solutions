function handleFocus(event) {
  console.log('focus event fired');
  console.log('handleFocus target', event.target.name);
}

function handleBlur(event) {
  console.log('blur event fired');
  console.log('handleBlur target', event.target.name);
}

function handleInput(event) {
  console.log('handleInput target name', event.target.name);
  console.log('handleInput target value', event.target.value);
}

var input1 = document.forms[0].elements.name;
var input2 = document.forms[0].elements.email;
var txtA = document.forms[0].elements.message;
console.log('form CTRL elements', input1, input2, txtA);
// event listeners: input1
input1.addEventListener('focus', handleFocus);
input1.addEventListener('blur', handleBlur);
input1.addEventListener('input', handleInput);
// event listeners: input2
input2.addEventListener('focus', handleFocus);
input2.addEventListener('blur', handleBlur);
input2.addEventListener('input', handleInput);
// event listeners: txtA
txtA.addEventListener('focus', handleFocus);
txtA.addEventListener('blur', handleBlur);
txtA.addEventListener('input', handleInput);
