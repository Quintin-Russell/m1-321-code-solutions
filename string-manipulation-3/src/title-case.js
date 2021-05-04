/* exported titleCase */
function titleCase(title) {
  var finalStr = '';
  // break title into sub-strings
  title = title.split(' ');
  // console.log("title split:", title);

  // itterate thru substrings, if word is 1st, 1st char = capitalized ; if sub string === and, or, nor, but, a, an, the, as, at, by, for, in, of, on, per, and to
  // lowercase; if substring.toLowerCase() === "javascript" --> "JavaScript"; if substring.toUpperCase() === "API" --> API; if substring.indexOf("-") != -1
  // --> var hyphen = substring.indexOf("-"), substring[hyphen+1] = substring[hyphen+1].toUpperCase()
  var word;
  var counter = 0;
  for (word of title) {
    word = word.toLowerCase();
    // console.log("word", word)

    if (word === 'javascript') {
      word = 'JavaScript';
      // console.log("JS worked: ", word)
      finalStr += word;
      // if substring.toUpperCase() === "API" --> API
    } else if (word === 'javascript:') {
      word = 'JavaScript:';
      // console.log("JS worked: ", word)
      finalStr += word;
    } else if (word === 'api') {
      word = 'API';
      // console.log("api worked: ", word)
      finalStr += word;
      // if substring.indexOf("-") != -1
      // --> var hyphen = substring.indexOf("-"), substring[hyphen+1] = substring[hyphen+1].toUpperCase()
    } else if (word === title[0]) {
      word = word.replace(word[0], word[0].toUpperCase());
      // console.log("cap worked: ", word)
      finalStr += word;
      // if title[counter - 1].include(":") === true: word = word.replace(word[0], word[0].toUpperCase())
    } else if (title[counter - 1].includes(':') === true) {
      word = word.replace(word[0], word[0].toUpperCase());
      finalStr += word;
      // if sub string === and, or, nor, but, a, an, the, as, at, by, for, in, of, on, per, and to --> lowercase
    } else if ((word === 'and') || (word === 'or') || (word === 'nor') || (word === 'but') || (word === 'a') || (word === 'an') || (word === 'the') || (word === 'as') ||
      (word === 'at') || (word === 'by') || (word === 'for') || (word === 'in') || (word === 'of') || (word === 'on') || (word === 'per') || (word === 'to')) {
      finalStr += word;
      // if substring.toLowerCase() === "javascript" --> "JavaScript"
      // if substring.indexOf("-") != -1
      // --> var hyphen = substring.indexOf("-"), substring[hyphen+1] = substring[hyphen+1].toUpperCase()
    } else if (word.indexOf('-') !== -1) {
      word = word.replace(word[0], word[0].toUpperCase());
      var hyphen = word.indexOf('-');
      word = word.replace(word[hyphen + 1], word[hyphen + 1].toUpperCase());
      // console.log("cap worked: ", word)
      finalStr += word;
      // else: substring[0] = substring[0].toUpperCase()
    } else {
      word = word.replace(word[0], word[0].toUpperCase());
      // console.log("cap worked: ", word)
      finalStr += word;
    }
    counter++;
    finalStr += ' ';
  }
  finalStr = finalStr.trim();
  // console.log("finalStr: ", finalStr)
  return finalStr;
}
