/*Write a function 'howSum(targetSum,numbers)' that takes in a targetSum and an array of numbers as argument.
The function should return an array containing any combination of elements that add up to exactly the targetSum. If there is no combinations that adds up to the targetSum the return null.
If there is multiple combinations possible, you may return any single one.*/

//bruteforce approach
// const howSum = (targetSum, numbers)=>{
//     if (targetSum === 0) return [];
//     if (targetSum<=0) return null;
//     for (let num of numbers){
//         const remainder = targetSum - num;
//         const remainderResult =  howSum(remainder,numbers);
//         if(remainderResult !== null){
//             return [...remainderResult,num];
//         }
//     }
//     return null;
// };

//dynamic approach
const howSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum <= 0) return null;
    for (let num of numbers) {
        const remainder = targetSum - num;
        const remainderResult = howSum(remainder, numbers, memo);
        if (remainderResult !== null) {
            memo[targetSum] = [...remainderResult, num];//extracts the elements of the array and add num to it
            return memo[targetSum];
        }
    }
    memo[targetSum] = null;
    return null;
};

console.log(howSum(7, [2, 3]));
console.log(howSum(7, [2, 4]));
console.log(howSum(8, [2, 3, 5]));
console.log(howSum(300, [7, 14]));
