/*

1480. Running Sum of 1d Array

Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
Return the running sum of nums.

*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
  let res = 0
  let arr = []
  for(let i = 0;i < nums.length;i++){
    res += nums[i]
    arr.push(res)
  }
  return arr
};