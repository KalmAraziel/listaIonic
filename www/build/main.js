webpackJsonp([0],{

/***/ 108:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__terminados_terminados_component__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pendientes_pendientes_component__ = __webpack_require__(191);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__pendientes_pendientes_component__["a" /* PendientesComponent */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__terminados_terminados_component__["a" /* TerminadosComponent */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\mahumadam\Desktop\CursoAngular\5.deseos\src\pages\tabs\tabs.html"*/'<ion-tabs color="primary">\n    <ion-tab [root]="tab1Root" tabTitle="Pendientes" tabIcon="home"></ion-tab>\n    <ion-tab [root]="tab2Root" tabTitle="Terminados" tabIcon="information-circle"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"C:\Users\mahumadam\Desktop\CursoAngular\5.deseos\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TerminadosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_services_lista_deseos_services__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detalle_detalle_component__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TerminadosComponent = /** @class */ (function () {
    function TerminadosComponent(_listaDeseos, navCtrl) {
        this._listaDeseos = _listaDeseos;
        this.navCtrl = navCtrl;
        console.log(_listaDeseos);
        // this._listaDeseos.listas.filter(x => x.terminado == true);
        this.listaDeseos = _listaDeseos;
    }
    TerminadosComponent.prototype.verDetalle = function (_lista, posiscion) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__detalle_detalle_component__["a" /* DetalleComponent */], { lista: _lista, idx: posiscion });
    };
    TerminadosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'app-terminados',template:/*ion-inline-start:"C:\Users\mahumadam\Desktop\CursoAngular\5.deseos\src\pages\terminados\terminados.component.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <ion-title>Lista de Terminados</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <ion-grid *ngIf="( listaDeseos.listas | pendientes:true ).length === 0">\n\n        <ion-row>\n\n            <ion-col class="text-center caja-vacia">\n\n                <ion-icon class="icono-grande" ios="ios-sunny" md="md-sunny"></ion-icon>\n\n                <p>No hay ninguna lista.</p>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n\n\n    <ion-card *ngFor="let lista of listaDeseos.listas | pendientes:true; let idx = index">\n\n        <ion-item color="dark" (click)="verDetalle(lista,idx)">\n\n            <h2>{{lista.nombre}}</h2>\n\n            <ion-note item-right>\n\n                {{lista.items.length}} items\n\n            </ion-note>\n\n        </ion-item>\n\n\n\n        <ion-list>\n\n            <ion-item *ngFor="let item of lista.items | slice:0:2" (click)="verDetalle(lista,idx)">\n\n                <ion-icon *ngIf="!item.completo" ios="ios-square-outline" md="md-square-outline"></ion-icon>\n\n                <ion-icon *ngIf="item.completo" ios="ios-checkbox-outline" md="md-checkbox-outline"></ion-icon>\n\n                {{item.nombre}}\n\n            </ion-item>\n\n\n\n            <ion-item class="text-center" *ngIf="lista.items.length > 2">\n\n                <ion-icon color="primary" ios="ios-arrow-dropdown" md="md-arrow-dropdown"></ion-icon>\n\n            </ion-item>\n\n\n\n        </ion-list>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\mahumadam\Desktop\CursoAngular\5.deseos\src\pages\terminados\terminados.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__app_services_lista_deseos_services__["a" /* ListaDeseosService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], TerminadosComponent);
    return TerminadosComponent;
}());

//# sourceMappingURL=terminados.component.js.map

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PendientesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__detalle_detalle_component__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__agregar_agregar_component__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_lista_deseos_services__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PendientesComponent = /** @class */ (function () {
    function PendientesComponent(_listaDeseos, navCtrl) {
        this._listaDeseos = _listaDeseos;
        this.navCtrl = navCtrl;
        console.log(_listaDeseos);
        // this._listaDeseos.listas.filter(x => x.terminado == true);
        this.listaDeseos = _listaDeseos;
    }
    PendientesComponent.prototype.irAgregar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__agregar_agregar_component__["a" /* AgregarComponent */]);
    };
    PendientesComponent.prototype.verDetalle = function (_lista, posiscion) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__detalle_detalle_component__["a" /* DetalleComponent */], { lista: _lista, idx: posiscion });
    };
    PendientesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: "app-pendientes",template:/*ion-inline-start:"C:\Users\mahumadam\Desktop\CursoAngular\5.deseos\src\pages\pendientes\pendientes.component.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <ion-title>Lista de Pendientes</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n    <ion-grid *ngIf="( listaDeseos.listas | pendientes:false ).length === 0">\n\n        <ion-row>\n\n            <ion-col class="text-center caja-vacia">\n\n                <ion-icon class="icono-grande" ios="ios-sunny" md="md-sunny"></ion-icon>\n\n                <p>No hay ninguna lista.</p>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n    <ion-card *ngFor="let lista of listaDeseos.listas | pendientes:false; let idx = index">\n\n        <ion-item color="dark" (click)="verDetalle(lista,idx)">\n\n            <h2>{{lista.nombre}}</h2>\n\n            <ion-note item-right>\n\n                {{lista.items.length}} items\n\n            </ion-note>\n\n        </ion-item>\n\n\n\n        <ion-list>\n\n            <ion-item *ngFor="let item of lista.items | slice:0:2" (click)="verDetalle(lista,idx)">\n\n                <ion-icon *ngIf="!item.completo" ios="ios-square-outline" md="md-square-outline"></ion-icon>\n\n                <ion-icon *ngIf="item.completo" ios="ios-checkbox-outline" md="md-checkbox-outline"></ion-icon>\n\n                {{item.nombre}}\n\n            </ion-item>\n\n\n\n            <ion-item class="text-center" *ngIf="lista.items.length > 2">\n\n                <ion-icon color="primary" ios="ios-arrow-dropdown" md="md-arrow-dropdown"></ion-icon>\n\n            </ion-item>\n\n\n\n        </ion-list>\n\n    </ion-card>\n\n\n\n    <ion-fab right bottom>\n\n        <button ion-fab color="primary" (click)="irAgregar()">\n\n            <ion-icon name="ios-add" md="md-add"></ion-icon>\n\n        </button>\n\n    </ion-fab>\n\n</ion-content>'/*ion-inline-end:"C:\Users\mahumadam\Desktop\CursoAngular\5.deseos\src\pages\pendientes\pendientes.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__app_services_lista_deseos_services__["a" /* ListaDeseosService */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* NavController */]])
    ], PendientesComponent);
    return PendientesComponent;
}());

