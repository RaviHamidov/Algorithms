/*================================================================
Solution
================================================================*/
function isValidated(arr) {
    if (arr != undefined && arr.length > 0) {
        return true;
    } else
        return false;
}

function includesArr(arr, crash) {
    if (isValidated(arr)) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === crash) {
                return true;
            }
        }
        return false;
    } else {
        return false;
    }
}


console.log(includesArr([5, 4, 3, 2, 1], 4)); // answer: true
console.log(includesArr([-1, 4, 3, 7, 9], 10)); // answer: false
console.log(includesArr(['arr', 'b', 'c', 'd'], 'b')); // answer: true
console.log(includesArr([], 13)); // answer: false
console.log(includesArr()); // answer: false