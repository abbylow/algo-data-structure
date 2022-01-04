/* Quicksort 2 - Sorting
 * Question: https://www.hackerrank.com/challenges/quicksort2/problem
 */

function partition(arr) {
    if (arr.length < 2) {
        return arr;
    }
    
    let left = [];
    let right = [];
    let pivot = arr[0];
    
    // split into partitions
    for (let k = 1; k < arr.length; k++) {
        if (+arr[k] <= +pivot) {
            left.push(arr[k]);
        } else {
            right.push(arr[k]);
        }
    }
    const leftRes = partition(left);
    
    const rightRes = partition(right);
    
    const finalRes = [...leftRes, pivot, ...rightRes];

    let printRes = "";
    for(let count = 0; count < finalRes.length; count++) {
        if (count != finalRes.length - 1) {
            printRes += `${finalRes[count]} `
        } else {
            printRes += `${finalRes[count]}`
        }
    }
    
    console.log(printRes)
    return finalRes;
}

function processData(input) {
    //Enter your code here
    const splitArr = input.split('\n');
    // if (splitArr.length < 2) {
    //     return;
    // }
    const arr = splitArr[1].split(" ").filter(el => el !== " ");

    partition(arr);
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
