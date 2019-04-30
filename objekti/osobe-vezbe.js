var o1 = {
    ime: 'Zika',
    prezime: 'Zikic',
    godiste: 1990,
    zensko: false,
    getPolInfo: function () {
        return this.zensko === true ? 'Zensko' : 'Musko';
    },
    getInfo: function () {
        return `${this.ime} ${this.prezime} ${this.getGodine()} god, ${this.getPolInfo()}`;
    },
    getGodine: function () {
        return (2019 - this.godiste);
    }
};

var o2 = createOsoba1('Marija', 'Montesori', 1911, true);
var o3 = createOsoba2('Ana', 'Frank', 1911, true);

let osobeNiz = [
     new Osoba('Maja','Desic',1974,true),
     new Osoba('Dragan','Mijatovic',1973,false),
     new Osoba('Milica','Desic',2005,true),
     new Osoba('Gavrilo','Mijatovic',2011,false),
     new Osoba('Stana','Desic',1953,true),
     new Osoba('Milan','Desic',1975,false),
     new Osoba('Pera','Peric',1980,false),
     new Osoba('Mara','Maric',1985,true),
     new Osoba('Sara','Saric',1974,true),
    o1,
    o2,
    o3
];


// for(i=0;i<osobeNiz.length;i++){
//     console.log(osobeNiz[i].getInfo());
// }

// forEach - za svaki element radi ono sto je prosledjeno
osobeNiz.forEach((oo) => {
    // console.log(oo.ime)
});


// filter - suzava set podataka
// var zene = osobeNiz.filter((osoba) => {
//     return osoba.zensko;
// });
var zene = osobeNiz.filter(osoba => osoba.zensko);
// console.log(zene);

var muskarci = osobeNiz.filter(osoba => {
   return osoba.zensko === false;
});
// console.log(muskarci);

// map - modifikuje elemente niza
// var imena = osobeNiz.map( (o) => {
// //     return {
// //         ime: o.ime,
// //         prezime: o.prezime
// //     };
// // } );
// // console.log(imena);

var godista = osobeNiz.map((g) => {
    return {
      godiste : g.godiste
    };
});
// console.log(godista);

var xxx = osobeNiz
            .filter(osoba => osoba.zensko)
            .map(o => {
                return {ime : o.ime, godiste : o.godiste, zensko : o.zensko};
            })
            .forEach( o => console.log(o));

osobeNiz.forEach((aaa)=>{
    console.log(aaa.getInfo());
});