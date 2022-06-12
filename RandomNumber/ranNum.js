/*================================================================
-----------------------------Solution-----------------------------
================================================================*/
function randomNumber(lower, upper) {
    const r = Math.random() * (upper - lower) + lower;
    return Math.floor(r);
}

console.log(randomNumber(1, 6)); // Answer: Random Numbers => From 1 to 6 :)
console.log(randomNumber(0, 10)); // Answer: Random Numbers => From 0 to 10 ;)

/*================================================================
-------------------------Problem Solved ;)------------------------
================================================================*/