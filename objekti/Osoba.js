function  Osoba(ime, prezime, godiste, z,n) {
    this.ime = ime;
    this.prezime = prezime;
    this.godiste = godiste;
    this.zensko = z;
    this.getPolInfo = function () {
        // ternary operator
        return this.zensko === true ? 'Zensko' : 'Musko';
    };
    // this.getPolInfo2 = function () {
    //     if(this.zensko === true){
    //         return 'Zensko'
    //     }else{
    //        return 'Musko'
    //     }
    // };
    // this.getPolInfo3 = function () {
    //     var pol = '';
    //     if(this.zensko === true){
    //         pol = 'Zensko'
    //     }else{
    //         pol = 'Musko'
    //     }
    //     return pol;
    // };
    // this.getPolInfo4 = function () {
    //     var pol = 'Musko';
    //     if(this.zensko === true){
    //         pol = 'Zensko'
    //     }
    //     return pol;
    // };
    this.getInfo = function(){
        return `${this.ime} ${this.prezime} ${this.getGodine()} god, ${this.getPolInfo()}`;
    };
    this.getGodine = function () {
        return ((new Date()).getFullYear() - this.godiste);
    }
}

// helper, factory function
function createOsoba1(ime, prezime, godiste, female) {
    return {
        ime: ime,
        prezime: prezime,
        godiste: godiste,
        zensko: female,
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
}

function createOsoba2(ime, prezime, godiste, female) {
    return new Osoba(ime, prezime, godiste, female);
}