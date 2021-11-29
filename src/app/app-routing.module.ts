import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesDetailsComponent } from './heroes-details/heroes-details.component';
import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'heroes-details/:id', component: HeroesDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
