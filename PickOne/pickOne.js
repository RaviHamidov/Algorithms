/*================================================================
Solution
================================================================*/
function pickOne(arr) {
    let r = Math.random() * arr.length;
    let randomPlace = Math.floor(r);
    return (arr[randomPlace]);
}

console.log(pickOne(['Cəfər', 'Aynur', 'Leyla', 'Zöhrə', 'Günay']));
// Answer: Any of the named Persons