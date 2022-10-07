import { naive } from '.';

const n = 10;
const result = [...Array(n)].map((_, i) => i);

test('it should pass', () => {
  expect(naive(n)).toEqual(result);
});
