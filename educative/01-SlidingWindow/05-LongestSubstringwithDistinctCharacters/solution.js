/* Sliding Window
 * Question: educative.io/courses/grokking-the-coding-interview/YMzBx1gE5EO
 * Given a string, find the length of the longest substring, which has all distinct characters.
 * Input: String="aabccbb"
 * Output: 3
 * Explanation: The longest substring with distinct characters is "abc".
 */

// Sliding Window
// Time Complexity: O(N)
// Space Complexity: O(1)
// The algorithm’s space complexity will be O(K), where K is the number of distinct characters in the input string. This also means K<=N, because in the worst case, the whole string might not have any duplicate character, so the entire string will be added to the HashMap. Having said that, since we can expect a fixed set of characters in the input string (e.g., 26 for English letters), we can say that the algorithm runs in fixed space O(1); in this case, we can use a fixed-size array instead of the HashMap.
const non_repeat_substring = function(str) {
  let maxDistinctChars = 0;
  let windowStartAt = 0;
  let charIndexMap = {};

  for(let windowEndAt = 0; windowEndAt < str.length; windowEndAt++) {
    const currChar = str[windowEndAt];

    if (currChar in charIndexMap) {
      // in the current window, we will not have any 'rightChar' after its previous index
      // and if 'windowStart' is already ahead of the last index of 'rightChar', we'll keep 'windowStart'
      windowStartAt = Math.max(charIndexMap[currChar] + 1, windowStartAt);
    }
    
    // store the index of the character into the map
    charIndexMap[currChar] = windowEndAt;

    maxDistinctChars = Math.max(windowEndAt - windowStartAt + 1, maxDistinctChars);
  }

  return maxDistinctChars;
};
