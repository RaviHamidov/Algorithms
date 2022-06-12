/*================================================================
----------------------------Solution------------------------------
================================================================*/
function ceasarCipher(str, k) {
    let arr = "";
    const alfabe = ['A', 'a', 'B', 'b', 'C', 'c', 'D', 'd', 'E', 'e', 'F', 'f', 'G', 'g', 'H', 'h', 'I', 'i', 'J', 'j', 'K', 'k', 'L', 'l', 'M', 'm', 'N', 'n', 'O', 'o', 'P', 'p', 'R', 'r', 'S', 's', 'T', 't', 'U', 'u', 'V', 'v', 'W', 'w', 'X', 'x', 'Y', 'y', 'Z', 'z'];
    for (let i = 0; i < alfabe.length; i++) {
        for (let j = 0; j < alfabe.length; j++) {
            if (str.charAt(i) == alfabe[j]) {
                arr += alfabe[j + k + 2];
            }
        }
    }
    return arr;
}

console.log(ceasarCipher('ATTACKATONCE', 4)); // Answer: EXXEGOEXSRGI
console.log(ceasarCipher('Salam', 3)); // Answer: Vdodp

/*================================================================
-----------------------Problem Solved ;)--------------------------
================================================================*/