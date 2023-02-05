// 1528. Shuffle String

// You are given a string s and an integer array indices of the same length.
// The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.
// Return the shuffled string.

/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
  //o(n^2)
  let res = []
  let toArr = s.split("")
  for(let i = 0; i < s.length; i++){
    for(let j = 0; j < indices.length; j++){
      j[j] == i[j]
      toArr.push(j[j])
    }
  }
  console.log(toArr);
};

restoreString("codeleet", [4,5,6,7,0,2,1,3])