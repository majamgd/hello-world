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
function  brojacPropertija(obj){
    brojac = 0;
    for(let k in obj){
        if(typeof obj[k] != 'function' ){
            brojac ++;
        }
    }
    return brojac;
}
let brojProp = brojacPropertija(a1);

console.log(`Objekat ima ${brojProp} propertija.`);

function objektMinPropertija(nizobjekata) {
    let najmanji = {
        object : nizobjekata[0],
        brojPr : brojacPropertija(nizobjekata[0])
    };
    for(i = 0; i< nizobjekata.length; i++){
        const br = brojacPropertija(nizobjekata[i]);
        if(br<najmanji.brojPr){
            najmanji.object =nizobjekata[i];
            najmanji.brojPr = br;
        }
    }
    return najmanji;
}
var najmanjiRezultat = objektMinPropertija(osobe);
//console.log(najmanjiRezultat);
console.log(`Najmanji broj propertija je ${najmanjiRezultat.brojPr}.`);