import { Lista } from './../clases/lista';
import { Pipe, PipeTransform } from '@angular/core';
// pure:false para que siempre escuche los cambios
@Pipe(
    {
        name: 'pendientes',
        pure:false
    }
)
export class PendientesPipe implements PipeTransform {
    transform(listas: Lista[] , estado: boolean ): Lista[] {        
         console.log(listas);
         console.log('estado ' + estado);
        let listaFiltrada: Lista[]= [];
        for(let lista of listas) {
            if(lista.terminado == estado){
                listaFiltrada.push(lista);
            } 
        }
        return listaFiltrada;         
    }
}