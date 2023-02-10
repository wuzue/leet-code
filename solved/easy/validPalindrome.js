/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  if(s.length < 1){
    return false
  }
  let toStr = s.toString()
  let toArr = toStr.split('')
  toArr.reverse()
  let toJoin = toArr.join('')//comparar com esse
  console.log(toJoin.replace(/[^a-zA-Z0-9]+/g, ""),' ', s.replace(/[^a-zA-Z0-9]+/g, ""));
    if(toJoin.replace(/[^a-zA-Z0-9]+/g, "").toLowerCase() == s.replace(/[^a-zA-Z0-9]+/g, "").toLowerCase()){
    console.log('é igual');
  }else{
    console.log('n é');
  }
};

// isPalindrome("A man, a plan, a canal: Panama")
isPalindrome("ab_a")
// isPalindrome('Race a car')


// console.log(word.replace(/[^\w]/g, ""))