const { executeFunctions } = require('./filter-functions');
const assert = require('assert');

const data = {
    prop1: '',
    prop2: [],
    prop3: {},
    getInfo: function () {
        return 'Neki infoooo';
    },
    start: function () {
        return 'Starttt';
    },
    stop: function () {
        return 'Stoppp';
    }
};

// try{
//     executeFunctions();
// } catch(err){
//     console.log('DOSLO JE DO GRESKE!!!', err.toString());
// }


let result = executeFunctions(data, 'aabbcc');
console.log('result', result);
// ocekujem niz
// assert( Array.isArray(result), true);
// niz treba da je prazan tj da ima 0 elemenata
// assert(result.length, 0);

result = executeFunctions(data, 'st');
console.log('result', result);
// assert( Array.isArray(result), true);
// // ocekujem da niz ima 2 elementa
// assert(result.length, 2);
// assert(result[0], 'Starttt');
// assert(result[1], 'Stoppp');

result = executeFunctions(data, 'sto');
console.log('result', result);
// assert( Array.isArray(result), true);
// assert(result.length, 1);
// assert(result[0], 'Stoppp');

