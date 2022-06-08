class Calculator {
static addNums=(num1, num2) => num1 + num2;

 static substractNums=(num1, num2) => num1 - num2

 static multiplyNums=(num1, num2) => num1 * num2

 static divideNums =(num1, num2) => {
   let value;
   if (num2) {
     value = num1 / num2;
   }
   return value;
 }
}
module.exports = Calculator;
