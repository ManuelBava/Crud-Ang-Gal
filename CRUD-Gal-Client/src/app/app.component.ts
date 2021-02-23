import { Component } from '@angular/core';
import { CrudAutoma } from './crudautoma';
import { Automabile, ModificaEvent } from './state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements Automabile {
  automa: CrudAutoma = new CrudAutoma(this);

  modifica() {
    this.automa.next(new ModificaEvent());
  }
}
