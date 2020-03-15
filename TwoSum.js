//https://leetcode.com/problems/two-sum/

var twoSum = function(nums, target) {
  var dict = {};

  for (var i = 0; i < nums.length; i++) {
    var inp = nums[i];
    var diff = target - inp;
    if (diff in dict) return [dict[diff], i];

    dict[inp] = i;
  }

  return null;
};
