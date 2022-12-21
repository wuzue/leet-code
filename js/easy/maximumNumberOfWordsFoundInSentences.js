/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
  let biggest = 0
    for(let count of sentences){
      let words = count.toString().split(" ")
      let word = words.length
      if(word > biggest){ biggest = word}
    }
    return biggest
};