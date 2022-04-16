//Using map, write a function that takes in the states variable and returns an array of URLs of the form https://example.com/<urlified form>.
let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

function superURLify (element) {
    return element.toLowerCase().split(/\s+/g).join("-");
  }

function superFunc (elements) {
  return elements.map(element => "https://example.com/" + superURLify(element));
}
console.log(superFunc(states));


// Self - guided second attempt - Map multiplier
  [1, 2, 3, 4].map( n => n * n});

  // URLs - Imperative version
  function imperativeUrls(elements) {
      let urls = [];
      elements.forEach(function(element) {
        urls.push(urlify)element));
      });
      return urls;
  }
  console.log(imperativeUrls(states));

// Singles: Imperative version
function imperativeSingles(elements) {
  let singles = [];
  elements.forEach(function(element) {
    if (element.split(/\s+/g).length === 1) {
      singles.push(element)
    }
  }
  return singles;
}
console.log(imperativeSingles(states));

// urls: Imperative version
function imperativeUrls(elements) {
  let urls = [];
  elements.forEach(function(element) {
    urls.push(urlify(element));
  });
  return urls;
}
console.log(imperativeUrls(states));

// Numbers for reduce functional
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// sum: Imperative solution
function imperativeSum(elements) {
  let total = 0;
  elements.forEach(function(n) {
    total += n;
  });
  return total
  }
console.log(imperativeSum(numbers));


// LENGTHS: IMPERATIVE solution
function imperativeLengths(elements) {
  let lengths = {};
  elements.forEach(function(element) {
    lengths[element] = element.length;
  });
    return lengths;
  }
  console.log(imperativeLengths(states));

  // Makes the phrase LOUDER. - FUNCTIONAL
  this.louder = function louder() {
    let loudContent = this.content.toUpperCase();
      return loudContent;
  }


  // Defines a TranslatedPhrase object.
  function TranslatedPhrase(content, translation) {
    this.content = content;
    this.translation = translation;

    // Returns a TranslatedPhrase object.
    this.processedContent = function processedContent() {
      return this.processor(this.translation);
    }
  }

  TranslatedPhrase.prototype = new Phrase();

  // Returns last element of an array.
  Array.prototype.last = function() {
    return this[this.length - 1];
  }
// Returns true if blank, including newline, tab, or other whitespace. False otherwise.
  String.prototype.blank = function() {
    return !!(this.match(/^\s*$/g));
    }
