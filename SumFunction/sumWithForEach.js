/*================================================================
Solution_Method-04 with "For each"
================================================================*/
function sumMethod_04(arr) {
    let sum = 0;
    if (arr != undefined) {
        arr.forEach((arg) => {
            sum += arg;
        });
        return sum;
    } else
        return 0;
}

console.log(sumMethod_04([1, 2, 3, 4, 5])); // Answer: 15
console.log(sumMethod_04([-1, -2, -3, -4, -5])); // Answer: -15
console.log(sumMethod_04([-1, 0, 1, 2, -2])); // Answer: 0
console.log(sumMethod_04([])); // Answer: 0
console.log(sumMethod_04()); // Answer: 0