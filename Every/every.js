/*================================================================
----------------------------Solution------------------------------
================================================================*/
function every(arr, myFunction) {
    for (let i = 0; i < arr.length; i++) {
        const result = myFunction(arr[i], i, arr);
        if (result == false) {
            return false;
        }
    }
    return true;
}

const sites1 = ['my.gov.az', 'report.az', 'google.com', 'asan.gov.az', 'now.sh'];
const sites2 = ['my.gov.az', 'report.az', 'asan.gov.az'];

console.log(every(sites1, domain => domain.endsWith('.az'))); // cavab: false
console.log(every(sites2, domain => domain.endsWith('.az'))); // cavab: true

/*================================================================
-------------------------Problem Solved ;)------------------------
================================================================*/