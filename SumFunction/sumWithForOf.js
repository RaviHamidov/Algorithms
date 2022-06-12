/*================================================================
---------------------Solution_Method with "For of"----------------
================================================================*/
function sumMethod_02(arr) {
    if (arr != undefined) {
        let sum = 0;
        let i = 0;
        for (i of arr) {
            if (Array.isArray(i)) i = sumArray(i);
            sum += i;
        }
        return sum;
    } else
        return 0;
}

console.log(sumMethod_02([1, 2, 3, 4, 5])); // Answer: 15
console.log(sumMethod_02([-1, -2, -3, -4, -5])); // Answer: -15
console.log(sumMethod_02([-1, 0, 1, 2, -2])); // Answer: 0
console.log(sumMethod_02([])); // Answer: 0
console.log(sumMethod_02()); // Answer: 0

/*================================================================
-------------------------Problem Solved ;)------------------------
================================================================*/