function zbir(a, b) {
    sum = a + b;
    return sum;
}

function kolicnik(a, b) {
    if (b === 0){
        throw new  Error('Nije dozvoljeno deljenje sa nulom');
    }
    kol = a/b;
    return kol;
}




try{
    console.log(kolicnik(9,0));
} catch (greska) {
    console.log(greska.toString());
}