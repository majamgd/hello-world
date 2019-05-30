

let osobe = [
    {
        ime : 'Pera',
        prezime : 'Peric',
        info : function () {
            console.log(`Ja sam ${this.ime} ${this.prezime}`)
        }
    },
    {
        ime : 'Mika',
        prezime : 'Mikic',
        info : function () {
            console.log(`Ja sam ${this.ime} ${this.prezime}`)
        },
        godiste : 1974
    },
    {
        ime : 'Laza',
        prezime : 'Lazic',
        info : function () {
            console.log(`Ja sam ${this.ime} ${this.prezime}`)
        }
    },
    {
        ime : 'Zika',
        prezime : 'Zikic',
        info : function () {
            console.log(`Ja sam ${this.ime} ${this.prezime}`)
        },
        godiste : 1973,
        pol : 'muski',
        zaposlen : true
    },
    {
        ime : 'Zora',
        prezime : 'Zoric',
        info : function () {
            console.log(`Ja sam ${this.ime} ${this.prezime}`)
        },
        godiste : 1973
    }
];

// 1. forEach
osobe.forEach( (item) => {
     item.info();
} );

// 2. map
const osobe2 = osobe.map( (item) => {
    return {
        ime: item.ime,
        prezime: item.prezime,
        pol: item.pol,
    };
} );
// console.log(osobe2);


// 3. filter: vraca niz 
let izfiltrirano = osobe.filter( (item) => {
    return item.ime.startsWith('Z');
} );
// console.log(izfiltrirano);

// 4. find: vraca jedan element, prvi nadjen
// let nadjeno = osobe.find( (item) => {
//     return item.ime.startsWith('Z');
// } );
//let nadjeno = osobe.find( item => item.ime.startsWith('Z'));
//console.log(nadjeno);