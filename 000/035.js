// https://leetcode.com/problems/search-insert-position/submissions/

const searchInsert = function(nums, target) {
    
    let i = 0;
    while(nums[i] < target) i += 1;
    return i;
    
};