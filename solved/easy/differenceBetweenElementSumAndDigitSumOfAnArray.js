// 2535. Difference Between Element Sum and Digit Sum of an Array

/*You are given a positive integer array nums.
The element sum is the sum of all the elements in nums.
The digit sum is the sum of all the digits (not necessarily distinct) that appear in nums.
Return the absolute difference between the element sum and digit sum of nums.
Note that the absolute difference between two integers x and y is defined as |x - y|*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
  let elementSum = 0
  for(let i = 0; i < nums.length; i++){
    elementSum += nums[i]
  }
  let digitsSum = 0
  let toDigits = String(nums).split('').map(Number)
  let newDigits = toDigits.filter(value => !Number.isNaN(value))
  for(let j = 0; j < newDigits.length; j++){
    digitsSum += newDigits[j]
  }
  console.log(elementSum - digitsSum);
};

differenceOfSum([1,2,3,4])