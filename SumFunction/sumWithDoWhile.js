/*================================================================
Solution_Method-06 with "do While"
================================================================*/
function sumMethod_06(arr) {
    if (isValidated(arr)) {
        let i = 0;
        let sum = 0;
        do {
            sum += arr[i];
            i++;
        } while (i < arr.length);
        return sum;
    } else
        return 0;
}
console.log(sumMethod_06([1, 2, 3, 4, 5])); // Answer: 15
console.log(sumMethod_06([-1, -2, -3, -4, -5])); // Answer: -15
console.log(sumMethod_06([-1, 0, 1, 2, -2])); // Answer: 0
console.log(sumMethod_06([])); // Answer: 0
console.log(sumMethod_06()); // Answer: 0

function isValidated(arr) {
    if (arr != undefined && arr.length > 0) {
        return true;
    } else
        return false;
}