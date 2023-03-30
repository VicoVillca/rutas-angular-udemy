import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { CursoService } from 'src/app/service/curso.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  id!: number;
  nombre: string = '';
  apellido: string = '';
  constructor(
    private curso: CursoService,
    private ruta: ActivatedRoute,
    private r: Router
  ) {
    this.id = ruta.snapshot.params['id'];
  }

  ngOnInit(): void {
    if (this.id !== undefined) {
      let p = this.curso.getById(this.id);
      if (p !== null) {
        this.nombre = p.nombre;
        this.apellido = p.apellido;
      } else {
        this.r.navigate(['error']);
      }
    }
  }
  insert() {
    console.log("insert");
    this.curso.insert(new Persona(this.nombre,this.apellido));
    this.r.navigate(['']);
  }
  update() {
    console.log("update");
    this.curso.update(this.id,new Persona(this.nombre,this.apellido));
    this.r.navigate(['']);
  }
  delete() {
    console.log("delete");
    this.curso.delete(this.id);
    this.r.navigate(['']);
  }
}
