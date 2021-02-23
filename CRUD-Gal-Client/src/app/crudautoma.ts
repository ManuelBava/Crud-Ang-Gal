import { AddEvent, AnnullaEvent, Automabile, ConfermaEvent, Event, ModificaEvent, RicercaEvent, SelezionaEvent, State } from "./state";

export class CrudAutoma implements State {
    stato: State;
    ui: Automabile;
    constructor(ui: Automabile) {
        this.ui = ui;
    }


    next(e: Event) {
        this.stato.next(e);
    }
}

export class Ricerca implements State {
    next(e: Event, a: CrudAutoma) {
        if (e instanceof AddEvent) {
            a.stato = new Ricerca();
        } else if (e instanceof SelezionaEvent) {
            a.stato = new Visualizza();
        } else if (e instanceof AddEvent) {
            a.stato = new Aggiungi();
        }
    }
}

export class Aggiungi implements State {
    next(e: Event, a: CrudAutoma) {
        if (e instanceof ConfermaEvent) {
            a.stato = new Visualizza();
        } else if (e instanceof AnnullaEvent) {
            a.stato = new Ricerca();
        }
    }
}

export class Visualizza implements State {
    next(e: Event, a: CrudAutoma) {
        if (e instanceof ModificaEvent) {
            a.stato = new Ricerca();
        } else if (e instanceof RicercaEvent) {
            a.stato = new Ricerca();
        } else if (e instanceof AddEvent) {
            a.stato = new Aggiungi();
        }
    }
}

export class Modifica implements State {
    next(e: Event, a: CrudAutoma) {
        if (e instanceof AnnullaEvent) {
            a.stato = new Visualizza();
        } else if (e instanceof ConfermaEvent) {
            a.stato = new Visualizza();
        }
    }
}

export class Rimuovi implements State {
    next(e: Event, a: CrudAutoma) {
        if (e instanceof AnnullaEvent) {
            a.stato = new Visualizza();
        } else if (e instanceof ConfermaEvent) {
            a.stato = new Ricerca();
        }
    }
}

