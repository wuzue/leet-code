// 771. Jewels and Stones

// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have.
// Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.
// Letters are case sensitive, so "a" is considered a different type of stone from "A".

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
  let res = []
  let stoneArr = stones.split("")
  let jewelsArr = jewels.split("")
  for(let i = 0; i < stoneArr.length; i++){
    // console.log(stoneArr[i]);
    for(let j = 0; j < jewelsArr.length; j++){
      if(jewelsArr[j] == stoneArr[i]){
        res.push(j)
      }
    }
  }
  console.log(res.length);
}

numJewelsInStones("aA", "aAAbbbb")