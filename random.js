function  slucajanBroj(a, b) {
    return Math.floor(Math.random() * (b - a) + a);
}
// console.log(slucajanBroj(3,8));



// let i = 0;
// while (i <= 10){
//     if(i === 3) {
//         break; // totalno, skroz napusta petlju
//     }
//     if( i % 2 === 0){
//         console.log('BEFORE continue A', i);
//         i++;
//         console.log('BEFORE continue B', i);
//         continue; // ulazi u sledecu iteraciju
//     }
//     i++;
//     console.log('AFTER continue', i);
// }

for(let i = 0; i < 10; i++) {
    // console.log(i);
    // console.log(`Maja: stavka ${i}`);
    console.log(`Maja: stavka`);
}

//function maxDvaBroja(a, b){
 //   if(a > b){
 //       return a;
 //   }else{
 //       return b;
 //   }
//}
//var z = maxDvaBroja(3,5);
//console.log(z);

function  maxDvaBroja(a, b){
    return (a > b) ? a : b;  //TERNARY OPERATOR
}
let veci = maxDvaBroja(4,10);
console.log(veci);


//function isLandscape(width,height) {
//    return(width>height) ? true : false;
//}
//let tacno = isLandscape(300,50);
//console.log(tacno);

function isLandscape(width,height) {
    return(width>height);
}
console.log(isLandscape(300,500));

function fizzBuzz(input) {
    if(typeof  input !== 'number'){
        return NaN;    //return 'Not a number!'
    }else if((input % 3 === 0) && (input % 5 === 0)) {
        return 'FizzBuzz'
    }else if(input % 3 === 0){
        return 'Fizz';
    }else if(input % 5 === 0) {
        return 'Buzz';
    } else{
        return input;
    }
}
var izlaz = fizzBuzz("mmm");
console.log(izlaz);