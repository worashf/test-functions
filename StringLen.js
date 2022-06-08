
const stringFunction ={
    stringLength:(str)=>{
    let count = str.split('').length
        if(count <1 || count >10){
            console.log(count)
  throw new Error(" You must provide a   number");
        }
    return count
},
checkLengthRange:(str)=>{

}
}
module.exports =stringFunction


