import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { ExperienciaLaboralComponent } from './componentes/experiencia-laboral/experiencia-laboral.component';
import { FormacionAcademicaComponent } from './componentes/formacion-academica/formacion-academica.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { NuevExpComponent } from './componentes/shared/experiencial-laboral/nuev-exp/nuev-exp.component';
import { ActualizarComponent } from './componentes/shared/experiencial-laboral/actualizar/actualizar.component';
import { ActualizaracercadeComponent } from './componentes/shared/acercade/actualizaracercade/actualizaracercade.component';
import { NuevaformComponent } from './componentes/shared/formacion/nuevaform/nuevaform.component';
import { ActualizarformComponent } from './componentes/shared/formacion/actualizarform/actualizarform.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { NuevahabComponent } from './componentes/shared/habilidades/nuevahab/nuevahab.component';
import { ActualizarhabComponent } from './componentes/shared/habilidades/actualizarhab/actualizarhab.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NuevosproComponent } from './componentes/shared/proyectos/nuevospro/nuevospro.component';
import { ActualizarproComponent } from './componentes/shared/proyectos/actualizarpro/actualizarpro.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { LoginComponent } from './componentes/shared/login/login.component';
import { provideStorage,getStorage } from "@angular/fire/storage";
import { environment } from 'src/environments/environment';
import {initializeApp,provideFirebaseApp } from '@angular/fire/app'


@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AcercaDeComponent,
    ExperienciaLaboralComponent,
    FormacionAcademicaComponent,
    HabilidadesComponent,
    ProyectosComponent,    
    NuevExpComponent,
    ActualizarComponent,
    ActualizaracercadeComponent,
    NuevaformComponent,
    ActualizarformComponent,
    NuevahabComponent,
    ActualizarhabComponent,
    NuevosproComponent,
    ActualizarproComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDialogModule,
    NgCircleProgressModule.forRoot({}),
    FontAwesomeModule,
    provideFirebaseApp(()=>initializeApp(environment.firebase)),
    provideStorage(()=> getStorage())

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
