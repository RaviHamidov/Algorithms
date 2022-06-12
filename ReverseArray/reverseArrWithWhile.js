/*================================================================
-----------------------------Solution-----------------------------
================================================================*/
function isValidated(arr) {
    if (arr != undefined && arr.length > 0) {
        return true;
    } else
        return false;
}

function reverse(originalArray) {

    if (isValidated(originalArray)) {
        let leftIndex = 0;
        let rightIndex = originalArray.length - 1;

        while (leftIndex < rightIndex) {

            let temp = originalArray[leftIndex];
            originalArray[leftIndex] = originalArray[rightIndex];
            originalArray[rightIndex] = temp;

            leftIndex++;
            rightIndex--;
        }

        return originalArray;
    } else {
        return [];
    }
}

console.log(reverse([1, 2, 3])); // cavab: [3, 2, 1]
console.log(reverse([10, -1, 3, 1, 4, 2])); // cavab: [2, 4, 1, 3, -1, 10]
console.log(reverse()); // cavab: []

/*================================================================
-------------------------Problem Solved ;)------------------------
================================================================*/