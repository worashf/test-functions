

const stringFunction = require("./ stringLength.js")

test("string coount lenght for hello should be 4",()=>{
    //arrage
    let str = ""
    let {stringLength} =stringFunction
    //act
 
    let result = stringLength(str)
   //assert
    expect(result).toBe(str.length)
    .expect(result).toThrow("provide string with at list one characher and  maximum of ten char")
})

test("throw an error if the char is lessthan 1 and greater than 10",()=>{
    //arrage
    let str = "You must provide a   number"
    let {stringLength} =stringFunction
    //act
 
    let result = stringLength(str)
   //assert

expect(stringLength(str)).toThrow("You must provide a number");
})
