import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwapiService } from "../../../services/swapi.service";
import { ActivatedRoute, RouterModule} from "@angular/router";
import { Planet } from "../../../models/planet.model";

@Component({
  selector: 'app-planets-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './planets-detail.component.html',
  styleUrl: './planets-detail.component.scss'
})
export class PlanetsDetailComponent {
  planet!: Planet;

  constructor(
    public swapiService: SwapiService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.getAllinfoPlanet(this.route.snapshot.paramMap.get('id'));
  }

  getAllinfoPlanet(id: any) {
    this.swapiService.getPlanetData(id).subscribe(
      (data) => {
        this.planet = data;
      },
      (error) => {
        console.error('Error fetching planets:', error);
      }
    );
  }


}
