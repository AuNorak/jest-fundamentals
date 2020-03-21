const { sum, subtract } =  require('./math')

let result, expected

result = sum(4,5)
expected = 9

expect(result).toBe(expected)

result = subtract(9,5)
expected = 4

expect(result).toBe(expected)

function expect(actual) {
  return {
    toBe: (expected) => {
      if (actual !== expected){
        throw new Error(`${result} is not equal to ${expected} \n`)
      }
    }
  }
}
