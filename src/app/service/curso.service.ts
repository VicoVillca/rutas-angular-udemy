import { Injectable } from '@angular/core';
import { Persona } from '../model/persona.model';
import { DataService } from './data.service';
@Injectable()
export class CursoService {
  estudiantes: Persona[] = [
    new Persona('Juan', 'Marca'),
    new Persona('Araceli', 'Martines'),
  ];
  constructor(private dataService:DataService){

  }
  obtenerPersonas(){
    return this.dataService.cargarPersonas();
  }
  getById(index: number) {
    if (index >= 0 && index < this.estudiantes.length) {
      return this.estudiantes[index];
    } else {
      return null;
    }
  }
  insert(persona: Persona) {
    this.estudiantes.push(persona);
    this.dataService.guardarPersonas(this.estudiantes);
  }
  update(index: number, persona: Persona) {
    this.estudiantes[index].nombre = persona.nombre;
    this.estudiantes[index].apellido = persona.apellido;
  }
  delete(index: number) {
    this.estudiantes.splice(index, 1);
  }
}
