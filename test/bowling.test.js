const {Juego} = require('../src/bowling');

const juegoMalo = (pinosTumbados) => {
    let juego = new Juego();

    for (let tirada = 1; tirada <= 20; tirada++) {
        juego.tirar(pinosTumbados);
    };

    return juego.score();
};

const juegoTumbaUno = (pinosTumbados) => {
    let juego = new Juego();

    for (let tirada = 1; tirada <= 20; tirada++) {
        juego.tirar(pinosTumbados);
    };

    return juego.score();
};

const juegoAlMenosUnSpare = (pinosTumbados) => {
    let juego = new Juego();

    juego.tirar(pinosTumbados);
    juego.tirar(pinosTumbados);
    juego.tirar(pinosTumbados);
    for (let tirada = 1; tirada <= 17; tirada++) {
        juego.tirar(0);
    };


    return juego.score();
};

const juegoAlMenosUnStrike = (pinosTumbados) => {
    let juego = new Juego();

    juego.tirar(pinosTumbados);
    juego.tirar(pinosTumbados);
    juego.tirar(pinosTumbados);
    for (let tirada = 1; tirada <= 17; tirada++) {
        juego.tirar(0);
    };


    return juego.score();
};


const juegoPerfecto = (pinosTumbados) => {
    let juego = new Juego();

    for (let tirada = 1; tirada <= 12; tirada++) {
        juego.tirar(pinosTumbados);
    };

    return juego.score();
};



describe ('Test juego de bowling', () => {

    it('Todos los tiros perdedores', () => {
        expect(juegoMalo(0)).toBe(0);
    });

    it('Todos los tiros derriba 1 bolo', () => {
        expect(juegoTumbaUno(1)).toBe(20);
    });

    it('Al menos un spare', () => {
        expect(juegoAlMenosUnSpare(5)).toBe(20);
    });

    it('Al menos un strike', () => {
        expect(juegoAlMenosUnStrike(10)).toBe(30);
    });

    it('Juego perfecto', () => {
        expect(juegoPerfecto(10)).toBe(300);
    }); 


});