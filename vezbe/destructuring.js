const laza = {
    ime : 'Laza',
    prezime : 'Lazic',
    godiste: 1999,
    pol: 'M'
};

// var ime = laza.ime;
// var prezime = laza.prezime;

const {
    ime,
    godiste: god,
    pol,
    prezime,
} = laza;


console.log(god);

const laza2 = { ...laza };
console.log(laza2);


function napraviAuto({model, marka, godiste}){
    console.log('AUTO', model, marka, godiste);
}

napraviAuto({marka: 'Opel', model: 'Zafira', godiste: 2000});