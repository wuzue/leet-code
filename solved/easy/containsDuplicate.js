// 217. Contains Duplicate

// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let res = []
  for( let i = 0; i < nums.length; i++){
    if( res.includes(nums[i])){
      return true
    }
    res.push(nums[i]) 
  }
  return false
};

containsDuplicate([1,2,3,1])