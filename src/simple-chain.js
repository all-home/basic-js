const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
        getLength() {
            if (this.valueOf.length == 0) return 0;
            else if (this.valueOf.split("~~").length > 0) {
                return this.valueOf.split("~~").length;
            } else return 1;
        },
        addLink(value) {
            if (arguments.length == 0) value == " ";
            else if (this.getLength() > 0) this.valueOf += `~~( ${"" + value} )`;
            else this.valueOf = `( ${"" + value} )`;
            return this;
        },
        removeLink(position) {
            if (!Number.isInteger(position) || position > this.getLength() || position < 1) {
                this.valueOf = "";
                throw new Error;
            } else {
                if (this.getLength() == 0 || this.getLength() == 1) this.valueOf = "";
                else {
                    let arr = this.valueOf.split("~~");
                    arr.splice(position - 1, 1);
                    this.valueOf = arr.join("~~");
                }
            }
            return this;
        },
        reverseChain() {
            debugger;
            let result = this.valueOf.split("~~").reverse();
            this.valueOf = result.join("~~");
            return this;
        },
        finishChain() {
            let result = this.valueOf;
            this.valueOf = '';
            return result;
        }


        module.exports = {
            chainMaker
        };