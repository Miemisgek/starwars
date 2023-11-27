import { Planet } from "./planet.model";

export class Character {
  name: string;
  gender: string;
  birthYear: string;
  height: number;
  weight: number;
  //planet: Planet;

  constructor(item: any) {
  this.name = item['name'];
  this.gender = item['gender'];
  this.birthYear = item['birth_year'];
  this.height = item['height'];
  this.weight = item['weight'];
  }

}
