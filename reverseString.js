
const reverseString =(str)=>{
    let stringArray = str.split('');
    let reversed =[]
    for(let i=stringArray.length-1;i>=0;i--){
       reversed.push(stringArray[i])
    }

    return reversed.join('')
}

module.exports =reverseString