import { Character } from "./character.model";

export class Planet {
  name: string;
  population: number;
  diameter: number;

  constructor(item: any) {
    this.name = item['name'];
    this.population = item['population'];
    this.diameter = item['diameter'];
  }
}
