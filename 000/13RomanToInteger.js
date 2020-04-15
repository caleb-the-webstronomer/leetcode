//https://leetcode.com/problems/roman-to-integer/

var romanToInt = function (s) {
  let d = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 },
    res = 0,
    p = "I";
  for (let i = s.length - 1; i >= 0; i--) {
    [res, p] = d[s[i]] < d[p] ? [res - d[s[i]], s[i]] : [res + d[s[i]], s[i]];
  }
  return res;
};

//Fastest

var romanToInt = function (s) {
  var maps = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 };

  var prev = 0,
    result = 0;

  for (var i = s.length - 1; i >= 0; i--) {
    var key = s[i],
      num = maps[key];
    result = num < prev ? result - num : result + num;
    prev = num;
  }
  return result;
};
