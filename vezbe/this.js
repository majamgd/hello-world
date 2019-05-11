// function Osoba(ime) {
//
//     this.ime = ime;
//     this.getInfo = function () {
//         console.log('Ja sam ' + this.ime);
//     };
//     this.promeni = function (ime) {
//         this.ime = ime;
//     };
//
// }
// xxx = 123;
//
// function proba() {
//     var ccc = 1122;
//     ddd = 2222;
//     console.log(this);
// }
//
// var zzz = 345;

const video1 = {
    title: 'a',
    tags: ['a','b','c'],
    showTags(){
        this.tags.forEach(function(tt){
            console.log(this.title, tt);
        });
    }
};

const video2 = {
    title: 'a',
    tags: ['a','b','c'],
    showTags(){
        this.tags.forEach(function(tt){
            console.log(this.title, tt);
        }, this);
    }
};

const video3 = {
    title: 'a',
    tags: ['a','b','c'],
    showTags(){
        var that = this;
        this.tags.forEach(function(tt){
            console.log(that.title, tt);
        });
    }
};

video1.showTags(); // this je globalni objekat
video2.showTags();
video3.showTags();