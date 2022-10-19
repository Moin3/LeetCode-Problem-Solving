
// https://leetcode.com/problems/two-sum/

var twoSum = function(nums, target) {
    let indices=[]
    for(let i=0;i<nums.length;i++){
        for(let j=1;j<nums.length;j++){
            if(i!==j){
                if(nums[i]+nums[j] === target){
                    indices=[i,j]
                }
            }
        }
    }
   return indices
    
};
console.log(twoSum([3,3,11,15],6))