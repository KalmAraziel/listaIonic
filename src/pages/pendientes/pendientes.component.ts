import { DetalleComponent } from './../detalle/detalle.component';
import { AgregarComponent } from './../agregar/agregar.component';
import { ListaDeseosService } from './../../app/services/lista-deseos.services';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: "app-pendientes",
  templateUrl: "pendientes.component.html"
})
export class PendientesComponent {
  listaDeseos: any;
  constructor(
    public _listaDeseos: ListaDeseosService,
    public navCtrl: NavController
  ) {
    console.log(_listaDeseos);
    // this._listaDeseos.listas.filter(x => x.terminado == true);
    this.listaDeseos = _listaDeseos;
  }

  irAgregar() {
    this.navCtrl.push(AgregarComponent);
  }

  verDetalle(_lista, posiscion: number) {
    this.navCtrl.push(DetalleComponent, { lista: _lista, idx: posiscion });
  }
}
