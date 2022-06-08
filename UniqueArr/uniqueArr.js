/*================================================================
Solution
================================================================*/
var outputArray = [];

function uniqueArr(arr) {
    let outputArray = arr.filter(function (i, j, crash) {
        return j == crash.indexOf(i);
    });
    return outputArray;
};

console.log(uniqueArr(['a', 'a', 'b', 'c', 'c', 'd', 'b'])); // cavab: ['a', 'b', 'c', 'd']
console.log(uniqueArr([1, 1, 1, 1, 5])); // cavab: [1, 5]
console.log(uniqueArr([])); // cavab: []