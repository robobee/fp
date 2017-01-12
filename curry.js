const _ = require("ramda");

// var add = function(x) {
//   return function(y) {
//     return x + y;
//   };
// };

const add = x => y => x + y;

const inc = add(1);
const addTen = add(10);

console.log(inc(2));
console.log(addTen(1));

const match = _.curry((what, str) => {
  return str.match(what);
});

const replace = _.curry((what, replacement, str) => {
  return str.replace(what, replacement);
});

const filter = _.curry((f, ary) => {
  return ary.filter(f);
});

const map = _.curry((f, ary) => {
  return ary.map(f);
});

console.log(match(/\s+/g, 'hello world'));
console.log(match(/\s+/g)('hello world'));

const hasSpaces = match(/\s+/g);
console.log(hasSpaces('hello world'));
console.log(hasSpaces('spaceless'));

console.log(filter(hasSpaces, ['tori_spelling', 'tori amos']));

const findSpaces = filter(hasSpaces);

console.log(findSpaces(['tori_spelling', 'tori amos']));

const noVowels = replace(/[aeiouy]/ig);

const censored = noVowels("*");

console.log(censored("Chocolate Rain"));

const getChildren = x =>
  x.childNodes

const allTheChildren = map(getChildren);

const allTheChildrenSimple = elements =>
  elements.map(getChildren)

const allTheChildrenLodash = elements =>
  _.map(elements, getChildren)

// Exercise 1
//==============
// Refactor to remove all arguments by partially applying the function.

// var words = function(str) {
//   return _.split(' ', str);
// };

const words = _.split(' ');

console.log(words("hello functional world"));

// Exercise 1a
//==============
// Use map to make a new words fn that works on an array of strings.

const sentences = _.map(words);

console.log(sentences(['hello functional world', 'bye bye ugly imperative code']));

// Exercise 2
//==============
// Refactor to remove all arguments by partially applying the functions.

const match = _.curry((what, string) => string.match(what));

// var filterQs = function(xs) {
//   return _.filter(function(x) {
//     return match(/q/i, x);
//   }, xs);
// };

const filterQs = _.filter(match(/q/i));

console.log(filterQs(["quality", "random", "query"]));
