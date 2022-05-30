/*================================================================
Solution
================================================================*/
function isValidated(arr) {
    if (arr != undefined && arr.length > 0) {
        return true;
    } else
        return false;
};

function intersection(arrFirst, arrSecondary) {
    if (isValidated(arrFirst, arrSecondary)) {
        arrFirst.sort();
        arrSecondary.sort();

        let n = arrFirst.length,
            m = arrSecondary.length;

        let i = 0,
            j = 0;

        let total = [];

        while (i < n && j < m) {
            if (arrFirst[i] > arrSecondary[j]) {
                j++;
            } else if (arrSecondary[j] > arrFirst[i]) {
                i++;
            } else {
                total.push(arrFirst[i]);
                i++;
                j++;
            }
        }
        return total;
    } else {
        return [];
    }
};

console.log(intersection([2, 1], [3, 2])); // Answer: [2]
console.log(intersection([0, 1, 2, 5], [4, 7, 1, 5])); // Answer: [1, 5]
console.log(intersection([1, 2, 3, 4], [5, 6, 7, 8])); // Answer: []
console.log(intersection([], [])); // Answer: []
console.log(intersection()); // Answer: []