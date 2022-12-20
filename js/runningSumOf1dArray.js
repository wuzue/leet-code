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