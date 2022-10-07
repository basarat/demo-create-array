/** 
 * Create an array of n numbers [0, n-1]
 **/

export function naive(n: number) {
  const result: number[] = [];
  for (let index = 0; index < n; index++) {
    result.push(index);
  }
  return result;
}