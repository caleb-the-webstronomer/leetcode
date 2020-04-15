//https://leetcode.com/problems/reverse-integer/

var reverse = function (x) {
  let r = parseInt((x + "").split("").reverse().join(""));
  if (r > 0x7fffffff) return 0;
  return x < 0 ? -r : r;
};
