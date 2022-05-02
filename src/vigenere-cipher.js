const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
    constructor(value) {
        this.value = value === false ? value : true;
        this.countLetters = 26;
        this.charCodeA = 65;
    }

    encrypt(message, key) {
        if (!message || !key) throw new Error;
        let result = "";
        let count = 0;
        for (let i = 0; i < message.length; i++) {
            count >= key.length ? count = 0 : false;
            let messageSymbol = message[i].toUpperCase();
            let keySymbol = key[count].toUpperCase();
            let rowIndex = messageSymbol.charCodeAt() - this.charCodeA;
            let columnIndex = keySymbol.charCodeAt() - this.charCodeA;
            if (rowIndex >= 0 && rowIndex <= this.countLetters) {
                let resultSymbol = String.fromCharCode(this.charCodeA + (rowIndex + columnIndex >= this.countLetters ? rowIndex + columnIndex - this.countLetters : rowIndex + columnIndex));
                result += resultSymbol;
                count++;
            } else {
                result += messageSymbol;
            }
        }
        if (!this.value) {
            return result.split("").reverse().join("");
        }
        return result;
    }

    decrypt(encryptedMessage, key) {
        if (!encryptedMessage || !key) throw new Error;
        let result = "";
        let count = 0;
        for (let i = 0; i < encryptedMessage.length; i++) {
            count >= key.length ? count = 0 : false;
            let messageSymbol = encryptedMessage[i].toUpperCase();
            let keySymbol = key[count].toUpperCase();
            let rowIndex = messageSymbol.charCodeAt() - this.charCodeA;
            let columnIndex = keySymbol.charCodeAt() - this.charCodeA;
            if (rowIndex >= 0 && rowIndex <= this.countLetters) {
                let resultSymbol = String.fromCharCode((rowIndex + this.charCodeA - columnIndex) < this.charCodeA ? rowIndex + this.charCodeA - columnIndex + this.countLetters : rowIndex + this.charCodeA - columnIndex);
                result += resultSymbol;
                count++;
            } else {
                result += messageSymbol;
            }
        }
        if (!this.value) {
            return result.split("").reverse().join("");
        }
        return result;
    }
}

module.exports = {
    VigenereCipheringMachine
};