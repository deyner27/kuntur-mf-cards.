import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { AppGuard } from './guards/app.guard';

const routes: Routes = [
  { path: '',
    loadChildren: () => import('./components/pages/pages.module').then(x => x.PagesModule), 
    canActivate: [AppGuard]},
  { path: "**", component: EmptyRouteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
