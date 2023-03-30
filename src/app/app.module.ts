import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CursoService } from './service/curso.service';
import { AppRouterModule } from './app-router/app-router.module';
import { ListaComponent } from './component/lista/lista.component';
import { FormularioComponent } from './component/formulario/formulario.component';
import { EstudianteComponent } from './component/estudiante/estudiante.component';
import { ErrorComponent } from './component/error/error.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    FormularioComponent,
    EstudianteComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    AppRouterModule
  ],
  providers: [CursoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
