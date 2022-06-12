/*================================================================
---------------------------Solution-------------------------------
================================================================*/
function find(arr, myFunction) {
    let total = [];
    for (let i = 0; i < arr.length; i++) {
        const result = myFunction(arr[i], i, arr);
        if (result == true) {
            total.push(arr[i]);
            if (total.length > 0) {
                break;
            }
        }
    }
    if (total.length > 0) {
        return total;
    } else if (total.length = 0) {
        return undefined;
    }
}

console.log(find([1, 2, 3, 4, 5], function (num) {
    return num === 1;
})); // cavab: 1

console.log(find(['Ümid', 'Etibar', 'Uday', 'Könül'], name => name.startsWith('Ud'))); // cavab: Uday

console.log(find([-3, -2, -1, 0, 1, 2, 3], x => x > 0)); // cavab: 1

console.log(find([0, 1, 2, 3, 4], x => x < 0)); // cavab: undefined

/*================================================================
-----------------------Problem Solved ;)--------------------------
================================================================*/