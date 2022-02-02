/* 
 * Question: https://www.educative.io/courses/grokking-the-coding-interview/N8rOAP6Lmw6
 * Given an array, find the length of the smallest subarray in it which when sorted will sort the whole array.
 * Input: [1, 2, 5, 3, 7, 10, 9, 12]
 * Output: 5
 * Explanation: We need to sort only the subarray [5, 3, 7, 10, 9] to make the whole array sorted
 */

// // Time Complexity: O(N log N)
// // Space Complexity: O(N)
// const shortest_window_sort = function(arr) {
//   const originalArr = arr.map(el => el);
  
//   arr.sort((a, b) => a - b);

//   let start = null;
//   let end = null;
//   originalArr.map((el, index) => {
//     if (el !== arr[index]) {
//       if (start === null) {
//         start = index;
//       } else {
//         end = index;
//       }
//     }
//   })
//   return start !== null ? end - start + 1 : 0;
// };

// // Time Complexity: O(N)
// // Space Complexity: O(1)
const shortest_window_sort = function(arr) {
  let start = 0;
  let end = arr.length - 1;

  // find the first number out of sorting order from the beginning
  while (start < arr.length - 1 && arr[start] <= arr[start + 1]) {
    start++;
  }

  // if the array is sorted
  if (start === arr.length - 1) {
    return 0;
  }

  // find the first number out of sorting order from the end
  while (end > 0 && arr[end] >= arr[end - 1]) {
    end--;
  }
  
  // find the maximum and minimum of the subarray
  let subArrMin = Infinity;
  let subArrMax = -Infinity;
  for(let k = start; k <= end; k++) {
    subArrMin = Math.min(subArrMin, arr[k]);
    subArrMax = Math.max(subArrMax, arr[k]);
  }
  
  // extend the subarray to include any number which is bigger than the minimum of the subarray
  while (start > 0 && arr[start - 1] > subArrMin) {
    start--;
  }

  // extend the subarray to include any number which is smaller than the maximum of the subarray
  while (end < arr.length - 1 && arr[end + 1] < subArrMax) {
    end++;
  }

  return end - start + 1;
};
