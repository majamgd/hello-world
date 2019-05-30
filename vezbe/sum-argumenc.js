

function sum(...params){
    console.log(params);

    // if( Array.isArray(params[0]) === true ){
    //     params = params[0];
    // }
    if(isArray(params[0])){
        params = params[0];
    }
    console.log(params);
    var zbir = 0;
    for(var i=0;i<params.length;i++){

        if(isString(params[i])){
           // console.log("Grska!");
            throw new  Error('Niz trebe da je satavljen samo od brojeva.');
        }
        zbir = zbir + params[i];
    }
    return zbir;
}

function isArray(p) {
    return Array.isArray(p) === true;
}

// function isArray(p) {
//     if( Array.isArray(p) === true ){
//         return true;
//     }
//     return false;
// }

function isString(pp) {
    return typeof pp === 'string' || pp instanceof String;
}

// function isString(pp) {
//     if (typeof pp === 'string' || pp instanceof String) {
//         return true;
//     } else{
//         return false;
//     }
// }

//console.log(sum(2,3,5));
 //console.log(sum([1,4,5,10]));

try{
    console.log(sum('aaa', 'bbb'));
} catch (greska) {
    console.log(greska.toString());
}
