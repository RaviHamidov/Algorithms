/*================================================================
Solution
================================================================*/
function geometricMean(arr) {
    if (isValidated(arr)) {
        let total = 1;
        var result = 0;
        for (let i = 0; i < arr.length; i++) {
            total *= arr[i];
            result = Math.floor(Math.pow(total, 1 / arr.length))
        }
        return result;
    } else
        return 0;
}

console.log(geometricMean([1, 2, 3, 4, 5, 6, 7, 8])); // estimated Answer: 3.76435
console.log(geometricMean([15, 12, 13, 19, 10])); // estimated Answer: 13.477
console.log(geometricMean([])); // Answer: 0
console.log(geometricMean()); // Answer: 0

function isValidated(arr) {
    if (arr != undefined && arr.length > 0) {
        return true;
    } else
        return false;
}