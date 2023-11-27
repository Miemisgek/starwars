import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { CharactersComponent } from "./pages/characters/characters.component";
import { PlanetsComponent } from "./pages/planets/planets.component";
import { CharactersDetailComponent } from "./pages/characters/characters-detail/characters-detail.component";
import { PlanetsDetailComponent } from "./planets-detail/planets-detail.component";


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'characters/:id', component: CharactersDetailComponent },
  { path: 'planets', component: PlanetsComponent },
  { path: 'planets/:id', component: PlanetsDetailComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
