import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Planet } from "../../models/planet.model";
import { SwapiService } from "../../services/swapi.service";
import { TableModule } from "primeng/table";
import { ButtonModule } from "primeng/button";
import { ActivatedRoute, Router, RouterModule} from "@angular/router";

@Component({
  selector: 'app-planets',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule],
  templateUrl: './planets.component.html',
  styleUrl: './planets.component.scss'
})
export class PlanetsComponent {
  planets: any[] = [];
  selectedPlanet!: Planet;

  constructor(
    public swapiService: SwapiService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.getAllPlanets();
  }

  getAllPlanets() {
    this.swapiService.getPlanets().subscribe(
      (data) => {
        this.planets = data;
      },
      (error) => {
        console.error('Error fetching characters:', error);
      }
    );
  }

  getDetailPage(planetId: number) {
    this.router.navigate(['/planets', planetId]);
  }

}
