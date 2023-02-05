/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
  let diff
  let resMult = 1
  let resSum = 0
  const digits = Array.from(String(n), Number);  
  for(mult of digits){
    resMult *= mult
  }
  for(sum of digits){
    resSum += sum
  }
  diff = resMult - resSum
  return diff
};
//sou pica