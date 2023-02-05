/* 

2114. Maximum Number of Words Found in Sentences

A sentence is a list of words that are separated by a single space with no leading or trailing spaces.
You are given an array of strings sentences, where each sentences[i] represents a single sentence.
Return the maximum number of words that appear in a single sentence.

*/

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