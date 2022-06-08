const Capilatize = require("./Capitalize")

test("Capilatize the first charactor of the sting hello => Hello",()=>{
//arrage and act
let capilized = Capilatize("hello");
expect(capilized).toBe("Hello")
})