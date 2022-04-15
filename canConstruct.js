/*Write a function 'canConstruct(target,wordBank)' that accepts a target string and an array of string.
The function should return a boolean indicating whether or not the 'target' can be constructed concatenating elements of the `wordBank` array.
You may reuse elements of `wordBank` as many time as needed.*/

//dynamic approach
const canConstruct = (target,wordBank,memo = {}) => {
    if(target in memo) return memo[target];
    if (target=== '') return true;
    for(let word of wordBank){
        if(target.indexOf(word) === 0){
            const suffix = target.slice(word.length);
            if(canConstruct(suffix,wordBank,memo) === true){
                memo[target] = true;
                return memo[target];
            }
        }
    }
    memo[target] = false;
    return memo[target];
};

//bruteforce approach
// const canConstruct = (target,wordBank) =>{
//     if(target === '') return true;
//     for(let word of wordBank){
//         if(target.indexOf(word) === 0){
//             const suffix = target.slice(word.length);
//             if(canConstruct(suffix,wordBank)=== true){
//                 return true;
//             }
//         }
//     }
//     return false;
// };

console.log(canConstruct('abcdef',['ab','abc','cd','def','ábcd']));
console.log(canConstruct('skateboard',['sk','ate','bo','rd','boar']));
console.log(canConstruct('purple',['p','rp','ur','le']));
console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef',['e','ee','eeeee','eeeeeeee']))
