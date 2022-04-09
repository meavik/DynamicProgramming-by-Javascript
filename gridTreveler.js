// Say that you are a traveler on a 2D grid. You being on the top-left corner and your goal is to travel to the bottom-right corner. You may only move down or right.
// In how many ways can you travel to the goal on a grid with dimension m*n?

//using memoization

const gridTraveler = (m,n,memo = {}) =>{
    const key = m + ',' + n;
    if(key in memo) return memo[key];
    if (m===1 && n===1) return 1;
    if (m===0 || n===0) return 0;
    memo[key]= gridTraveler(m-1,n,memo) + gridTraveler(m,n-1,memo);
    return memo[key];
};

// general approach
// const gridTraveler = (m,n) =>{
//     if (m=== 1 && n===1) return 1;
//     if (m===0||n===0) return 0;
//     return gridTraveler(m-1,n) + gridTraveler(m,n-1);
// };

console.log(gridTraveler(2,3));
console.log(gridTraveler(3,2));
console.log(gridTraveler(3,3));
console.log(gridTraveler(2,0));
console.log(gridTraveler(0,5));
console.log(gridTraveler(0,0));
console.log(gridTraveler(30,30));
console.log(gridTraveler(100,100));
