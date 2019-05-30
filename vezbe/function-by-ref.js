var ime = 'Pera';
function uradiNestSaImenom(ime) {
    ime = 'Zika';
    console.log('(u funkcji) ', ime)
}
uradiNestSaImenom(ime);
console.log(ime);


console.log("\n\n\n");
var imena = ['aaa', 'bbb'];
function uradiNestSaImenima(imena) {
    imena.push('ccc');
    imena[0] = '123';
    console.log('(u funkcji) ', imena)
}
uradiNestSaImenima(imena);
console.log(imena);
