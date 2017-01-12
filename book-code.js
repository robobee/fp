// Cases for purity
// Cacheable
// ex 1
var squareNumber = memoize(function(x) {
  return x * x;
});

squareNumber(4);
//=> 16

squareNumber(4); // returns cache for input 4
//=> 16

squareNumber(5);
//=> 25

squareNumber(5); // returns cache for input 5
//=> 25

var memoize = function(f) {
  var cache = {};

  return function() {
    var arg_str = JSON.stringify(arguments);
    cache[arg_str] = cache[arg_str] || f.apply(f, arguments);
    return cache[arg_str];
  };
};

// ex 2
var pureHttpCall = memoize(function(url, params) {
  return function() {
    return $.getJSON(url, params);
  };
});

//$.getJSON('https://api.github.com/users/robobee');
var me = pureHttpCall('https://api.github.com/users/robobee');
var prof = pureHttpCall('https://api.github.com/users/Praffesor');
// me();
// prof();
// me();

// Portable / Self-Documenting
//impure
var signUp = function(attrs) {
  var user = saveUser(attrs);
  welcomeUser(user);
};

var saveUser = function(attrs) {
    var user = Db.save(attrs);
    ...
};

var welcomeUser = function(user) {
    Email(user, ...);
    ...
};

//pure
var signUp = function(Db, Email, attrs) {
  return function() {
    var user = saveUser(Db, attrs);
    welcomeUser(Email, user);
  };
};

var saveUser = function(Db, attrs) {
    ...
};

var welcomeUser = function(Email, user) {
    ...
};
// Testable
// Reasonable
// Reasonable
// Many believe the biggest win when working with pure functions is referential transparency.
// A spot of code is referentially transparent when it can be substituted for its evaluated value
// without changing the behavior of the program.
// example at https://drboolean.gitbooks.io/mostly-adequate-guide/content/ch3.html#the-case-for-purity
var Immutable = require('immutable');

var decrementHP = function(player) {
  return player.set('hp', player.get('hp') - 1);
};

var isSameTeam = function(player1, player2) {
  return player1.get('team') === player2.get('team');
};

var punch = function(player, target) {
  return isSameTeam(player, target) ? target : decrementHP(target);
};

var jobe = Immutable.Map({
  name: 'Jobe',
  hp: 20,
  team: 'red',
});
var michael = Immutable.Map({
  name: 'Michael',
  hp: 20,
  team: 'green',
});

punch(jobe, michael);
//=> Immutable.Map({name:'Michael', hp:19, team: 'green'})


// Parallel Code
// Finally, and here's the coup de grâce, we can run any pure function in parallel since it does not need access to
// shared memory and it cannot, by definition, have a race condition due to some side effect.

