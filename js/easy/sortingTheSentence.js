/**
 * @param {string} s
 * @return {string}
 */
function reconstructSentence(s) {
  // Split the sentence into a list of words
  const words = s.split(' ');

  // Sort the list of words using the first character of each word as the sort key
  words.sort((a, b) => a[0] - b[0])
  

  // Remove the 1-indexed word position from each word
  const originalWords = words.map(word => word.slice(1));

  // Join the list of words back into a single string
  return originalWords.join(' ');
  // console.log(originalWords.join(' '));
}

let s = "is2 sentence4 This1 a3"
console.log(reconstructSentence(s))