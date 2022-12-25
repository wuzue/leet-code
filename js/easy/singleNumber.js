/* 136. Single Number

Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
You must implement a solution with a linear runtime complexity and use only constant extra space.

*/

/*
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let res = {}
  for(let i = 0; i < nums.length; i++){
    if(res[nums[i]] === undefined){
      res[nums[i]] = 1
    }else{
      res[nums[i]]++
    }
  }
  for(let count in res){
    if(res[count] == 1){
      // return count
      console.log(count);
    }
  }
};

singleNumber([4,2,2,2,4,1,1,9])