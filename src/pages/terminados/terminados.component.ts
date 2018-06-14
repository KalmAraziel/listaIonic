import { ListaDeseosService } from './../../app/services/lista-deseos.services';
import { NavController } from 'ionic-angular';
import { DetalleComponent } from './../detalle/detalle.component';

import { Component } from '@angular/core';

@Component({
    selector: 'app-terminados',
    templateUrl: 'terminados.component.html'
})

export class TerminadosComponent  {
    listaDeseos: any;
  constructor(
    public _listaDeseos: ListaDeseosService,
    public navCtrl:NavController
  ) {
    console.log(_listaDeseos);
    // this._listaDeseos.listas.filter(x => x.terminado == true);
    this.listaDeseos = _listaDeseos;
  }

 

  verDetalle(_lista, posiscion: number) {
    this.navCtrl.push(DetalleComponent, { lista: _lista, idx: posiscion });
  }
 
}
