// const result = "a".concat(("b").concat("c"));
// Associative law
// const result = [1, 2].concat(([3, 4]).concat([5, 6]));

const Sum = x =>
({
  x,
  concat: ({ x: y }) =>
    Sum(x + y),
  inspect: () =>
    `Sum(${x})`
})

const All = x =>
({
  x,
  concat: ({ x: y }) =>
    All(x && y),
  inspect: () =>
    `All(${x})`
})

const First = x =>
({
  x,
  concat: _ =>
    First(x),
  inspect: () =>
    `First(${x})`
})

// const result = Sum(1).concat(Sum(2)).concat(Sum(5));

// true && false // false
// true && true // true

const result = All(true).concat(All(true)).concat(All.empty()); // All(false)

// const result = First("blah").concat(First("ice cream")); // First("blah")

console.log(result);
