//https://leetcode.com/problems/defanging-an-ip-address/

var defangIPaddr = function(address) {
  return address.replace(/\./g, "[.]");
};

//Fastest
var defangIPaddr = function(address) {
  return address.split(".").join("[.]");
};
