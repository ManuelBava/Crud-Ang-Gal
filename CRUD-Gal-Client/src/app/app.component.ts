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

  showNew: boolean = true;
  showFormDati: boolean = false;
  showModifica: boolean = false;
  showConferma: boolean = false;
  showAnnulla: boolean = false;
  showRimuovi: boolean = false;
  showSearch: boolean = true;
  showTable: boolean = false;

  nuova() {
    this.showNew = false;
    this.showFormDati = true;
    this.showModifica = true;
    this.showConferma = true;
    this.showAnnulla = true;
    this.showRimuovi = false;
    this.showSearch = false;
    this.showTable = false; 
    this.automa.next(new AddEvent());
      
  }

  modifica() {
    this.showNew = false;
    this.showFormDati = true;
    this.showModifica = true;
    this.showConferma = true;
    this.showAnnulla = true;
    this.showRimuovi = true;
    this.showSearch = false;
    this.showTable = false; 
    this.automa.next(new ModificaEvent());
  }

  conferma() {
    this.showNew = true;
    this.showFormDati = true;
    this.showModifica = true;
    this.showConferma = false;
    this.showAnnulla = false;
    this.showRimuovi = true;
    this.showSearch = true;
    this.showTable = true; 
    this.automa.next(new ConfermaEvent());
  }

  annulla() {
    this.showNew = true;
    this.showFormDati = true;
    this.showModifica = true;
    this.showConferma = false;
    this.showAnnulla = false;
    this.showRimuovi = true;
    this.showSearch = true;
    this.showTable = true; 
    this.automa.next(new AnnullaEvent());
  }

  rimuovi() {
    this.showNew = false;
    this.showFormDati = true;
    this.showModifica = true;
    this.showConferma = true;
    this.showAnnulla = true;
    this.showRimuovi = true;
    this.showSearch = false;
    this.showTable = true; 
    this.automa.next(new RimuoviEvent());
  }

  cerca() {
    this.showNew = true;
    this.showFormDati = false;
    this.showModifica = true;
    this.showConferma = false;
    this.showAnnulla = false;
    this.showRimuovi = true;
    this.showSearch = true;
    this.showTable = true; 
    this.automa.next(new RicercaEvent());
  }
}
