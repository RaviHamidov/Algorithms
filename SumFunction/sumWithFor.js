/*================================================================
---------------------Solution_Method with "For"-------------------
================================================================*/
function sumMethod_01(arr) {
    if (arr != undefined) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) sum += arr[i];
        return sum;
    } else
        return 0;
}

console.log(sumMethod_01([1, 2, 3, 4, 5])); // Answer: 15
console.log(sumMethod_01([-1, -2, -3, -4, -5])); // Answer: -15
console.log(sumMethod_01([-1, 0, 1, 2, -2])); // Answer: 0
console.log(sumMethod_01([])); // Answer: 0
console.log(sumMethod_01()); // Answer: 0

/*================================================================
-------------------------Problem Solved ;)------------------------
================================================================*/