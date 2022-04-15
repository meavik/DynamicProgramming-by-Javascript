/*Write a function `countConstruct(target,wordBank)` taht accepts a target string and an array of string. 
The function should return the number of ways that the 'target' can be constructed by concatenating elements of the `wordBank` array.
You may reuse elements of 'wordBank' as many time as needed.
*/

//bruteforce approach
// const countConstruct = (target,wordBank)=>{
//     if(target === '') return 1;
//     let taotalCount = 0;
//     for(let word of wordBank){
//         if(target.indexOf(word)===0){
//             const numberForest = countConstruct(target.slice(word.length),wordBank);
//             taotalCount += numberForest;
//         }
//     }
//     return taotalCount;
// };

//dynamic approach
const countConstruct = (target, wordBank, memo = {}) => {
    if (target in memo) return memo[target];
    if (target === '') return 1;
    let taotalCount = 0;
    for (word of wordBank) {
        if (target.indexOf(word) === 0) {
            const numberForest = countConstruct(target.slice(word.length), wordBank, memo);
            taotalCount += numberForest;
        }
    }
    memo[target] = taotalCount;
    return memo[target];
};

console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'ábcd']));
console.log(countConstruct('skateboard', ['sk', 'ate', 'bo', 'rd', 'boar']));
console.log(countConstruct('purple', ['p', 'rp', 'ur', 'le']));
console.log(countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eeeee', 'eeeeeeee']))
