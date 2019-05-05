let a1 = {
    ime : 'Pera',
    prezime : 'Peric',
    info : function () {
        console.log(`Ja sam ${this.ime} ${this.prezime}`)
    }
};
let a2 = {
    ime : 'Mika',
    prezime : 'Mikic',
    info : function () {
        console.log(`Ja sam ${this.ime} ${this.prezime}`)
    },
    godiste : 1974
};
let a3 = {
    ime : 'Laza',
    prezime : 'Lazic',
    info : function () {
        console.log(`Ja sam ${this.ime} ${this.prezime}`)
    },
    info2 : function () {
      console.log("Hola!");
    }
};
let a4 = {
    ime : 'Zika',
    prezime : 'Zikic',
    info : function () {
        console.log(`Ja sam ${this.ime} ${this.prezime}`)
    },
    godiste : 1973,
    pol : 'muski',
    zaposlen : true
};

let osobe = [
    a1,
    a2,
    a3,
    a4
];
function countObjectProperties(obj){
    counter = 0;
    for (let k in obj){
        if (typeof obj[k] !="function"){
            counter = counter +1;
        }
    }
    return counter;
}
// let num= countObjectProperties(a4);
// console.log(`Objekat ima ${num} propertija`);

function findObjectWithMaxProps(objects) {
    let winner = {
        object: null,
        count: 0
    };
    for( i =0 ; i<objects.length; i++){
        const num = countObjectProperties(objects[i]);
        if(num > winner.count) {
            winner.count = num;
            winner.object = objects[i];
        }
    }

    return winner;
}
let result = findObjectWithMaxProps(osobe);
const poruka = 'Objekat sa najvise propertija(' + result.count + ') je: ';
console.log(poruka, result.object);

