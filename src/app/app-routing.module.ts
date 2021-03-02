import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ComingsoonComponent } from './pages/comingsoon/comingsoon.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';

const routes: Routes = [
  // { path: '', pathMatch: 'full' },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  // { path: '', component: ComingsoonComponent },
  { path: 'inicio', component: AppComponent }
  // { path: 'pagenotfound', component: PagenotfoundComponent },
];

@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
