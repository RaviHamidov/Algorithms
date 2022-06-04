/*================================================================
Solution_Method-05 with "While"
================================================================*/
function sumMethod_05(arr) {
    if (arr != undefined) {
        let i = 0;
        let sum = 0;
        while (i < arr.length) {
            sum += arr[i];
            i++;
        }
        return sum;
    } else
        return 0;
}

console.log(sumMethod_05([1, 2, 3, 4, 5])); // Answer: 15
console.log(sumMethod_05([-1, -2, -3, -4, -5])); // Answer: -15
console.log(sumMethod_05([-1, 0, 1, 2, -2])); // Answer: 0
console.log(sumMethod_05([])); // Answer: 0
console.log(sumMethod_05()); // Answer: 0