//# sourceMappingURL=pendientes.component.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgregarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_services_lista_deseos_services__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_clases_index__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AgregarComponent = /** @class */ (function () {
    function AgregarComponent(alertCtrl, navCtrl, _listaDeseosService) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this._listaDeseosService = _listaDeseosService;
        this.nombreLista = '';
        this.nombreItem = '';
        this.items = [];
    }
    AgregarComponent.prototype.agregarItem = function () {
        if (this.nombreItem.length == 0) {
            return;
        }
        var item = new __WEBPACK_IMPORTED_MODULE_2__app_clases_index__["b" /* ListaItem */]();
        item.nombre = this.nombreItem;
        this.items.push(item);
        this.nombreItem = '';
    };
    AgregarComponent.prototype.borrarItem = function (posiscion) {
        // elimino 1 posicion
        this.items.splice(posiscion, 1);
    };
    AgregarComponent.prototype.guardarLista = function () {
        if (this.nombreLista.length == 0) {
            var alert_1 = this.alertCtrl.create({
                title: 'Nombre de la lista',
                subTitle: 'El nombre de la lista es necesario',
                buttons: ['OK']
            });
            alert_1.present();
            return;
        }
        var lista = new __WEBPACK_IMPORTED_MODULE_2__app_clases_index__["a" /* Lista */](this.nombreLista);
        lista.items = this.items;
        this._listaDeseosService.agregarListas(lista);
        this.navCtrl.pop();
    };
    AgregarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'app-agregar',template:/*ion-inline-start:"C:\Users\mahumadam\Desktop\CursoAngular\5.deseos\src\pages\agregar\agregar.component.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <ion-title>{{ nombreLista | placeholder: \'Nueva Lista\' }}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <ion-card>\n\n        <ion-card-header>\n\n            <ion-item>\n\n                <ion-label floating>Nombre de la lista</ion-label>\n\n                <ion-input type="text" [(ngModel)]="nombreLista" name="nombreLista"></ion-input>\n\n            </ion-item>\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n            <ion-item>\n\n                <ion-label floating>Item:</ion-label>\n\n                <ion-input (keyup.enter)="agregarItem()" type="text" [(ngModel)]="nombreItem" name="nombreItem"></ion-input>\n\n            </ion-item>\n\n            <button ion-button (click)="agregarItem()" class="button-block">Agregar Item</button>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <!--Item-->\n\n\n\n    <ion-card *ngIf="items.length > 0">\n\n        <ion-card-header>\n\n            <h3>Items Agregados</h3>\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n            <ion-list>\n\n                <ion-item *ngFor="let item of items; let i = index">\n\n                    <button ion-button outline color="dark">{{item.nombre}}</button>\n\n\n\n                    <button (click)="borrarItem(i)" ion-button outline item-right color="danger">\n\n                        <ion-icon ios="ios-trash" md="md-trash"></ion-icon>\n\n                        Borrar Item\n\n                    </button>\n\n                </ion-item>\n\n            </ion-list>\n\n\n\n        </ion-card-content>\n\n\n\n    </ion-card>\n\n\n\n    <button (click)="guardarLista()" ion-button icon-left class="button-block">\n\n        <ion-icon ios="ios-add-circle" md="md-add-circle"></ion-icon>\n\n        Agregar Lista\n\n    </button>\n\n</ion-content>'/*ion-inline-end:"C:\Users\mahumadam\Desktop\CursoAngular\5.deseos\src\pages\agregar\agregar.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0__app_services_lista_deseos_services__["a" /* ListaDeseosService */]])
    ], AgregarComponent);
    return AgregarComponent;
}());

