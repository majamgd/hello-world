function countTruthy(data) {
    var brojac = 0;
    for(i = 0; i<niz.length; i++){
        if(niz[i]) {
            brojac++;
        }
    } return 'Broj elemenata je ' + brojac;

}

var  niz = [
    '',
    'hhhh',
    0,
    99,
    undefined,
    {},
    {ime: 'Pera'},
    true,
    false
];

console.log(countTruthy(niz));