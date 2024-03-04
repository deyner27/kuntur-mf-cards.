import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { PageRoutingModule } from './pages.routing.module';
// import { NombreComponenteComponent } from './nombre-componente/nombre-componente.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule, MaterialModule, PageRoutingModule
  ]
})
export class PagesModule { }
