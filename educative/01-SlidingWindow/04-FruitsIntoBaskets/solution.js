/* Sliding Window
 * Question: https://www.educative.io/courses/grokking-the-coding-interview/Bn2KLlOR0lQ
 * Given an array of characters where each character represents a fruit tree, you are given two baskets, and your goal is to put maximum number of fruits in each basket. The only restriction is that each basket can have only one type of fruit. You can start with any tree, but you can’t skip a tree once you have started. You will pick one fruit from each tree until you cannot, i.e., you will stop when you have to pick from a third fruit type. Write a function to return the maximum number of fruits in both baskets.
 * Input: Fruit=['A', 'B', 'C', 'A', 'C']
 * Output: 3
 * Explanation: We can put 2 'C' in one basket and one 'A' in the other from the subarray ['C', 'A', 'C']
 */

// Sliding Window
// Time Complexity: O(N)
// Space Complexity: O(1) //as there can be a maximum of three types of fruits stored in the frequency map.
const fruits_into_baskets = function(fruits) {
  let maxFruitsInBasket = 0;
  let windowStartAt = 0;
  let basketMap = {};

  for(let windowEndAt = 0; windowEndAt < fruits.length; windowEndAt++) {
    const currFruit = fruits[windowEndAt];

    if (!(currFruit in basketMap)) {
      basketMap[currFruit] = 0;
    }
    basketMap[currFruit]++;
    
    while(Object.keys(basketMap).length > 2) {
      const startFruit = fruits[windowStartAt];
      basketMap[startFruit]--;
      if (!basketMap[startFruit]) {
        delete basketMap[startFruit];
      } 
      windowStartAt++;
    }

    maxFruitsInBasket = Math.max(windowEndAt - windowStartAt + 1, maxFruitsInBasket);

  }

  return maxFruitsInBasket;
};