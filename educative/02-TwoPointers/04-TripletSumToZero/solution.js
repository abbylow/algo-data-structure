/* 
 * Question: https://www.educative.io/courses/grokking-the-coding-interview/gxk639mrr5r
 * Given an array of unsorted numbers, find all unique triplets in it that add up to zero.
 * Input: [-3, 0, 1, 2, -1, 1, -2]
 * Output: [-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]
 * Explanation: There are four unique triplets whose sum is equal to zero.
 */

// Time complexity: O(N^2) Sorting the array will take O(N * logN). The searchPair() function will take O(N). As we are calling searchPair() for every number in the input array, this means that overall searchTriplets() will take O(N * logN + N^2), which is asymptotically equivalent to O(N^2).
// Space complexity: O(1) Ignoring the space required for the output array, the space complexity of the above algorithm will be O(N) which is required for sorting. (but javascript sort function is in-place sorting)
const search_triplets = function(arr) {
  let triplets = [];
  arr.sort((a, b) => a - b);

  for(let k = 0; k < arr.length; k++) {
    if (k > 0 && arr[k] === arr[k-1]) {
      continue; // skip if the element is same with the previous one
    }
    // find the pairs which can make up the sum that is negative of the arr[k] value (to get total sum to be zero)
    // left pointer starts with k+1 to avoid same combination
    search_pairs(arr, -arr[k], k + 1, triplets);
  }
  return triplets;
};

const search_pairs = function(arr, targetSum, leftPointer, triplets) {
  let rightPointer = arr.length - 1;
  
  while (leftPointer < rightPointer) {
    const currSum = arr[leftPointer] + arr[rightPointer];
    if (currSum === targetSum) {
      triplets.push([-targetSum, arr[leftPointer], arr[rightPointer]]);
      leftPointer++;
      // move the left pointer to skip the same element and avoid same combination
      while (leftPointer < rightPointer && arr[leftPointer] === arr[leftPointer - 1]) {
        leftPointer++;
      }
      rightPointer--;
      // move the right pointer to skip the same element and avoid same combination
      while (leftPointer < rightPointer && arr[rightPointer] === arr[rightPointer + 1]) {
        rightPointer--;
      }
    } else if (currSum < targetSum) {
      leftPointer++;
    } else {
      rightPointer--;
    }
  }
  
}