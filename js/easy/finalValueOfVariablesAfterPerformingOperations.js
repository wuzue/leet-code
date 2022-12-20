/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
  let x = 0
  for(i of operations){
    if(i == '--X' || i == 'X--'){
      x = x - 1
    }else{
      x += 1
    }
  }
  return x  
};