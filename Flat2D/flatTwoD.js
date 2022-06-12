/*================================================================
---------------------------Solution-------------------------------
================================================================*/
function isValidated(arr) {
    if (arr != undefined && arr.length > 0) {
        return true;
    } else
        return false;
};

function flat2D(arr) {
    if (isValidated(arr)) {
        let newArr = [];
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < arr.length; j++) {
                if (arr[i][j] != undefined && arr.length > 0) {
                    newArr.push(arr[i][j])
                } else {
                    continue;
                }
            }
        }
        return newArr;
    } else {
        return [];
    }
}

console.log(flat2D([
    [1, 2, 3],
    [5, 7, 8],
    [9, 4, 6]
]));

console.log(flat2D([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
])); // cavab: [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(flat2D([
    [12, 3, 1],
    [54]
])); // cavab: [12, 3, 1, 54]

console.log(flat2D([
    []
])); // cavab: []

console.log(flat2D([])); // cavab: []

console.log(flat2D()); // cavab: []

/*================================================================
-----------------------Problem Solved ;)--------------------------
================================================================*/