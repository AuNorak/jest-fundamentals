const { sum, subtract } =  require('./math')

let result, expected

result = sum(4,5)
expected = 9

if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected} \n`)
}

result = subtract(9,5)
expected = 4

if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected} \n`)
}
