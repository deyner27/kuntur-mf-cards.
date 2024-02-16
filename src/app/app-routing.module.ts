import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { PageoneComponent } from './components/pageone/pageone.component';
import { AppGuard } from './guards/app.guard';

const routes: Routes = [
  { path: "", component: PageoneComponent, canActivate: [AppGuard] },
  { path: "**", component: EmptyRouteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: "/" }],
})
export class AppRoutingModule { }
