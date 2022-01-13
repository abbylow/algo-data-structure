/* Sliding Window
 * Question: https://www.educative.io/courses/grokking-the-coding-interview/YQ8N2OZq0VM
 * Given a string and a pattern, find all anagrams of the pattern in the given string.
 * Input: String="abbcabc", Pattern="abc"
 * Output: [2, 3, 4]
 * Explanation: The three anagrams of the pattern in the given string are "bca", "cab", and "abc".
 */

// Sliding Window
// Time Complexity: O(N+M) where ‘N’ and ‘M’ are the number of characters in the input string and the pattern, respectively.
// Space Complexity: O(M)
const find_string_anagrams = function(str, pattern) {
  let windowStartAt = 0;
  let patternMap = {};
  let matchCount = 0;
  let result_indices = [];

  // record the frequency of each character in pattern
  for(let counter = 0; counter < pattern.length; counter++) {
    const currChar = pattern[counter];
    if (!(currChar in patternMap)) {
      patternMap[currChar] = 0;
    }
    patternMap[currChar]++;
  }

  // sliding window
  for(let windowEndAt = 0; windowEndAt < str.length; windowEndAt++) {
    const currChar = str[windowEndAt];

    if (currChar in patternMap) {
      patternMap[currChar]--;
      if (patternMap[currChar] === 0) {
        matchCount++;
      }
    }
    
    if (matchCount === Object.keys(patternMap).length) {
      result_indices.push(windowStartAt);
    }

    // shrink the window if the window is longer than the pattern length
    if (windowEndAt >= pattern.length - 1) {
      const startChar = str[windowStartAt];
      if (startChar in patternMap) {
        if (patternMap[startChar] === 0) {
          matchCount--;
        }
        patternMap[startChar]++;
      }
      windowStartAt++;      
    }

  }

  return result_indices;
};
