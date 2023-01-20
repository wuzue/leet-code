// 1431. Kids With the Greatest Number of Candies

/* There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has,
and an integer extraCandies, denoting the number of extra candies that you have.
Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest
number of candies among all the kids, or false otherwise.
Note that multiple kids can have the greatest number of candies.*/

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
  //extraCandies = candies + extraCandies
  //return size should be length of candies?
  let res = []
  let moreCandies = Math.max(...candies)
  // console.log('this is the biggest ',moreCandies);
  for (let i = 0; i < candies.length; i++){
    // console.log('before the sum: ', candies[i]);
    let sumCandies = extraCandies + candies[i]
    // console.log('after the sum: ', sumCandies);
    sumCandies >= moreCandies ? res.push(true) : res.push(false)
  }
  console.log(res);
};

kidsWithCandies([2,3,5,1,3], 3)