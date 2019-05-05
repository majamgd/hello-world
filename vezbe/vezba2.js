const pera = {
    ime : 'Pera',
    prezime : 'Peric',
    info : function () {
        console.log(`Ja sam ${this.ime} ${this.prezime} `);
    },
    info2 : function () {
        console.log('Hola!!!!!!!!!');
    }
};

for (let k in pera){
    //console.log(k, pera[k], typeof pera[k]);
    if(typeof pera[k] != 'function'){
        console.log(k, pera[k]);

    }
}