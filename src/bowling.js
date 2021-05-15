class Juego {

    puntajeTotal;
    grillaJuegoGeneral;
    grillaPorTurno;
    turnoActual;
    tiradaTurnoActual;
    hiceSpare;
    hiceStrike;
    vecesQueJugo;
    
    constructor() {
        this.grillaJuegoGeneral = new Array(10);  // Es el arreglo para el anotador principal
        this.grillaPorTurno = new Array(3);       // Es el arreglo para el anotador del turno
        this.turnoActual = 0;                     // Lleva la cuenta del turno
        this.tiradaTurnoActual = 0;               // Lleva la cuenta de la tirada del turno
        this.puntajeTotal = 0;
        this.hiceSpare = false;
        this.hiceStrike = false;
        this.vecesQueJugo = 0;

    }

    tirar(pinosTumbados) {

        this.vecesQueJugo++;

        this.grillaPorTurno[this.tiradaTurnoActual] = pinosTumbados; //Pongo cuantos tumbó en la tirada

        this.tiradaTurnoActual++;

        if (this.hiceSpare) {
            this.puntajeTotal += 10 + pinosTumbados;
            this.hiceSpare = false;
        } else if (this.hiceStrike) {
            this.puntajeTotal += pinosTumbados;
            this.hiceStrike = false;
        };

        if (pinosTumbados === 10 && this.tiradaTurnoActual === 1) {
            this.hiceStrike = true;
        };

        if (this.tiradaTurnoActual === 2) {         // Para saber si es la segunda tirada del turno
            if (this.grillaPorTurno[this.tiradaTurnoActual - 2] + this.grillaPorTurno[this.tiradaTurnoActual - 1] === 10) { //Hice spare
                this.hiceSpare = true;
            } else {
                this.puntajeTotal += this.grillaPorTurno[0] + this.grillaPorTurno[1];
            };
            this.grillaJuegoGeneral[this.turnoActual] = this.grillaPorTurno; //Metemos la grilla del turno en la general
            this.turnoActual++;
            this.tiradaTurnoActual = 0;             // Reestablece valores de la tirada del turno
            this.grillaPorTurno = new Array(3);     // Crea un nuevo arreglo para el anotador del turno
        }

    };


    score() {
        return this.puntajeTotal;
    }

}

module.exports = { Juego };