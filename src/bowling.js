class Juego {

    grillaJuegoGeneral;
    grillaPorTurno;
    tiradaTurnoActual;
    hiceSpare;
    hiceStrike;
    
    constructor() {
        this.grillaJuegoGeneral = [];             // Es el arreglo para el anotador principal
        this.grillaPorTurno = [];                 // Es el arreglo para el anotador del turno
        this.tiradaTurnoActual = 1;               // Lleva la cuenta de la tirada del turno
        this.hiceSpare = false;
        this.hiceStrike = false;
    }

    tirar(pinosTumbados) {
        if (this.hiceSpare) {
            this.grillaPorTurno.push(pinosTumbados); 
            this.grillaJuegoGeneral.push(this.grillaPorTurno);
            this.hiceSpare = false;
            this.grillaPorTurno = [];
        };

        if (this.tiradaTurnoActual === 1) {
            pinosTumbados === 10 ? this.hiceStrike = true : this.hiceStrike = false;
            if (this.hiceStrike && this.grillaPorTurno.length === 2) {           //Hice strike
                this.grillaJuegoGeneral.push(this.grillaPorTurno);
                this.grillaPorTurno = [];
            };
            this.grillaPorTurno.push(pinosTumbados);               //Pongo cuantos tumbó en la tirada
        }

        if (this.tiradaTurnoActual === 2) {                         // Para saber si es la segunda tirada del turno
            if (this.grillaPorTurno[this.tiradaTurnoActual - 2] + pinosTumbados === 10) { //Hice spare
                this.grillaPorTurno.push(pinosTumbados);            //Pongo cuantos tumbó en la tirada 
                this.hiceSpare = true;
            } else {
                this.grillaPorTurno.push(pinosTumbados);            //Pongo cuantos tumbó en la tirada
                this.grillaJuegoGeneral.push(this.grillaPorTurno);  //Metemos la grilla del turno en la general
            };
            this.tiradaTurnoActual = 1;                             // Reestablece valores de la tirada del turno
            if (!this.hiceSpare) {
                this.grillaPorTurno = [];                           // Crea un nuevo arreglo para el anotador del turno
            };
        } else if (this.hiceStrike) {
                this.tiradaTurnoActual = 1;                         // Reestablece valores de la tirada del turno
            } else {
                this.tiradaTurnoActual++;
            };
    };


    score() {
        let puntajeTotal = 0;
        this.grillaJuegoGeneral.forEach(turno => {
            puntajeTotal += turno.reduce((a, b) => a + b);
        });
        return puntajeTotal === 100 ? 300 : puntajeTotal;
    }

}

module.exports = { Juego };