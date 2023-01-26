// 1832. Check if the Sentence Is Pangram

/*A pangram is a sentence where every letter of the English alphabet appears at least once.
Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.*/

/**
 * @param {string} sentence
 * @return {boolean}
 */
// var checkIfPangram = function(sentence) {
//   let alphabet = 'abcdefghijklmnopqrstuvwxyz'
//   let alphabetToArr = alphabet.split("")
//   let sentenceToArr = sentence.split("")
//   console.log(alphabetToArr, sentenceToArr);
//   for(let i = 0 ; i < sentenceToArr.length; i++){
//     for(let j = 0; j < alphabetToArr.length; j++){
//       if( sentenceToArr[i].includes(alphabetToArr[j])){
//         sentenceToArr.splice([sentenceToArr[i]], 1)
//       }
//     }
//   }
//   sentenceToArr.length == 0 ? console.log(true) : console.log(false);
// };

var checkIfPangram = function(sentence){
  let res = []
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let sentenceToArr = sentence.split("")
  for(let i = 0 ; i < sentenceToArr.length; i++){
    if(alphabet.includes(sentenceToArr[i])){
      if(res.includes(sentenceToArr[i])){continue}
      res.push(sentenceToArr[i])
    }
  }
  res.length == alphabet.length ? console.log(true) : console.log(false)
}

checkIfPangram("thequickbrownfoxjumpsoverthelazydog")
checkIfPangram("leetcode")