const canSum = (targetSum,numbers) =>{
    const table = Array(targetSum+1).fill(false);
    table[0] = true;
    for(let i = 0; i<= targetSum; i++){
        if(table[i] === true){
            for(let num of numbers){
                if(num in table){
                    table[i+num] = true;
                }
            }
        }
    }
    return table[targetSum];
};

console.log(canSum(7,[2,4]));
console.log(canSum(8,[2,3,5]));
console.log(canSum(7,[2,4,3,7]));
console.log(canSum(300,[7,14]));
