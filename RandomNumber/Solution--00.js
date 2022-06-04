/*===============================================================
Task_02

Type a function called random. The function must take two parameters,
lower and upper, and return an arbitrary natural number between
those two numbers (including both):
================================================================*/

/*================================================================
Solution
================================================================*/
function randomNumber(lower, upper) {
    const r = Math.random() * (upper - lower) + lower;
    return Math.floor(r);
}

console.log(randomNumber(1, 6)); // Answer: Random Numbers => From 1 to 6 :)
console.log(randomNumber(0, 10)); // Answer: Random Numbers => From 0 to 10 ;)