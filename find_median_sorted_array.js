
// https://leetcode.com/problems/median-of-two-sorted-arrays/

var findMedianSortedArrays = function(nums1, nums2) {
    let mergedArray=[...nums1,...nums2];
    mergedArray.sort((a,b)=>a-b)
    
    let halfArraylengthForOdd=Math.ceil(((mergedArray.length)/2))
    let halfArraylengthForEven=((mergedArray.length)/2)

    if(mergedArray.length%2===1){ 
         let oddListMedian=mergedArray[halfArraylengthForOdd-1]
         return oddListMedian
    }
    if(mergedArray.length%2===0){
        let evenElemArr=[mergedArray[halfArraylengthForEven-1],mergedArray[halfArraylengthForEven]].sort()
        let evenListMedian=(evenElemArr[0]+evenElemArr[1])/2
        return evenListMedian
    }