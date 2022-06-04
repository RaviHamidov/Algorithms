/*================================================================
Solution
================================================================*/
function arithmeticMean(arr) {
    if (isValidated(arr)) {
        let total = 0;
        for (let i = 0; i < arr.length; i++)
            total += arr[i];
        result = total / arr.length;
        return result;
    } else
        return 0;
}

console.log(arithmeticMean([3, 3, 3, 3, 3])); // cavab: 3
console.log(arithmeticMean([1, 5, 6, 10, 4])); // cavab: 5.2
console.log(arithmeticMean([])); // cavab: 0
console.log(arithmeticMean()); // cavab: 0

function isValidated(arr) {
    if (arr != undefined && arr.length > 0) {
        return true;
    } else
        return false;
}