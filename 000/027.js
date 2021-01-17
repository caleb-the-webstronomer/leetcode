//https://leetcode.com/problems/remove-element/submissions/

const removeElement = function(nums, val) {
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    if (nums[0] !== val) {
      nums.push(nums[0]);
    }
    nums.shift();
  }
  return nums.length;
    
};