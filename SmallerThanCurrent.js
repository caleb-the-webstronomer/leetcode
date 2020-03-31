//https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/

function smallerNumbersThanCurrent(nums) {
  const sorted = Array.from(nums).sort((n1, n2) => n2 - n1);
  const map = new Map(sorted.map((num, index) => [num, nums.length - index - 1]));
  return nums.map((num) => map.get(num));
}

const smallerNumbersThanCurrent = (nums) => {
  const map = new Map(
    nums
      .slice()
      .sort((a, b) => a - b)
      .map((val, idx) => [val, idx])
      .reverse(),
  );
  return nums.map((n) => map.get(n));
};
