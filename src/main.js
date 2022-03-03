/**
 * @param {number} numbers
 * @returns {number}
 */
export function sum(...numbers) {
  return numbers.reduce((accum, current) => accum + current, 0);
}