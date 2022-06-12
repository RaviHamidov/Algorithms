/*================================================================
----------------------------Solution------------------------------
================================================================*/
function isValidated(arr) {
    if (arr != undefined && arr.length > 0) {
        return true;
    } else
        return false;
}

function unionArr(firstArr, secondaryArr) {
    if (isValidated(firstArr) && isValidated(secondaryArr)) {
        for (let i = 0; i < secondaryArr.length; i++) {
            firstArr.push(secondaryArr[i]);
        }
        return firstArr;
    } else if (firstArr && secondaryArr == undefined) {
        return firstArr;
    } else {
        return [];
    }
}

console.log(unionArr([20, 12], [8, 15, 6])); // cavab: [20, 12, 8, 15, 6]
console.log(unionArr([2], [1, 2])); // cavab: [1, 2]
console.log(unionArr([1, 2, 3])); // cavab: [1, 2, 3]
console.log(unionArr([], [])); // cavab: []
console.log(unionArr()); // cavab: []

/*================================================================
-------------------------Problem Solved ;)------------------------
================================================================*/