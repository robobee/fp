const { Map } = require("immutable-ext");

// 1 + 0 = 1
// x + 0 = x
// 0 is a neutral element - then the semigroup is also a monoid

const Sum = x =>
({
  x,
  concat: ({ x: y }) =>
    Sum(x + y),
  inspect: () =>
    `Sum(${x})`
})

// neutral element
Sum.empty = () => Sum(0);

// const res = Sum.empty().concat(Sum(1).concat(Sum(2)));
// console.log(res);

const All = x =>
({
  x,
  concat: ({ x: y }) =>
    All(x && y),
  inspect: () =>
    `All(${x})`
})

All.empty = () => All(true)

// const res = All(true).concat(All(true)).concat(All.empty());
// console.log(res);

const First = x =>
({
  x,
  concat: _ =>
    First(x),
  inspect: () =>
    `First(${x})`
})

// First(?).concat(First('hello'));
// No way to define newtral element - semigroup and not monoid

const sum = xs =>
  xs.reduce((acc, x) => acc + x, 0)

// console.log(sum([1, 2, 3]));
// console.log(sum([]));

const all = xs =>
  xs.reduce((acc, x) => acc && x, true)

// console.log(all([true, true, false]));
// console.log(all([]));

const first = xs =>
  xs.reduce((acc, x) => acc)

// console.log(first([1, 2, 3]));
// console.log(first([])); // errors

// reduce is not a safe operation for semigroups, only for monoids
