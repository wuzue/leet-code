// 557. Reverse Words in a String III
// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let toArr = s.split(' ')// Divide a string s em um array de palavras
  let mapping = toArr.map((word) => word.split('').reverse().join(''))//inverte a ordem de cada caractere das palavras e as junta de volta em strings
  let res = mapping.join(' ')//junta as palavras invertidas em uma única string, adicionando um espaço entre elas
  return res//retorna res
};

reverseWords("Let's take LeetCode contest")