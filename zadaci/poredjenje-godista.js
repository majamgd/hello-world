
let osobe = [
    {
        ime: 'Pera',
        prezime: 'Peric',
        datumRodjenja: '1974-08-01',
        birthday: function () {
            return new Date(this.datumRodjenja)
        }
    },
    {
        ime: 'Mika',
        prezime: 'Mikic',
        datumRodjenja: '2009-12-11',
        birthday: function () {
            return new Date(this.datumRodjenja)
        }
    },
    {
        ime: 'Laza',
        prezime: 'Lazic',
        datumRodjenja: '2008-09-13',
        birthday: function () {
            return new Date(this.datumRodjenja)
        }
    },
    {
        ime: 'Zika',
        prezime: 'Zikic',
        datumRodjenja: '2005-02-03',
        birthday: function () {
            return new Date(this.datumRodjenja)
        }

    },
    {
        ime: 'Zora',
        prezime: 'Zoric',
        datumRodjenja: '2000-06-17',
        birthday: function () {
            return new Date(this.datumRodjenja)
        }
    }
];


let najmladji = osobe[0];
for (let i = 0; i < osobe.length; i++) {

    if(osobe[i].birthday() > najmladji.birthday()){
        console.log(i);
        najmladji = osobe[i];
    }
}

console.log(najmladji);