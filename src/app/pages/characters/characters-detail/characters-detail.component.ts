import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from "@angular/router";
import { Character }  from "../../../models/character.model";
import { SwapiService } from "../../../services/swapi.service";

@Component({
  selector: 'app-characters-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './characters-detail.component.html',
  styleUrl: './characters-detail.component.scss'
})
export class CharactersDetailComponent {
  character!: Character[];

  constructor(
    private route: ActivatedRoute,
    public swapiService: SwapiService,
  ) {}

  ngOnInit() {
    this.getAllInfoCharacter(this.route.snapshot.paramMap.get('id'));
  }

  getAllInfoCharacter(id: any) {
    this.swapiService.getCharacterData(id).subscribe(
      (data) => {
        this.character = data;
      },
      (error) => {
        console.error('Error fetching characters:', error);
      }
    );
  }

}
