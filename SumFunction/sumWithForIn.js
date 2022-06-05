/*================================================================
Solution_Method-03 with "For in" 
================================================================*/
function sumMethod_03(arr) {
    if (arr != undefined) {
        let sum = 0;
        let i = 0;
        for (i in arr) {
            if (Array.isArray(i)) i = sumArray(i);
            sum += arr[i];
        }
        return sum;
    } else
        return 0;
}

console.log(sumMethod_03([1, 2, 3, 4, 5])); // Answer: 15
console.log(sumMethod_03([-1, -2, -3, -4, -5])); // Answer: -15
console.log(sumMethod_03([-1, 0, 1, 2, -2])); // Answer: 0
console.log(sumMethod_03([])); // Answer: 0
console.log(sumMethod_03()); // Answer: 0