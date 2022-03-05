const lib = require('../');

test('should sum two numbers', function() {
  const expected = 7;
  const result = lib.sum(5, 2);
  expect(result).toBe(expected);
});
