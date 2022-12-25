/*

9. Palindrome Number

Given an integer x, return true if x is a palindrome, and false otherwise.

*/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if(x < 0){
    return false
  }
  let toStr = x.toString()
  let toArr = toStr.split('')
  toArr.reverse()
  let res = toArr.join('')
  if(res == x){
    console.log('é palíndromo')
    return true
  }else{
    console.log('não é palindromo')
    return false
  }
  // return res
};