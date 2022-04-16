//   Example: "North Dakota" -> "north-dakota"
let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// Returns a URL-friendly version of a string.
function urlify(string) {
  return string.toLowerCase().split(/\s+/).join("-");
}

// urls: Functional version
function functionalUrls(elements) {
  return elements.map(element => urlify(element));
}
console.log(functionalUrls(states));


//Singles: Functional version.
function functionalSingles(elements) {
  return elements.filter(element => element.split(/\s+/g).length === 1);
}

console.log(functionalSingles(states));

// Returns the Dakotas using string.include().
function includeDakota(states) {
  return states.filter(state => state.includes("Dakota"));
}
 console.log(includeDakota(states));


// Returns the Dakotas using regex .split array === 2.
function includeDakotaSplit(states) {
  return states.filter(state => state.split(/\s+/).length === 2);
}
console.log(includeDakotaSplit(states));

// sum: Functional solution
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function functionalSum(elements) {
  return numbers.reduce((total, n) => {return total += n; });
  }
console.log(functionalSum(numbers));

// lengths : Functional solution
function functionalLengths(elements) { return elements.reduce((lengths, element) => { lengths[element] = element.length; return lengths;}, {});
}
  console.log(functionalLengths(states));


  // Using reduce, write a function that returns the product of all the elements in an array. Hint: Where += adds, *= multiplies.

  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  function arrayProduct(elements) {
    return numbers.reduce((total, n) => { total *= n; return total; });
}
  console.log(arrayProduct(numbers));
