//https://leetcode.com/problems/jewels-and-stones/

var numJewelsInStones = function(J, S) {
  let count = 0;
  let len = S.length;

  for (let i = 0; i < len; i++) {
    if (J.indexOf(S[i]) >= 0) {
      count++;
    }
  }
  return count;
};

var numJewelsInStones = function(J, S) {
  let result = 0;
  for (let i = 0; i < S.length; i++) {
    if (J.indexOf(S.charAt(i)) >= 0) result++;
  }
  return result;
};

const numJewelsInStones = (J, S) => {
  const jewels = new Set(J);
  return S.split("").reduce((res, s) => res + jewels.has(s), 0);
};
