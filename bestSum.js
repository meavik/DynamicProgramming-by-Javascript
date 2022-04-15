/*Write a funtion 'bestSum(targetSum,numbers)' that takes in a targetSum and an array of numbers as arguments
The function should return an array containing the shortest combination of numbers that add up to exactly the targetSum.
If there is a tie for shortest combination, you  may return any of the shortest
*/

//bruteforce approach
//  const bestSum = (targetSum,numbers)=>{
//      if (targetSum===0) return [];
//      if(targetSum<0) return null;
//      let shortestCombination = null;
//      for(let num of numbers){
//          const remainder = targetSum - num;
//          const remainderResult = bestSum(remainder,numbers);
//          if(remainderResult !== null){
//              const combination = [...remainderResult, num];
//              if(shortestCombination === null || combination.length<shortestCombination.length){
//                  shortestCombination = combination;
//              }
//          }
//      }
//      return shortestCombination;
//  };

const bestSum = (targetSum,numbers,memo = {}) =>{
    if(targetSum in memo) return memo[targetSum];
    if(targetSum === 0) return [];
    if (targetSum<0) return null;
    let shortestCombination = null;
    for(let num of numbers){
        const remainder = targetSum - num;
        const remainderResult = bestSum(remainder,numbers,memo);
        if(remainderResult !== null){
            const combination = [...remainderResult,num];
            if(shortestCombination === null || combination.length <shortestCombination.length){
                shortestCombination = combination;
            }
        }
    }
    memo[targetSum] = shortestCombination;
    return memo[targetSum];
};

 console.log(bestSum(7,[2,4,2,7]));
 console.log(bestSum(7,[3,5]));
 console.log(bestSum(8,[2,3]));
 console.log(bestSum(9,[2,5]));
 console.log(bestSum(300,[7,14]));
