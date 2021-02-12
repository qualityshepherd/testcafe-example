/**
 * helper functions for tests that don't fit anywhere else
 * eg. to extend Testcafe functionality
 */

/**
 * Because Testcafe refuses to add a `beforeAll` :face_with_rolling_eyes:
 *
 * Usage:
 * fixture`My Stuff`.beforeEach(once(async (t) => {
 *   do stuff here...
 * }))
 *
 * @param  {Function} fn
 * @param  {any}   args
 * @return {function}
 */
export function once (fn, args) {
  let executed = false
  return (args) => {
    if (!executed) {
      executed = true
      if (typeof fn === 'function') {
        return fn(args)
      } else {
        throw new Error('fn is not a function')
      }
    }
  }
}
