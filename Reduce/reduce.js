/*================================================================
----------------------------Solution------------------------------
================================================================*/
function reduce(array, callback) {
    let initializer = 1;
    let accumulator = (initializer === undefined) ? 0 : initializer;

    for (let i = 0; i < array.length; i++) {
        accumulator = callback(accumulator, array[i]);
    }

    return accumulator;
}

function myReduce(acc, curr) {
    return acc + curr;
}

console.log(reduce([1, 2, 3, 4, 5], myReduce)); // Answer: 16
console.log(reduce([3, 9, 3, 8, 5], myReduce)); // Answer: 29

/*================================================================
-------------------------Problem Solved ;)------------------------
================================================================*/