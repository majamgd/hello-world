// function walk(){
//     console.log('walk');
// }

// let run = function() {
//     console.log('run');
// };
// let move = run;
// run();
// move();

//
// function zbir(a,b){  //function zbir(a,b = 4) uvek difoltne vrednosti treba definisati ne kraju
//     if(b!==0) {
//         b = b || 4;
//     }
//     var z = a + b;
//     return z;
// }
// let x = zbir(8);
// console.log(x);
//
// console.log(zbir(1,0));

 let niz = [11,12,3,4,5, 77, 88, 99];

let niz2 = niz
    .map( (item) => {
        return {
            broj : item,
            paran : item % 2 === 0
        };
    })
    .filter((n) => {
        return n.broj > 20 && n.paran;
    });

 console.log(niz2);

