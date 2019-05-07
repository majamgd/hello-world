const numbers =[1,2,3,4,1];
const count = countOccurrences(numbers,1);
console.log(count);
function countOccurrences(niz, broj) {
    let count = 0;
    for(i = 0; i<= niz.length; i++){
        if(niz[i] === broj){
            count++;
        }
    }
    return count;
}