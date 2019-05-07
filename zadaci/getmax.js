const numbers= [-1,2,3,44];
const max = getMax(numbers);
console.log(max);
function  getMax(niz) {
    let max = niz[0];
    for ( i=0; i<=niz.length; i++){
        let x = niz[i];
        if(x>max){
            max = x;
        }
    }
    return max;
}