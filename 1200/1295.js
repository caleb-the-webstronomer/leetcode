//https://leetcode.com/problems/find-numbers-with-even-number-of-digits/

const findNumbers = (nums) => nums.reduce((acc, value) => (String(Math.floor(value)).length % 2 == 0 ? ++acc : acc), 0);

let findNumbers = (A) => {
  return A.filter((x) => x.toString().length % 2 == 0).length;
};
