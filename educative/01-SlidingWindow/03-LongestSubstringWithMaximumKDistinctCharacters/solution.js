/* Sliding Window
 * Question: https://www.educative.io/courses/grokking-the-coding-interview/YQQwQMWLx80
 * Given a string, find the length of the longest substring in it with no more than K distinct characters.
 * Input: String="araaci", K=2
 * Output: 4
 * Explanation: The longest substring with no more than '2' distinct characters is "araa".
 */

// Sliding Window
// Time Complexity: O(N)
// Space Complexity: O(K)
const longest_substring_with_k_distinct = function(str, k) {
  let maxDistinctChars = 0;
  let windowStartAt = 0;
  let charMap = {};

  for(let windowEndAt = 0; windowEndAt < str.length; windowEndAt++) {
    const currChar = str[windowEndAt];

    if (!(currChar in charMap)) {
      charMap[currChar] = 0;
    }
    charMap[currChar]++;
    
    while(Object.keys(charMap).length > k) {
      maxDistinctChars = Math.max(windowEndAt - windowStartAt, maxDistinctChars);
      const startChar = str[windowStartAt];
      charMap[startChar]--;
      if (!charMap[startChar]) {
        delete charMap[startChar];
      } 
      windowStartAt++;
    }

  }

  return maxDistinctChars;
};
