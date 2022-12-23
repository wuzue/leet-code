/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function(n) {
  //return multiple of 2 and N
  let result = 0
  for(let i = n; ; i = i + n){
    if(i % 2 == 0){
      result = i
      break
    }
  }
  return result
};