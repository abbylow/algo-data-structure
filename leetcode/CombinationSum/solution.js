/* Combination Sum
 * Question: https://leetcode.com/problems/combination-sum/
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum = function(candidates, target) {
  let results = []
  
  function backtrack(arr, remaining, idx) {
      if(remaining < 0) return;
      
      if(remaining === 0) results.push(arr);

      // Start i at idx to avoid using the same combination of numbers but in a different order
      for(let i = idx; i < candidates.length; i++) {
          backtrack([...arr, candidates[i]], remaining-candidates[i], i);
      }
  }
  backtrack([], target, 0);
  return results; 
}