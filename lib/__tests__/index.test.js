const lib = require('../');

test('should sum two numbers', function() {
  const expected = 7;
  const result = lib.sum(5, 2);
  expect(result).toBe(expected);
});

test('should multiply two numbers', function() {
  const expected = 8;
  const result = lib.mult(2, 4);
  expect(result).toBe(expected);
});
