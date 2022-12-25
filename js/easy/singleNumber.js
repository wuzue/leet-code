/**
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