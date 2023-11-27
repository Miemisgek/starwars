import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from "primeng/card";
import { SwapiService } from "../../services/swapi.service";
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CardModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  amountOfCharacters: number = 0;
  amountOfPlanets: number = 0;

  constructor(
    public swapiService: SwapiService
  ) {}

  ngOnInit() {
    this.getAmountOfCharacters();
    this.getAmountOfPlanets();
  }

  getAmountOfCharacters() {
    this.swapiService.getCharacters().subscribe(
      (data) => {
        this.amountOfCharacters = data.length
      },
      (error) => {
        console.error('Error fetching characters:', error);
      }
    );
  }

  getAmountOfPlanets() {
    this.swapiService.getPlanets().subscribe(
      (data) => {
        this.amountOfPlanets = data.length
      },
      (error) => {
        console.error('Error fetching planets:', error);
      }
    );
  }

}
