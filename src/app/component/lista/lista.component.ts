import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { CursoService } from 'src/app/service/curso.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent  {
  estudiantes !:Persona[];
  constructor(private curso:CursoService) {
    this.estudiantes = curso.estudiantes;
  }

}
