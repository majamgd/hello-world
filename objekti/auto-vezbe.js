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






let osobe = [
    new Osoba('Maja','Desic',1974,true),
    new Osoba('Dragan','Mijatovic',1973,false),
    new Osoba('Milica','Desic',2005,true),
    new Osoba('Gavrilo','Mijatovic',2011,false),
    new Osoba('Stana','Desic',1953,true),
    new Osoba('Milan','Desic',1975,false),
    new Osoba('Pera','Peric',1980,false),
    new Osoba('Mara','Maric',1985,true),
    new Osoba('Sara','Saric',1974,true)
];

var a2 = new Auto('BMW','x4','2012','Nemacka');
var a3 = new Auto('BMW','x5','2012','Nemacka', osobe[1]);

let garaza = [
    a1,
    a2,
    a3,
    new Auto('Citroen','Xsara','2004','Francuska'),
    new Auto('Fijat','Zastava','1980','Srbija'),
    new Auto('Toyota','Corola','1988','Japan', osobe[1]),
    new Auto('Wolkswagen','Golf','1992','Germany', osobe[1]),
    new Auto('Mazda','6','2002','Japan', osobe[0])
];








