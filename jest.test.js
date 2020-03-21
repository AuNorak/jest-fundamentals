const { add, subtract, asyncAdd, asyncSubtract } =  require('./math')

test('add 4 and 5', () => {
  const actual = add(4, 5)
  const expected = 9
  expect(actual).toBe(expected)
})

test('expects to fail', () => {
  const actual = subtract(9, 5)
  const expected = 5
  expect(actual).toBe(expected)
})

test('subtract 5 from 9', () => {
  const actual = subtract(9, 5)
  const expected = 4
  expect(actual).toBe(expected)
})

test('async add and subtract', async () => {
  const actual = await asyncAdd(await asyncSubtract(9,5), 10)
  const expected = 14
  expect(actual).toBe(expected)
})
