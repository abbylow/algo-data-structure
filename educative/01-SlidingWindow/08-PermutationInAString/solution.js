/* Sliding Window
 * Question: https://www.educative.io/courses/grokking-the-coding-interview/N8vB7OVYo2D
 * Given a string and a pattern, find out if the string contains any permutation of the pattern.
 * Input: String="oidbcaf", Pattern="abc"
 * Output: true
 * Explanation: The string contains "bca" which is a permutation of the given pattern.
 */

// Sliding Window
// Time Complexity: O(N+M) where ‘N’ and ‘M’ are the number of characters in the input string and the pattern, respectively.
// Space Complexity: O(M)
const find_permutation = function(str, pattern) {
  let windowStartAt = 0;
  let patternMap = {};
  let matchCount = 0;

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
      return true;
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

  return false;
};
