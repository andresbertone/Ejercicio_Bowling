class Juego {

    puntajeTotal;
    
    
    constructor() {
        this.puntajeTotal = 0;
    }

    tirar(pinosTumbados) {
        this.puntajeTotal += pinosTumbados;
    };

    score() {
        return this.puntajeTotal;
    }

}

module.exports = {Juego};