
const Calculator = require("./Calculator")

describe("calculator testing",()=>{

    test("the sum of num1 and num2 is sum",()=>{

        //arrage
        let sum =0;
        let num1 =3;
        let num2=5;
        //act
        sum =Calculator.addNums(num1,num2);
        //assert
        expect(sum).toBe(8);
    })
    
    // subctract nums
    test("the difference of num1 and num2 is difference",()=>{
    
        //arrage
        let diference;
        let num1 =6;
        let num2=5;
        //act
        diference=Calculator.substractNums(num1,num2);
        //assert
        expect(diference).toBe(1);
    })
    
    
    //multiply nums
    test("the multiplcity of num1 and num2 is multiple",()=>{
    
        //arrage
        let multiple;
        let num1 =3;
        let num2=5;
        //act
        multiple =Calculator.multiplyNums(num1,num2);
        //assert
        expect(multiple).toBe(15);
    })
    
    // divide nums
    test("the division of num1 by num2 is value",()=>{
    
        //arrage
        let value;
        let num1 =10;
        let num2=5;
        //act
        value =Calculator.divideNums(num1,num2);
        //assert
        expect(value).toBe(2);
    })
})