/**
 * Ova funkcija prolazi kroz sve elemente objekta i proverava da li je funkcija.
 * Ako je funkcija i naziv funkcije pocinje sa vrednoscu varijable str onda se poziva ta funkcija
 * i resultat tog izvrsenja stavlja u niz.
 * Na kraju funkcija vraca taj niz. Ako ne postoji nijedna funkcija koja pocinje sa zadatim stringom vraca se prazan niz.
 * @param {*} data Array of objects
 * @param {*} str Neki string
 */

const data = {
    ime: 'Mici',
    ocene: [10,9,8],
    ljubimci: {
        vrsta : 'kuca',
        ime: 'Laki'
    },
    getInfo: function() {
        return 'Neki infoooo';
    },
    start: function() {
        return 'Starttt';
    },
    stop: function() {
        return 'Stoppp';
    }
};

const executeFunctions = (data, str) => {
    // if(!data){
    //     throw new Error('Fali objekat!!!');
    // }

    let xxx = [];
    
    for(let k in data){
        if(typeof data[k] == 'function' && k.startsWith(str)){
           let yyy = data[k]();
           xxx.push(yyy);
        }    
    } 
    return xxx;
};

module.exports = {
    executeFunctions
};