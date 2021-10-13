import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  Listas: Lista[] = [];


  constructor() { 
    
    this.cargarStorage();

  }

  crearLista( titulo: string ) 
  {
    const nuevaLista = new Lista(titulo);
    this.Listas.push( nuevaLista );
    this.guardarStorage();

    return nuevaLista.id;
  }

  borrarLista( lista: Lista){

    this.Listas = this.Listas.filter( listaData => listaData.id !== lista.id );
    
    this.guardarStorage();
  }

  obtenerLista( id: string | number ){

    id = Number(id);

    return this.Listas.find( listaData => {
      return listaData.id === id;
    });
  }


  guardarStorage() {

    localStorage.setItem('data', JSON.stringify(this.Listas) );

  }

  cargarStorage(){
  
    if ( localStorage.getItem('data') ) {
      this.Listas = JSON.parse( localStorage.getItem('data') );
    } else {
      this.Listas = [];
    }
    

  }


}
