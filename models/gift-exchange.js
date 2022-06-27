const {ExpressError, BadRequestError, NotFoundError} = require("../utils/errors.js")

class GiftExchange {
    constructor() {
        this.super();
    }

    static pairs(names) {
        //if number of names is odd, throw an error
        //else, randomly pair names together
        //return the paired names
        if(!names || names.length % 2 == 1 || names.length==0) {
            throw new BadRequestError("the number of names can't be odd");
        }

        else {
        var arr = names.slice() // copy array
        
            arr.sort(function() { return 0.5 - Math.random();}); // shuffle arrays
            const ret = [];
        
            for(let i = 0; i < arr.length/2; i++) {
                ret.push([arr[i], arr[arr.length-1-i]])
            }
            return (ret);
        }
    }

    static traditional(names) {
        const arr = names.slice() // copy array

        arr.sort(function() { return 0.5 - Math.random();}); // shuffle arrays

        const ret = [];
        
        for(let i = 0; i < arr.length-1; i++) {
            ret.push(`${arr[i]} is giving a gift to ${arr[i+1]}`)
        }
        ret.push(`${arr[arr.length-1]} is giving a gift to ${arr[0]}`);

        return ret;
    }
}

module.exports = GiftExchange;