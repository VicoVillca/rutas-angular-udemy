import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { CursoService } from './service/curso.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private curso:CursoService){

  }
  getTotal(){
    return this.curso.estudiantes.length;
  }

}
