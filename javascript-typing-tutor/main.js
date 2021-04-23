// function that is runs thru a list of spans and cross checks that
// the span matchs the corresponding index of a string: if yes, the

var spanList = document.querySelectorAll('span');
// console.log("span NodeList", spanList)

var counter = 0;
var string = 'me gusta sombrillas';

function count() {
  if (counter < (string.length)) {
    return true;
  } else {
    counter = 0;
    return false;
  }
}

function editor(event) {
  if (count() === true) {
    var input = event.key;
    input = input.toLowerCase();
    // console.log("input", input)
    var letter = spanList[counter];
    var nextLetter = spanList[counter + 1];
    // console.log("letter to test against", string[counter])
    if (input === string[counter]) {
      // change class of span to correct; counter ++
      // console.log("correct!")
      letter.className = 'correct';
      nextLetter.className = 'blk-ul';
      counter++;
    } else {
      // change class of span to wrong
      // console.log("nah")
      letter.className = 'wrong';
    }
  }
  // console.log("counter", counter)
}

// event listener: target- document; function editor
document.addEventListener('keydown', editor);
