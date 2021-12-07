/* Ice Cream Parlor
 * Question: https://www.hackerrank.com/challenges/icecream-parlor/problem
 * Solution: https://www.youtube.com/watch?v=Ifwf3DBN1sc&ab_channel=HackerRank
 */

// Solution 1: Brute Force: walk through all pairs O(n^2)
// Solution 2: Hash Map: look for complement in hashmap (but be careful that we cannot choose same flavor)
// Solution 3: Sort and Binary Search 

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function binarySearchRecursive(arrayOfData, itemPrice, left, right) {
    if (left > right) return -1;

    const mid = Math.floor((left + right) / 2);

    if (arrayOfData[mid].price == itemPrice) {
        return mid;
    } else if (itemPrice < arrayOfData[mid].price) {
        return binarySearchRecursive(arrayOfData, itemPrice, left, mid - 1);
    } else {
        return binarySearchRecursive(arrayOfData, itemPrice, mid + 1, right);
    }
}

/*
 * Complete the 'icecreamParlor' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER m
 *  2. INTEGER_ARRAY arr
 */

function icecreamParlor(m, arr) {
    // change the structure to record both the data and its original index (1-based indexing)
    const structuredArr = arr.map((el, index) => {
        return {idx: index+1, price: el}
    }) 
    // sort the array
    const sortedArr = structuredArr.sort((a, b) => {return a.price - b.price});
    // scope down when the unit price >= the budget they have (must buy two different flavors so if the unit price == budget, also cannot buy the flavor)
    const scopedArr = sortedArr.filter(el => el.price < m);
    for(let k = 0; k < scopedArr.length; k++) {
        const currentItem = scopedArr[k];
        const complementPrice = m - currentItem.price;
        const complementLocation = binarySearchRecursive(scopedArr, complementPrice, k + 1, scopedArr.length - 1);
        if (complementLocation > -1 && scopedArr[complementLocation]) {
            const currItemIdx = currentItem.idx;
            const complementItemIdx = scopedArr[complementLocation].idx;
            return currItemIdx < complementItemIdx ? [currItemIdx, complementItemIdx] : [complementItemIdx, currItemIdx];
        }
        
    }
    return false;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const m = parseInt(readLine().trim(), 10);

        const n = parseInt(readLine().trim(), 10);

        const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

        const result = icecreamParlor(m, arr);

        ws.write(result.join(' ') + '\n');
    }

    ws.end();
}
