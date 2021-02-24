import { Component } from '@angular/core';
import { CrudAutoma } from './crudautoma';
import { AddEvent, AnnullaEvent, Automabile, ConfermaEvent, ModificaEvent, RicercaEvent, RimuoviEvent } from './state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements Automabile {
  automa: CrudAutoma = new CrudAutoma(this);

  codice: string;
  descrizione: string;
  cercaPerCodice: string;
  showNew: boolean = true;
  showFormDati: boolean = false;
  showModifica: boolean = false;
  showConferma: boolean = false;
  showAnnulla: boolean = false;
  showRimuovi: boolean = false;
  showSearch: boolean = true;
  showTable: boolean = false;
  disableInputs: boolean = false;


  entraStatoRicerca() {
    this.showNew = true;
    this.showFormDati = false;
    this.showModifica = false;
    this.showConferma = false;
    this.showAnnulla = false;
    this.showRimuovi = false;
    this.showSearch = true;
    this.showTable = true;
  }

  entraStatoRimuovi() {
    this.showNew = false;
    this.showFormDati = true;
    this.showModifica = false;
    this.showConferma = true;
    this.showAnnulla = true;
    this.showRimuovi = false;
    this.showSearch = false;
    this.showTable = false;
    this.disableInputs = false;
  }

  entraStatoModifica() {
    this.showNew = false;
    this.showFormDati = true;
    this.showModifica = true;
    this.showConferma = true;
    this.showAnnulla = true;
    this.showRimuovi = true;
    this.showSearch = false;
    this.showTable = false;
    this.disableInputs = true;
  }

  entraStatoVisualizza() {
    this.showNew = true;
    this.showFormDati = true;
    this.showModifica = true;
    this.showConferma = true;
    this.showAnnulla = true;
    this.showRimuovi = true;
    this.showSearch = true;
    this.showTable = true;
    this.disableInputs = false;
  }

  entraStatoAggiungi() {
    this.showNew = false;
    this.showFormDati = true;
    this.showModifica = true;
    this.showConferma = true;
    this.showAnnulla = true;
    this.showRimuovi = true;
    this.showSearch = false;
    this.showTable = false;
    this.disableInputs = true;
    this.codice = "";
    this.descrizione = "";
  }

  nuova() {
    this.automa.next(new AddEvent());
  }

  modifica() {
 
    this.automa.next(new ModificaEvent());
  }

  conferma() {
    this.automa.next(new ConfermaEvent());
  }

  annulla() {
    this.automa.next(new AnnullaEvent(), this.automa);
  }

  rimuovi() {
    this.automa.next(new RimuoviEvent(), this.automa);
  }

  cerca() {
    this.automa.next(new RicercaEvent(), this.automa);
  }
}
