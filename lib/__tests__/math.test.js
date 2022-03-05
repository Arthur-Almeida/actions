const math = require('../math');

test('should sum two numbers', () => {
  const expected = 7;
  const result = math.sum(5, 2);
  expect(result).toBe(expected);
});

test('should multiply two numbers', () => {
  const expected = 8;
  const result = math.mult(2, 4);
  expect(result).toBe(expected);
});

test('should returns the square root of a number', () => {
  const expected = 5;
  const result = math.sqrt(25);
  expect(result).toBe(expected);
});
