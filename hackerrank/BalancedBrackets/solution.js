/* Balanced Brackets
 * Question: https://www.hackerrank.com/challenges/balanced-brackets/problem
 * Solution: https://youtu.be/IhJGJG-9Dx8
 */
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

const openTerms = ['{', '(', '['];
function isOpenTerm(c) {
    return openTerms.indexOf(c) > -1;
} 

const bracketMap = {
    '{': '}',
    '[': ']',
    '(': ')',
}

/*
 * Complete the 'isBalanced' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */
function isBalanced(s) {
    // Write your code here
    
    const stackArr = [];
    for(let count = 0; count < s.length; count++) {
        const currentTerm = s[count];

        if (isOpenTerm(currentTerm)) {
            stackArr.push(currentTerm);
        } else {

            if(stackArr.length <= 0) {
                return 'NO';
            }
            const prevTerm = stackArr.pop();

            if (bracketMap[prevTerm] !== currentTerm) {
                return 'NO';
            }
        }
    }
    return stackArr.length == 0 ? 'YES' : 'NO';

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const s = readLine();

        const result = isBalanced(s);

        ws.write(result + '\n');
    }

    ws.end();
}
