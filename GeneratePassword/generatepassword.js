/*================================================================
---------------------------Solution-------------------------------
================================================================*/
function generatePassword(passwordLength) {
    let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let randomstring = '';
    for (let i = 0; i < passwordLength; i++) {
        let rnum = Math.floor(Math.random() * chars.length);
        randomstring += chars.substring(rnum, rnum + 1);
    }
    return randomstring;
}

console.log(generatePassword(16)); // Answer: 42 (That's a joke)
console.log(generatePassword(32)); // Answer: ;)

/*================================================================
-----------------------Problem Solved ;)--------------------------
================================================================*/