/*Write a function `allConstruct(target,wordBank)` taht accepts a target string and an array of string.
The function should return a 2D array containing all the ways that the `target` can be constructed by concatenating elements of the `wordBank` array. Each elements of the 2D array should represent one combination that constructs the 'target'.
You may reuse of elements of `wordBank` as many time as needed. 
*/

//bruteforce approach
// const allConstruct = (target,wordBank) =>{
//     if(target === '') return [[]];
//     const result = [];
//     for(let word of wordBank){
//         if(target.indexOf(word) === 0){
//             const suffixWays = allConstruct(target.slice(word.length),wordBank);
//             const targetWays = suffixWays.map(ways=>[word,...ways]);
//             result.push(...targetWays); 
//         }
//     }
//     return result;
// };

//dynamic approach
const allConstruct = (target, wordBank, memo = {}) => {
    if (target in memo) return memo[target];
    if (target === '') return [[]];
    const result = [];
    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffixWays = allConstruct(target.slice(word.length), wordBank, memo);
            const targetWays = suffixWays.map(way => [word, ...way]);
            result.push(...targetWays);//extracting the array otherwise it would create a 3d array
        }
    }
    memo[target] = result;
    return memo[target];
};
console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log(allConstruct('skateboard', ['sk', 'ate', 'bo', 'rd', 'boar']));
console.log(allConstruct('purple', ['p', 'rp', 'ur', 'le']));
console.log(allConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eeeee', 'eeeeeeee']))
