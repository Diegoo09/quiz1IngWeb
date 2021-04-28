import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MetropolitanaComponent } from '../app/components/metropolitana/metropolitana.component';
import { BiobioComponent } from '../app/components/biobio/biobio.component';
import { AraucaniaComponent } from '../app/components/araucania/araucania.component';
import { HomeComponent } from '../app/components/home/home.component';
import { FormularioComponent } from '../app/components/formulario/formulario.component'

const routes: Routes = [
  {path:'metropolitana',component:MetropolitanaComponent},
  {path:'biobio',component:BiobioComponent},
  {path:'araucania', component:AraucaniaComponent },
  {path:'', component:HomeComponent},
  {path:'formulario',component:FormularioComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
