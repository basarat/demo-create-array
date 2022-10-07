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

export function wrong(n: number) {
  return Array(n).map((_, i) => i);
}

export function fixed(n: number) {
  return Array(n).fill('').map((_, i) => i);
}

export function explicit(n: number) {
  return Array.from({ length: n }, (_, i) => i);
}

export function modern(n: number) {
  return [...Array(n)].map((_, i) => i);
}
