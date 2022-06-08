const stringFunction = require('./StringLen.js');

test('string coount lenght for hello should be 4', () => {
  // arrage
  const str = '';
  const { stringLength } = stringFunction;
  // act

  const result = stringLength(str);
  // assert
  expect(result).toBe(str.length)
    .expect(result).toThrow('provide string with at list one characher and  maximum of ten char');
});

test('throw an error if the char is lessthan 1 and greater than 10', () => {
  // arrage
  const str = 'You must provide a   number';
  const { stringLength } = stringFunction;
  // act

  const result = stringLength(str);
  // assert

  expect(result).toThrow('You must provide a number');
});
