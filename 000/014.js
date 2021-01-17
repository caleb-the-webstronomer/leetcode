//https://leetcode.com/problems/longest-common-prefix/

var longestCommonPrefix = function (strs) {
  var prefix = strs[0] || "";
  for (var i = 1; i < strs.length; i++) {
    var str = strs[i];
    while (str.indexOf(prefix) != 0) {
      prefix = prefix.substr(0, prefix.length - 1);
    }
  }
  return prefix;
};

const longestCommonPrefix2 = (strs) => {
  if (!strs.length) return "";

  let prefix = strs[0];

  for (let i = strs.length; --i; ) {
    for (; strs[i].indexOf(prefix) !== 0; ) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (!prefix.length) return "";
    }
  }

  return prefix;
};

const longestCommonPrefix3 = function (arr) {
  let prefix = arr.length ? arr[0] : "";
  let i = 1;

  while (prefix && i < arr.length) {
    const next = arr[i];
    while (next.indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1);
    }
    i++;
  }
  return prefix;
};
