// input: start = integer; end = integer that is >= start
// return object that has 4 properties:
// total: sum of all integers
// odds - array of all odd integers
// evens - same as odds but with even numbers
// range - array containing all integers from start to end
// average - average of all ints from start to end

// Plan: for loop that starts at start and incriments by 1: adds each digit to range array --> runs digit thru if/else (digit % 2) and adds to even or odd array
// once range array is good, for loop that adds all integers and assigns it to total
// get average: total / (range.length)

function getRangeReport(start, end) {
  var rangeArray = [];
  var oddArray = [];
  var evenArray = [];
  var finalObj = {};
  var objKeys = ['range', 'evens', 'odds', 'total', 'average'];
  var objVals = [];
  for (var i = start; i <= end; i++) {
    rangeArray.push(i);
    // if else loop: even or odd
    if ((i % 2) === 0) {
      evenArray.push(i);
    } else {
      oddArray.push(i);
    }
  }
  // push new arrays to ObjVals
  objVals.push(rangeArray);
  objVals.push(evenArray);
  objVals.push(oddArray);
  // console.log("rangeArray", rangeArray)
  // console.log("evenArray", evenArray)
  // console.log("oddArray", oddArray)
  // for loop that adds all range values and assigns it to total
  var total = 0;
  var val;
  for (val of rangeArray) {
    total += val;
  }
  // console.log("total", total)
  objVals.push(total);
  // get average: total / (range.length)
  var average = total / (rangeArray.length);
  // console.log("average", average)
  objVals.push(average);
  // console.log("objKeys", objKeys);
  // console.log("objVals", objVals);
  // construct object
  for (var I = 0; I < objKeys.length; I++) {
    var key = objKeys[I];
    // console.log(key)
    var value = objVals[I];
    // console.log(value)
    finalObj[key] = value;
  }
  // console.log("finalObj", finalObj)
  return finalObj;
}

var start = 1;
var end = 1;
getRangeReport(start, end);
