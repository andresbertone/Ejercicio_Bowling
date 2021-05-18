class Juego {

    puntajeTotal;
    grillaJuegoGeneral;
    grillaPorTurno;
    turnoActual;
    tiradaTurnoActual;
    hiceSpare;
    hiceStrike;
    rachaStrike;
    
    constructor() {
        this.grillaJuegoGeneral = [];             // Es el arreglo para el anotador principal
        this.grillaPorTurno = [];                 // Es el arreglo para el anotador del turno
        this.turnoActual = 1;                     // Lleva la cuenta del turno
        this.tiradaTurnoActual = 1;               // Lleva la cuenta de la tirada del turno
        this.puntajeTotal = 0;
        this.hiceSpare = false;
        this.hiceStrike = false;
        this.rachaStrike = false;                 //Si nunca dejó de hacer strike

    }

    tirar(pinosTumbados) {

        if (this.hiceSpare) {
            this.grillaPorTurno.push(pinosTumbados); 
            this.grillaJuegoGeneral.push(this.grillaPorTurno);
            this.hiceSpare = false;
            this.grillaPorTurno = [];
        };

        if (this.tiradaTurnoActual === 1) {
            if (pinosTumbados === 10) {
                this.hiceStrike = true;
            } else {
                this.hiceStrike = false;
            };
            if (this.hiceStrike && this.grillaPorTurno.length === 3) {           //Hice strike
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
            this.turnoActual++;                                     //Sumo para que pase al otro turno
            this.tiradaTurnoActual = 1;                             // Reestablece valores de la tirada del turno
            if (!this.hiceSpare) {
                this.grillaPorTurno = [];                           // Crea un nuevo arreglo para el anotador del turno
            };
        } else {
            if (this.hiceStrike) {
                this.turnoActual++;                                     //Sumo para que pase al otro turno
                this.tiradaTurnoActual = 1;                             // Reestablece valores de la tirada del turno
            } else {
                this.tiradaTurnoActual++;
            };
        };

    };


    score() {
        console.log(this.grillaJuegoGeneral)
        this.grillaJuegoGeneral.forEach(turno => {
            this.puntajeTotal += turno.reduce((a,b) => a + b);
        });
        return this.puntajeTotal;
    }

}

module.exports = { Juego };