const Calculator = require('./Calculator');

describe('calculator testing', () => {
  test('the sum of num1 and num2 is sum', () => {
    // arrage
    let sum = 0;
    const num1 = 3;
    const num2 = 5;
    // act
    sum = Calculator.addNums(num1, num2);
    // assert
    expect(sum).toBe(8);
  });

  // subctract nums
  test('the difference of num1 and num2 is difference', () => {
    // arrage

    const num1 = 6;
    const num2 = 5;
    // act
    const diference = Calculator.substractNums(num1, num2);
    // assert
    expect(diference).toBe(1);
  });

  // multiply nums
  test('the multiplcity of num1 and num2 is multiple', () => {
    // arrage

    const num1 = 3;
    const num2 = 5;
    // act
    const multiple = Calculator.multiplyNums(num1, num2);
    // assert
    expect(multiple).toBe(15);
  });

  // divide nums
  test('the division of num1 by num2 is value', () => {
    // arrage

    const num1 = 10;
    const num2 = 5;
    // act
    const value = Calculator.divideNums(num1, num2);
    // assert
    expect(value).toBe(2);
  });
});