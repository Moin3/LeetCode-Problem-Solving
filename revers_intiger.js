// https://leetcode.com/problems/reverse-integer/

let a=1534236469


var reverse = function(x) {
    let str=x.toString()
    let strArr=[]
    for(let i=str.length-1;i>=0;i--){
       
    if(x>0){
        strArr.push(str[i])
    }
       
    }
    for(let j=str.length-1;j>0;j--){
        
        if(x<0){
            strArr[0]='-'
            strArr.push(str[j])
        }
        
     }
    
    let reverseStr=strArr.join('')
    let reverseNum=Number(reverseStr)
    if(reverseNum>(Math.pow(2,31)-1) || reverseNum <Math.pow(-2,31)){
        return 0
    }
    return reverseNum
};
console.log(reverse(a))