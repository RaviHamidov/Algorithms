/*================================================================
---------------------------Solution-------------------------------
================================================================*/
function map(arr, myFunction) {
    let total = [];
    for (let i = 0; i < arr.length; i++) {
        const result = myFunction(arr[i], i, arr);
        total.push(result);
    }
    return total;
}

console.log(map([1, 2, 3], function (x) {
    return x * 2;
})); // Answer: [2, 4, 6]

console.log(map([3, 6, 9], function (x) {
    return x * x;
})); // Answer: [9, 36, 81]

console.log(map([1, 2, 3], function (x) {
    return [x];
})); // Answer: [[1], [2], [3]]

console.log(map(['a', 'b', 'c', 'd'], x => null));
// Answer: [null, null, null, null]

/*================================================================
--------------------------Problem Solved--------------------------
================================================================*/