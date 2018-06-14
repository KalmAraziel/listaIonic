import { ListaDeseosService } from './../../app/services/lista-deseos.services';
import { Component } from '@angular/core';
import { ListaItem, Lista } from './../../app/clases/index';
import { AlertController, NavController } from 'ionic-angular';

@Component({
  selector: 'app-agregar',
  templateUrl: 'agregar.component.html'
})
export class AgregarComponent  {
    nombreLista: string = '';
    nombreItem: string = '';
    items: ListaItem[] = [];

    constructor(
        public alertCtrl: AlertController,
        public navCtrl: NavController,
        public _listaDeseosService: ListaDeseosService
    ) {
        
    }


    agregarItem() {
        if (this.nombreItem.length == 0) {
            return;
        }
        let item = new ListaItem();
        item.nombre = this.nombreItem;
        this.items.push(item);
        this.nombreItem = '';
    }
    borrarItem(posiscion: number) {
        // elimino 1 posicion
        this.items.splice(posiscion, 1);
    }

    guardarLista() {
        if (this.nombreLista.length == 0) {
            let alert = this.alertCtrl.create({
                title: 'Nombre de la lista',
                subTitle: 'El nombre de la lista es necesario',
                buttons: ['OK']
            });
            alert.present();
            return;
        }
        let lista = new Lista(this.nombreLista);
        lista.items = this.items;
        this._listaDeseosService.agregarListas(lista);
        this.navCtrl.pop();
    }
}
