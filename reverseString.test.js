const reverseString = require("./reverseString")

test("reversed of hello is olleh", () =>{
    //arrage
  let str ="hello";
  let reversed;
  //act
  reversed = reverseString(str);
  //assert
  expect(reversed).toBe("olleh")

})