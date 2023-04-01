import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from '../model/persona.model';
@Injectable()
export class DataService {
  constructor(private httpclient: HttpClient) {}

  cargarPersonas(){
    return this.httpclient.get('https://listado-personas-222ff-default-rtdb.firebaseio.com/datos.json')
  }
  guardarPersonas(lista: Persona[]) {
    this.httpclient
      .put(
        'https://listado-personas-222ff-default-rtdb.firebaseio.com/datos.json',
        lista
      )
      .subscribe(response=>{
        console.log(response);
      },
      error => console.log(error)
      )
      ;
  }
}
