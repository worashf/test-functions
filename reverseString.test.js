const reverseString = require('./reverseString');

test('reversed of hello is olleh', () => {
  // arrage and act
  const str = 'hello';
  const reversed = reverseString(str);

  // assert
  expect(reversed).toBe('olleh');
});