const circle = {
    radius: 1,
    draw: function (){
        console.log('draw');
    }
};
function kloniranje(obj){
    const another = {};
    for(let key in obj){
        another[key] = obj[key];
    }
    return another;
}
let xxx = kloniranje(circle);
// console.log(xxx);

// drugi nacin preko metode assign
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
function kloniranje2(obj){
        //const another = Object.assign({},obj)
        //return another;
        return Object.assign({},obj);
}
let yyy = kloniranje2(circle);
// console.log(yyy);


function kloniranjeNizaObjekata(nizObjekata){
    // console.log(nizObjekata);
    let kloniraniNiz = [];
    for(i = 0; i < nizObjekata.length; i++){
        const obj = nizObjekata[i];
        // console.log(i, obj);
        kloniraniNiz.push(Object.assign({},obj));
    }
    return kloniraniNiz;
}
let zzz = kloniranjeNizaObjekata(osobe);
console.log(zzz);