function Auto(marka, model, godiste, drzava, vozac) {
    this.marka = marka;
    this.model = model;
    this.godiste = godiste;
    this.drzava = drzava;
    this.vozac = vozac;

    // this.getInfo = function() {
    //     try {
    //         return `${this.marka} ${this.model} ${this.godiste} ${this.drzava} ${this.vozac.getInfo()}`;
    //     } catch (err) {
    //         console.log('Doslo je do greske', err);
    //         return 'N/A';
    //     }
    // }

    this.getInfo2 = function() {
        const vozacInfo = this.vozac ? this.vozac.getInfo() : 'N/A';
        return `${this.marka} ${this.model} ${this.godiste} ${this.drzava}, Vozac: ${vozacInfo}`;
    }

    this.getInfo = function() {
        return `${this.marka} ${this.model} ${this.godiste} ${this.drzava}, Vozac: ${this.vozac.getInfo()}`;
    }
}