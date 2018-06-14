
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { BrowserModule } from "@angular/platform-browser";

// Paginas
import { PendientesComponent } from '../pages/pendientes/pendientes.component';
import { TerminadosComponent } from '../pages/terminados/terminados.component';
import { TabsPage } from '../pages/tabs/tabs';
import { DetalleComponent } from './../pages/detalle/detalle.component';
import { AgregarComponent } from './../pages/agregar/agregar.component';
// Pipes
import { PlaceHolderPipe } from './pipes/placeholder.pipe';
import { PendientesPipe } from './pipes/pendientes.pipe';
// Servicios
import { ListaDeseosService } from './services/lista-deseos.services';

@NgModule({
  declarations: [
    MyApp,
    PendientesComponent,
    TerminadosComponent,
    PendientesComponent,
    TabsPage,
    PlaceHolderPipe,
    AgregarComponent,
    DetalleComponent,
    PendientesPipe
  ],
  imports: [IonicModule.forRoot(MyApp), BrowserModule],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PendientesComponent,
    TerminadosComponent,
    PendientesComponent,
    TabsPage,
    AgregarComponent,
    DetalleComponent
  ],
  providers: [
    ListaDeseosService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
