//Objekti nacin 1:object literal
let a1 = {
    marka: 'Opel',
    model: 'Zafira',
    godiste: 2007,
    drzava: 'Nemacka',
    getInfo: function () {
        return `${this.marka} ${this.model} ${this.godiste} ${this.drzava}`;
    }
};

// console.log(a1.getInfo());
//console.log('Marka: ' + a1.marka);
// console.log(`Marka: ${a1.marka}`);

//Objekti nacin 2:using costructor function
//Prvo pravimo klasu od koje cemo kasnije napraviti konkretne objekte(objekat=instanca)

function  Auto(marka,model,godiste,drzava) {
    this.marka = marka;
    this.model = model;
    this.godiste = godiste;
    this.drzava = drzava;

    this.getInfo = function() {
        return `${this.marka} ${this.model} ${this.godiste} ${this.drzava}`;
    }
}

var a2 = new Auto('BMW','x4','2012','Nemacka');
var a3 = new Auto('BMW','x5','2012','Nemacka');
// console.log(a2.getInfo());



let garaza1 = [
    a1,
    a2,
    new Auto('Citroen','Xsara','2004','Francuska'),
    new Auto('Fijat','Zastava','1980','Srbija'),
    new Auto('Toyota','Corola','1988','Japan'),
    new Auto('Mazda','6','2002','Japan')
];

// for(i=0;i<garaza1.length;i++){
//     console.log(garaza1[i].getInfo())
// }

// let garazaNemci = [];
// for(i=0;i<garaza1.length;i++){
//     if(garaza1[i].drzava === 'Nemacka'){
//         garazaNemci.push(garaza1[i]);
//     }
// }

// for(i=0;i<garazaNemci.length;i++) {
//     console.log(garazaNemci[i].getInfo())
// }



garaza1
    .filter( a => a.drzava === 'Nemacka')
    .forEach( a => console.log(a.getInfo()));


var godista = garaza1.map( auto => auto.godiste );
// console.log(godista);

console.log(garaza1);
var godistaIDrzave = garaza1.map( auto => {
    return {drzava: auto.drzava, godiste: auto.godiste, nesto: 'aaaa'};
} );
console.log(godistaIDrzave);







