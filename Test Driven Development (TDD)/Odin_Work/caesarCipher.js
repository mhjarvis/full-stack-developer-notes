const alphabet = 'abcdefghijklmnopqrstuvwxys'.split('');
const cypher = 'defghijklmnopqrstuvwxyzabc'.split('');

function caesarCipher(str) {
    let arr = str.split('');
    let newArr = [];

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === ' ') {
            newArr.push(' ');
            continue;
        }
        let index = alphabet.indexOf(arr[i]);
        newArr.push(cypher[index]);
    }
    return newArr.join('');
}

module.exports = caesarCipher;