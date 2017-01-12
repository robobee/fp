var _ = require('ramda');

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
