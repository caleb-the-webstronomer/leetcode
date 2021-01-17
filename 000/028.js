//https://leetcode.com/problems/implement-strstr/submissions/

const strStr = function(haystack, needle) {
    if(needle.length === 0) return 0;
    return haystack.indexOf(needle);
};