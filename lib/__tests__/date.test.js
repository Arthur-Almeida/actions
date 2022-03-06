const date = require('../date');

test('should date.today be an instance of Date', () => {
  expect(date.today).toBeInstanceOf(Date);
});
