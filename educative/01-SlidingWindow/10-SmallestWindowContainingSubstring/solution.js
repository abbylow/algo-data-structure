/* Sliding Window
 * Question: https://www.educative.io/courses/grokking-the-coding-interview/3wDJAYG2pAR
 * Given a string and a pattern, find the smallest substring in the given string which has all the characters of the given pattern.
 * Input: String="aabdec", Pattern="abc"
 * Output: "abdec"
 * Explanation: The smallest substring having all characters of the pattern is "abdec"
 */

// Sliding Window
// Time Complexity: O(N+M) where ‘N’ and ‘M’ are the number of characters in the input string and the pattern respectively.
// Space Complexity: O(M)
const find_substring = function(str, pattern) {
  let shortestSubstr = "";
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

  for(let windowEndAt = 0; windowEndAt < str.length; windowEndAt++) {
    const currChar = str[windowEndAt];

    if (currChar in patternMap) {
      patternMap[currChar]--;
      if (patternMap[currChar] === 0) {
        matchCount++;
      }
    }
    
    // when there is a pattern match in the current sliding window
    while (matchCount === Object.keys(patternMap).length) {
      const currSubStr = str.slice(windowStartAt, windowEndAt + 1);

      if (shortestSubstr === "") {
        shortestSubstr = currSubStr;
      } else {
        shortestSubstr = shortestSubstr.length > currSubStr.length ? currSubStr : shortestSubstr;
      }

      // shrink the window when there is a match
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

  return shortestSubstr;
}

