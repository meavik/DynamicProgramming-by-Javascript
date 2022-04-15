 /*Write a function 'canSum(targetSum,numbers)' that takes in a targetSum and an array of numbers as argument.
The function should return a boolean indicating whteher or not it is possile to generate the targetSum using the numbers form array
You may use the elements of the array as many time as needed
You may assume that all input numbers are non-negative.*/

//bruteforce approach
// const canSum = (targetSum,numbers)=>{
//     if (targetSum === 0) return true;
//     if(targetSum<=0) return false;
//     for(let num of numbers){
//         const remainder = targetSum - num;
//         if(canSum(remainder,numbers) === true){
//             return true;
//         }
//     }
//     return false;
// };

//dynamic approach
const canSum = (targetSum,numbers,memo = {})=>{
    if(targetSum in memo) return memo[targetSum];
    if(targetSum === 0) return true;
    if (targetSum<=0) return false;
    for( let num of numbers){
        const remainder = targetSum - num;
        if(canSum(remainder,numbers,memo) === true){
            memo[targetSum] = true;
            return memo[targetSum];
        }
    }
    memo[targetSum] = false;
    return false;
};


console.log(canSum(7, [2, 3]));
console.log(canSum(7, [2, 4]));
console.log(canSum(8, [2, 3, 5]));
console.log(canSum(300, [7, 14]));
