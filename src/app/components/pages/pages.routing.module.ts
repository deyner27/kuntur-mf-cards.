import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { NombreComponenteComponent } from './nombre-componente/nombre-componente.component';

const routes: Routes = [
// {path:'prueba', component:NombreComponenteComponent},
{path:'**', component: DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }