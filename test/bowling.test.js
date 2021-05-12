const {Juego} = require('../src/bowling');

const jugar = (pinosTumbados) => {
    let juego = new Juego();

    for (let i = 1; i <= 20; i++) {
        juego.tirar(pinosTumbados);
    };

    return juego.score();
};


describe ('Test juego de bowling', () => {

    it('Todos los tiros perdedores', () => {
        expect(jugar(0)).toBe(0);
    });

    it('Todos los tiros derriba 1 bolo', () => {
        expect(jugar(1)).toBe(20);
    });

    // it('Al menos un spare', () => {
    //     expect(jugar(5)).toBe(150);
    // })

});