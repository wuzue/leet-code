/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
  let change = "[.]"
  return address.replace(/\./g, change)
};