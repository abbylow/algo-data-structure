/* Sliding Window
 * Question: https://www.educative.io/courses/grokking-the-coding-interview/Y5YDWzqPn7O
 * Given a string and a list of words, find all the starting indices of substrings in the given string that are a concatenation of all the given words exactly once without any overlapping of words. It is given that all words are of the same length.
 * Input: String="catfoxcat", Words=["cat", "fox"]
 * Output: [0, 3]
 * Explanation: The two substring containing both the words are "catfox" & "foxcat".
 */

// Sliding window
// Time Complexity: O(N * M * Len) where ‘N’ is the number of characters in the given string, ‘M’ is the total number of words, and ‘Len’ is the length of a word.
// Space Complexity: O(M)
const find_word_concatenation = function(str, words) {
  let resultIndices = [];
  let wordFrequencyMap = {};

  // record the frequency into map
  words.forEach(word => {
    if (!(word in wordFrequencyMap)) {
      wordFrequencyMap[word] = 0;
    }
    wordFrequencyMap[word]++;
  })

  let wordsCount = words.length || 0;
  let eachWordLength = words[0] ? words[0].length : 0;

  for(let i = 0; i < (str.length - wordsCount * eachWordLength) + 1; i++) {
    let wordSeen = {};
    for (let j = 0; j < wordsCount; j++) {
      let currIndex = i + j * eachWordLength;
      let currWord = str.substring(currIndex, currIndex + eachWordLength);

      // if not in the frequency map, break the loop
      if (!(currWord in wordFrequencyMap)) {
        break;
      }

      if (!(currWord in wordSeen)) {
        wordSeen[currWord] = 0;
      }
      wordSeen[currWord]++;

      // if the frequency higher than required
      if (wordSeen[currWord] > (wordFrequencyMap[currWord] || 0)) {
        break;
      }

      // record the index to result array when the j is the last required word
      if (j + 1 === wordsCount) {
        resultIndices.push(i);
      }

    }
  }

  return resultIndices;
};