//# sourceMappingURL=agregar.component.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(217);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_pendientes_pendientes_component__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_terminados_terminados_component__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_detalle_detalle_component__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_agregar_agregar_component__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pipes_placeholder_pipe__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pipes_pendientes_pipe__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_lista_deseos_services__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// Paginas





// Pipes


// Servicios

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_pendientes_pendientes_component__["a" /* PendientesComponent */],
                __WEBPACK_IMPORTED_MODULE_5__pages_terminados_terminados_component__["a" /* TerminadosComponent */],
                __WEBPACK_IMPORTED_MODULE_4__pages_pendientes_pendientes_component__["a" /* PendientesComponent */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pipes_placeholder_pipe__["a" /* PlaceHolderPipe */],
                __WEBPACK_IMPORTED_MODULE_8__pages_agregar_agregar_component__["a" /* AgregarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__pages_detalle_detalle_component__["a" /* DetalleComponent */],
                __WEBPACK_IMPORTED_MODULE_10__pipes_pendientes_pipe__["a" /* PendientesPipe */]
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */], {}, {
                    links: []
                }), __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_pendientes_pendientes_component__["a" /* PendientesComponent */],
                __WEBPACK_IMPORTED_MODULE_5__pages_terminados_terminados_component__["a" /* TerminadosComponent */],
                __WEBPACK_IMPORTED_MODULE_4__pages_pendientes_pendientes_component__["a" /* PendientesComponent */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_agregar_agregar_component__["a" /* AgregarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__pages_detalle_detalle_component__["a" /* DetalleComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__services_lista_deseos_services__["a" /* ListaDeseosService */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_tabs_tabs__ = __webpack_require__(189);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyApp = /** @class */ (function () {
    function MyApp(platform) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\mahumadam\Desktop\CursoAngular\5.deseos\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\mahumadam\Desktop\CursoAngular\5.deseos\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lista_item__ = __webpack_require__(262);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__lista_item__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lista__ = __webpack_require__(263);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__lista__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaItem; });
var ListaItem = /** @class */ (function () {
    function ListaItem() {
    }
    return ListaItem;
}());

//# sourceMappingURL=lista-item.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Lista; });
var Lista = /** @class */ (function () {
    function Lista(nombre) {
        this.nombre = nombre;
        this.terminado = false;
    }
    return Lista;
}());

//# sourceMappingURL=lista.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaceHolderPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PlaceHolderPipe = /** @class */ (function () {
    function PlaceHolderPipe() {
    }
    PlaceHolderPipe.prototype.transform = function (value, defecto) {
        return (value) ? value : defecto;
    };
    PlaceHolderPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({ name: 'placeholder' })
    ], PlaceHolderPipe);
    return PlaceHolderPipe;
}());

//# sourceMappingURL=placeholder.pipe.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PendientesPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// pure:false para que siempre escuche los cambios
var PendientesPipe = /** @class */ (function () {
    function PendientesPipe() {
    }
    PendientesPipe.prototype.transform = function (listas, estado) {
        console.log(listas);
        console.log('estado ' + estado);
        var listaFiltrada = [];
        for (var _i = 0, listas_1 = listas; _i < listas_1.length; _i++) {
            var lista = listas_1[_i];
            if (lista.terminado == estado) {
                listaFiltrada.push(lista);
            }
        }
        return listaFiltrada;
    };
    PendientesPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'pendientes',
            pure: false
        })
    ], PendientesPipe);
    return PendientesPipe;
}());

