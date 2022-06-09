/*================================================================
Solution
================================================================*/
function uniqueArr(arr) {
    let outputArray = arr.filter(function (i, j, crash) {
        return j == crash.indexOf(i);
    });
    return outputArray;
};

console.log(uniqueArr(['a', 'a', 'b', 'c', 'c', 'd', 'b'])); // Answer: ['a', 'b', 'c', 'd']
console.log(uniqueArr([1, 1, 1, 1, 5])); // Answer: [1, 5]
console.log(uniqueArr([])); // Answer: []