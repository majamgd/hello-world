


const mika = {
    ime: 'Mika',
    prezime: 'Mikic',
    info: function () {
        console.log(`Ja sam ${this.ime} ${this.prezime}`);
    }
};

const pera = {
    ime: 'Pera',
    prezime: 'Peric',
    info: function () {
        console.log(`Ja sam ${this.ime} ${this.prezime}`);
    },
    info2: function () {
        console.log(22222222);
    }
};

let i = 0;
for(let k in pera){
    i++;
    console.log(i, k, pera[k], typeof pera[k]);
}

// console.log(pera.ime);
// console.log(pera['ime']);


for(let k in pera){
    if(typeof pera[k] == 'function') {
        pera[k]();
    } else {
        // ispisi prop
        console.log(`${k}: ${pera[k]}`);
    }
}


// console.logog(Object.keys(pera)); // metod Object daje listu proppertia
// console.log(Object.entries(pera));

// check if object has property
if('godiste' in pera) {
    console.log('Objekat pera ima property godiste');
} else {
    console.log('Objekat pera NEMA property godiste');
}

if('ime' in pera) {
    console.log('Objekat pera ima property ime');
} else {
    console.log('Objekat pera NEMA property ime');
}


function aaa(){}

var xxx  = function(){};

{
    zzzz: function(){}
}