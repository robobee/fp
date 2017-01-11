// const nextCharForNumberString = str => {
//   const trimmed = str.trim()
//   const number = parseInt(trimmed)
//   const nextNumber = number + 1
//   return String.fromCharCode(nextNumber)
// }

// const nextCharForNumberString = str =>
//   String.fromCharCode(parseInt(str.trim()) + 1)

// identity functor
const Box = x =>
({
  map: f => Box(f(x)),
  inspect: f => `Box(${x})`,
  fold: f => f(x)
})

const nextCharForNumberString = str =>
  Box(str)
  .map(s => s.trim())
  .map(r => new Number(r))
  .map(i => i + 1)
  .map(i => String.fromCharCode(i))
  .fold(c => c.toLowerCase())

const result = nextCharForNumberString('  64  ')

console.log(result);
