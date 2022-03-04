/**
 * @param {number} numbers
 * @returns {number}
 */
export function sum(...numbers: number[]): number {
  return numbers.reduce((accum, current) => accum + current, 0);
}