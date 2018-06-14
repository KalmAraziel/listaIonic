import { ListaDeseosService } from './../../app/services/lista-deseos.services';
import { ListaItem } from './../../app/clases/lista-item';
import { Lista,  } from "./../../app/clases/lista";
import { AlertController } from "ionic-angular";
import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";

@Component({
  selector: "app-detalle",
  templateUrl: "detalle.component.html"
})
export class DetalleComponent {
  posicion: number;
  lista: Lista;
  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private _listaDeseosService: ListaDeseosService,
    public alertCtrl: AlertController
  ) {
    console.log(this.navParams);
    this.posicion = this.navParams.get("idx");
    this.lista = this.navParams.get("lista");
  }

  ngOnInit(): void {}

  actualizar(item: ListaItem) {
    console.log('actualizar');
    item.completo = !item.completo;    
    let todosMarcados = true;
    for (let item of this.lista.items) {
      if(!item.completo ){
        todosMarcados = false;
        break;
      }      
    }
    this.lista.terminado = todosMarcados;  
    this._listaDeseosService.actualizarData();
  }
  borrarItem() {
    
    let confirm = this.alertCtrl.create({
      title: this.lista.nombre,
      message:
        "¿Desea borrar la lista?",
      buttons: [
        {
          text: "Cancelar",
          handler: () => {
            console.log("Cancelar clickeado");
          }
        },
        {
          text: "Eliminar",
          handler: () => {
            this._listaDeseosService.eliminarLista(this.posicion);
            // Regresar a la pagina anterior
            this.navCtrl.pop();
          }
        }
      ]
    });
    confirm.present();
  }
}
