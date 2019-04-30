function Kvadrat(stranica) {
    this.tip = 'kvadrat';
    this.stranica = stranica;
    this.getObim = function () {
        return 4 * this.stranica;
    };
    this.getPovrsina = function () {
        return this.stranica * this.stranica;
    };
    this.getInfo = function () {
        return`Kvadrat(${this.stranica} x ${this.stranica}) povrsina:${this.getPovrsina()}, obim:${this.getObim()} `;
    }

}

function Pravougaonik(a, b) {
    this.tip = 'pravougaonik';
    this.a = a;
    this.b = b;
    this.getObim = function () {
        return 2*this.a + 2*this.b;
    };
    this.getPovrsina = function () {
        return this.a*this.b;
    };
    this.getInfo = function () {
        return`Pravougaonik(${this.a} x ${this.b}) povrsina:${this.getPovrsina()}, obim:${this.getObim()} `;
    }
}

function  slucajanBroj(a, b) {
    return Math.floor(Math.random() * (b - a) + a);
}

/**
 *
 * @param tip Vrsta oblika: kvadrat ili pravougaonik
 * @param min Minimalna vrednost strane
 * @param max Maksimalna =||=
 */
function createOblici(tip, min, max) {
    var a = slucajanBroj(min, max);
    if (tip === 'kvadrat') {
        return new Kvadrat(a);
    }
    if(tip === 'pravougaonik') {
        var b = slucajanBroj(min, max);
        return new Pravougaonik(a, b);
    }
}

// var k1 = createOblici('kvadrat', 2, 9);
// var p1 = createOblici('pravougaonik', 2, 9);
// console.log(k1.getInfo());
// console.log(p1.getInfo());

// var kvadrati = [
//     new Kvadrat(1),
//     new Kvadrat(2),
//     new Kvadrat(3)
// ];

var kvadrati = [];
for(i =0;i<100;i++){
    var kk = new Kvadrat(i);
    kvadrati.push(kk);
}

// for(i=0;i<kvadrati.length;i++){
//     var k = kvadrati[i];
//     if(k.getPovrsina() < 30){
//         console.log(k.getInfo());
//     }
// }

// kvadrati
//     .filter((k) => {
//         return k.getPovrsina() < 130;
//     })
//     .forEach((k) => {
//         console.log(k.getInfo());
//     });

var oblici = [];
for (i = 0; i < 100; i++) {
    oblici.push(createOblici('kvadrat', 1, 100));
    oblici.push(createOblici('pravougaonik', 1, 100));
}
// oblici.forEach((o) => {
//     console.log(o.getInfo());
// });

oblici
    .filter( o => {
        return o.tip === 'pravougaonik';
    })
    .forEach((o) => {
        console.log(o.getInfo());
    });