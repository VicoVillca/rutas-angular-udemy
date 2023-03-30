import { Persona } from '../model/persona.model';

export class CursoService {
  estudiantes: Persona[] = [
    new Persona('Juan', 'Marca'),
    new Persona('Araceli', 'Martines'),
  ];
  getById(index: number) {
    if (index >= 0 && index < this.estudiantes.length) {
      return this.estudiantes[index];
    } else {
      return null;
    }
  }
  insert(persona: Persona) {
    this.estudiantes.push(persona);
  }
  update(index: number, persona: Persona) {
    this.estudiantes[index].nombre = persona.nombre;
    this.estudiantes[index].apellido = persona.apellido;
  }
  delete(index: number) {
    this.estudiantes.splice(index, 1);
  }
}
