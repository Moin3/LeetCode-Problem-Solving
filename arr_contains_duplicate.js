// https://leetcode.com/problems/contains-duplicate/?envType=study-plan&id=data-structure-i
let arr=[1,2,3,1]
var containsDuplicate = function(nums) {
    let newSet=new Set(nums)
    if(nums.length!==newSet.size){
        return true
    }else{
        return false
    }
};
console.log(containsDuplicate(arr))