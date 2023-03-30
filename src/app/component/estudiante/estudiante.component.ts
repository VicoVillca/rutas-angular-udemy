import { Component, OnInit, Input } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent  {
   @Input() persona!:Persona;
   @Input() index!:number;
  constructor() { }


}
