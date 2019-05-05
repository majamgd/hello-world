var brojevi = [1,22,4,56,8,88];
function nadjiNajveciBroj(brojevi) {
    var max = brojevi[0];
    for(i = 0;i< brojevi.length; i++){
        if( brojevi[i] > max){
             max = brojevi[i];
        }
    }
    return max;
}
var najveci = nadjiNajveciBroj(brojevi);
//console.log(najveci);

function nadjiNajmanjiBroj(brojevi) {
    var min = brojevi[0];
    for(i=0; i<brojevi.length; i++){
        if(brojevi[i]< min){
            min = brojevi[i];
        }
    }
    return min;
}
var najmanji = nadjiNajmanjiBroj(brojevi);
//console.log(najmanji);

function nadjiNajveciNajmanjiBroj(brojevi) {
    var max = brojevi[0];
    var min = brojevi[0];
    var sum = 0;
    for(i = 0;i< brojevi.length; i++){
        sum=sum + brojevi[i];


        if(brojevi[i]>max){
            max = brojevi[i];
        }
        if(brojevi[i]<min){
            min = brojevi[i];
        }
    }
    return {
        min : min,
        max : max,
        averige : sum/brojevi.length
    };
}
var rezultat = nadjiNajveciNajmanjiBroj(brojevi);
console.log(rezultat);
console.log(`Najmanji broj je ${rezultat.min}.`);