//# sourceMappingURL=pendientes.pipe.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaDeseosService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListaDeseosService = /** @class */ (function () {
    function ListaDeseosService() {
        this.listas = [];
        this.cargarData();
    }
    ListaDeseosService.prototype.actualizarData = function () {
        localStorage.setItem('data', JSON.stringify(this.listas));
    };
    ListaDeseosService.prototype.cargarData = function () {
        if (localStorage.getItem('data')) {
            this.listas = JSON.parse(localStorage.getItem("data"));
        }
    };
    ListaDeseosService.prototype.agregarListas = function (lista) {
        this.listas.push(lista);
        this.actualizarData();
    };
    ListaDeseosService.prototype.eliminarLista = function (idx) {
        this.listas.splice(idx, 1);
        this.actualizarData();
    };
    ListaDeseosService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ListaDeseosService);
    return ListaDeseosService;
}());

//# sourceMappingURL=lista-deseos.services.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_services_lista_deseos_services__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DetalleComponent = /** @class */ (function () {
    function DetalleComponent(navCtrl, navParams, _listaDeseosService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._listaDeseosService = _listaDeseosService;
        this.alertCtrl = alertCtrl;
        console.log(this.navParams);
        this.posicion = this.navParams.get("idx");
        this.lista = this.navParams.get("lista");
    }
    DetalleComponent.prototype.ngOnInit = function () { };
    DetalleComponent.prototype.actualizar = function (item) {
        console.log('actualizar');
        item.completo = !item.completo;
        var todosMarcados = true;
        for (var _i = 0, _a = this.lista.items; _i < _a.length; _i++) {
            var item_1 = _a[_i];
            if (!item_1.completo) {
                todosMarcados = false;
                break;
            }
        }
        this.lista.terminado = todosMarcados;
        this._listaDeseosService.actualizarData();
    };
    DetalleComponent.prototype.borrarItem = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: this.lista.nombre,
            message: "¿Desea borrar la lista?",
            buttons: [
                {
                    text: "Cancelar",
                    handler: function () {
                        console.log("Cancelar clickeado");
                    }
                },
                {
                    text: "Eliminar",
                    handler: function () {
                        _this._listaDeseosService.eliminarLista(_this.posicion);
                        // Regresar a la pagina anterior
                        _this.navCtrl.pop();
                    }
                }
            ]
        });
        confirm.present();
    };
    DetalleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: "app-detalle",template:/*ion-inline-start:"C:\Users\mahumadam\Desktop\CursoAngular\5.deseos\src\pages\detalle\detalle.component.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <ion-title>{{lista.nombre}}</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <ion-card>\n\n        <ion-card-header>\n            <ion-item>\n                <ion-label floating>Nombre de la Lista</ion-label>\n                <ion-input type="text" [(ngModel)]="lista.nombre"></ion-input>\n            </ion-item>\n        </ion-card-header>\n\n        <ion-card-content>\n            <ion-list>\n                <ion-item *ngFor="let item of lista.items" (click)="actualizar(item)">\n                    <ion-icon item-left *ngIf="!item.completo" ios="ios-square-outline" md="md-square-outline"></ion-icon>\n                    <ion-icon item-left *ngIf="item.completo" ios="ios-checkbox-outline" md="md-checkbox-outline"></ion-icon>\n                    <h2 [class.tachado]="item.completo">{{item.nombre}}</h2>\n                </ion-item>\n            </ion-list>\n        </ion-card-content>\n\n    </ion-card>\n    <br>\n    <br>\n\n    <button ion-button (click)="borrarItem()" class="button-block" color="danger">\n        <ion-icon ios="ios-trash" md="md-trash"></ion-icon>\n         Borrar Lista\n    </button>\n</ion-content>'/*ion-inline-end:"C:\Users\mahumadam\Desktop\CursoAngular\5.deseos\src\pages\detalle\detalle.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__app_services_lista_deseos_services__["a" /* ListaDeseosService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], DetalleComponent);
    return DetalleComponent;
}());

//# sourceMappingURL=detalle.component.js.map

/***/ })

},[193]);
//# sourceMappingURL=main.js.map