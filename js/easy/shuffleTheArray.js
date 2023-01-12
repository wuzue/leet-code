/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
  //o(n^2)
  let res = []
  for(let i = 0; i < nums.length; i++){
    res.push(nums[i])
    nums[i] = nums[nums[i]]
    for(let j = 0; res.length < nums.length ; j = n){
      nums[i] = nums[j]
      res.push(nums[i])

    }
  }
  console.log(res);
};

shuffle([2,5,1,3,4,7], 3)