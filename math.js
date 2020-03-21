const add = (a, b) => a + b

const subtract = (a, b) => a - b

const asyncAdd = (a, b) => {
  const callback = (resolve, reject) => {
    setTimeout(() => {
      resolve(add(a, b))
    }, 250)
  }
  return new Promise(callback)
}

const asyncSubtract = (a, b) => {
  const callback = (resolve, reject) => {
    setTimeout(() => {
      resolve(subtract(a, b))
    }, 250)
  }
  return new Promise(callback)
}

module.exports = { add, subtract, asyncAdd, asyncSubtract }
