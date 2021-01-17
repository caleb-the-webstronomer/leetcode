//https://leetcode.com/problems/remove-duplicates-from-sorted-array/

var removeDuplicates = function (nums) {
  let count = 0;
  for (let i = 1; i < nums.length; i++)
    if (
      nums[i] !== nums[count] &&
      (nums[++count] = nums[i])
    );
  nums.length = nums.length ? count + 1 : count;
  return nums.length;
};


let a = [1, 1, 2];
let b = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

console.log(removeDuplicates(a));
console.log(removeDuplicates(b));

