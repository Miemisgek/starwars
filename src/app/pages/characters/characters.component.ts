import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwapiService } from "../../services/swapi.service";
import { TableModule } from 'primeng/table';
import { ButtonModule } from "primeng/button";
import { Character } from "../../models/character.model";
import { ActivatedRoute, Router, RouterModule} from "@angular/router";

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.scss'
})
export class CharactersComponent {
  characters: any[] = [];
  selectedCharacter!: Character;

  constructor(
    public swapiService: SwapiService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.getAllCharacters();
  }

  getAllCharacters() {
    this.swapiService.getCharacters().subscribe(
      (data) => {
        this.characters = data;
      },
      (error) => {
        console.error('Error fetching characters:', error);
      }
    );
  }

  getDetailPage(characterId: number) {
    this.router.navigate(['/characters', characterId]);
  }

}
