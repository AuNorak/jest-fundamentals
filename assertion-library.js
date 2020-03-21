const chalk = require('chalk')

async function test(title, callback) {
  try {
    await callback()
    console.log(chalk.green(`PASSED: ${title}`))
  } catch (error) {
    console.error(chalk.red(`FAILED: ${title}`))
    console.error(error)
  }
}

function expect(actual) {
  return {
    toBe: (expected) => {
      if (actual !== expected){
        throw new Error(`${actual} is not equal to ${expected} \n`)
      }
    }
  }
}

global.expect = expect
global.test = test
