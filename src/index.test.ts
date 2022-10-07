import { explicit, fixed, modern, naive, wrong } from '.';

const n = 10_000_000;
const result = [...Array(n)].map((_, i) => i);

test('naive', () => {
  expect(naive(n)).toEqual(result);
});

test.skip('wrong', () => { // skip cause takes too long
  expect(wrong(n)).toEqual(result);
});

test('fixed', () => {
  expect(fixed(n)).toEqual(result);
});

test('explicit', () => {
  expect(explicit(n)).toEqual(result);
});

test('modern', () => {
  expect(modern(n)).toEqual(result);
});
