/*================================================================
---------------------------Solution-------------------------------
================================================================*/
function some(arr, myFunction) {
    let total = [];
    for (let i = 0; i < arr.length; i++) {
        const result = myFunction(arr[i], i, arr);
        if (result > 0) {
            total.push(arr[i]);
        }
    }
    if (total.length > 0) {
        return true;
    } else if (total.length = []) {
        return false;
    }
}

console.log(some([-1, -2, -5, -123, 0, 1], x => x > 0)); // cavab: true

console.log(some([-1, -2, -5, -123, 0], x => x > 0)); // cavab: false

function isBiggerThan10(element, index, array) {
    return element > 10;
}

console.log(some([2, 5, 8, 1, 4], isBiggerThan10)); // cavab: false

console.log(some([12, 5, 8, 1, 4], isBiggerThan10)); // cavab: true

/*================================================================
-------------------------Problem Solved ;)------------------------
================================================================*/