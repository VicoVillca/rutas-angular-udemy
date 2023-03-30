import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from '../component/error/error.component';
import { FormularioComponent } from '../component/formulario/formulario.component';
import { ListaComponent } from '../component/lista/lista.component';


const rutas:Routes =[
  {path:"",component:ListaComponent},
  {path:"estudiante",component:FormularioComponent},
  {path:"estudiante/:id",component:FormularioComponent},
  {path:"**",component:ErrorComponent},
]

@NgModule({
  imports: [
    RouterModule.forRoot(rutas)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRouterModule { }
