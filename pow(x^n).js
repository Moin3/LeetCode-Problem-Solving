// https://leetcode.com/problems/powx-n/

var myPow = function(x, n) {
    if(typeof n==="number"){
        if(x>-100 && x<100){
            if(n >= -Math.pow(2,31) && n<= Math.pow(2,31)-1){
                if(Math.pow(x,n) >= -Math.pow(10,4) && Math.pow(x,n) <= Math.pow(10,4)){
                   return Math.pow(x,n) 
                }
            }
        }
    }
    return 0
};
console.log(myPow(2,3))