function caesarCipher(s, k) {
    // Write your code here
    let sLong = s.length;
    let codecString = '';
    for (let i = 0; i < sLong; i++){  

        let currentCharCode = s.charCodeAt(i);

        console.log(`char: ${s[i]} Code: ${currentCharCode}`);                       
    }
    //console.log(codecString);
    return codecString;
}

let testPhrase01 = 'middle-Outz';
let testPhrase02 = 'Always-Look-on-the-Bright-Side-of-Life';
console.log(caesarCipher(testPhrase01, 2));
//console.log(caesarCipher(testPhrase01, 5)); //Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj
