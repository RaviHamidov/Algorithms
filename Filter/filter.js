/*================================================================
---------------------------Solution-------------------------------
================================================================*/
function filter(arr, myFunction) {
    let total = [];
    for (let i = 0; i < arr.length; i++) {
        const result = myFunction(arr[i], i, arr);
        if (result == true) {
            total.push(arr[i]);
        } else {
            continue;
        }
    }
    return total;
}

console.log(filter([1, 2, 3, 4, 5, 6], function (x) {
    return x % 2 === 0;
}));
// cavab: [2, 4, 6]

console.log(filter([1, 2, 3, 4, 5, 6], function (x) {
    return x > 3;
}));
// cavab: [4, 5, 6]

console.log(filter([-2, -1, 0, 1, 2], x => x < 0)); // cavab: [-2, -1]

console.log(filter([-2, -1, 0, 1, 2], num => num > 0)); // cavab: [1, 2]