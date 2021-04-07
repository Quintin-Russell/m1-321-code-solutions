/* exported getDescriptionOfPerson */
function getDescriptionOfPerson(person) {
  var name = person.name;
  var job = person.occupation;
  var birthPlace = person.birthPlace;
  var sentence = name + ' is a ' + job + ' from ' + birthPlace + '.';
  return sentence;
}
