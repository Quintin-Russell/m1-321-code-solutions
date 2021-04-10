/* exported getStudentNames */
function getStudentNames(students) {
  var finalArray = [];
  var obj;
  for (obj of students) {
    finalArray.push(obj.name);
  }
  return finalArray;
}
