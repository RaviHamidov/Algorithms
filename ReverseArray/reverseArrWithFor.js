/*================================================================
Solution
================================================================*/
function isValidated(arr) {
    if (arr != undefined && arr.length > 0) {
        return true;
    } else
        return false;
}

function reverse(arr) {
    if (isValidated(arr)) {
        let reversedNumbers = [];
        for (let i = arr.length - 1; i >= 0; i--)
            reversedNumbers.push(arr[i]);
        return reversedNumbers;
    } else {
        return [];
    }
}

console.log(reverse([1, 2, 3])); // cavab: [3, 2, 1]
console.log(reverse([10, -1, 3, 1, 4, 2])); // cavab: [2, 4, 1, 3, -1, 10]
console.log(reverse()); // cavab: []