// sum.test.js
const sum = require('./sum');

test('suma 2 + 3 es 5', () => {
  expect(sum(2, 3)).toBe(5);
});

test('suma -1 + 1 es 0', () => {
  expect(sum(-1, 1)).toBe(0);
});
