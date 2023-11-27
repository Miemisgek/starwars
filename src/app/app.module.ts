import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from "@angular/common/http";

import { HomeComponent } from './pages/home/home.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { CharactersDetailComponent } from "./pages/characters/characters-detail/characters-detail.component";
import { MenuComponent } from './components/menu/menu.component'
import { PlanetsComponent } from "./pages/planets/planets.component";
import { PlanetsDetailComponent } from "./planets-detail/planets-detail.component";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    AppRoutingModule,
    HomeComponent,
    CharactersComponent,
    CharactersDetailComponent,
    PlanetsComponent,
    PlanetsDetailComponent,
    MenuComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
