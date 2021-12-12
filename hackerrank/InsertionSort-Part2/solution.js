/* Insertion Sort - Part 2
 * Question: https://www.hackerrank.com/challenges/insertionsort2/problem
 */

'use strict';

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

/*
 * Complete the 'insertionSort2' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY arr
 */

function insertionSort2(n, arr) {
    // Write your code here
    for (let curr = 1; curr < n; curr++) {
        for (let k = 0; k < curr; k++) {
            if (arr[curr] < arr[k]) {
                const temp = arr[curr];
                arr.splice(curr, 1);
                arr.splice(k, 0, temp);
                break;
            }
        }
        const res = arr.reduce((prev, curr) => {return prev + curr + " "}, "")
        console.log(res)
    }
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    insertionSort2(n, arr);
}
