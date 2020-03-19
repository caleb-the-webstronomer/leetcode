//https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/

var numberOfSteps = function(num) {
  let count = 0;
  while (num > 0) {
    num = num % 2 === 0 ? num / 2 : num - 1;
    count++;
  }
  return count;
};

//Fastest
var numberOfSteps = num => {
  let numSteps = (num, steps = 0) => {
    if (num === 0) return steps;
    if (num % 2 === 0) return numSteps(num / 2, steps + 1);
    else return numSteps(num - 1, steps + 1);
  };
  return numSteps(num);
};

var numberOfSteps = function(num, count = 0) {
  if (num === 0) return count;
  return num % 2 === 0 ? numberOfSteps(num / 2, count + 1) : numberOfSteps(num - 1, count + 1);
};
