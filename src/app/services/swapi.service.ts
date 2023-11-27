import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable} from 'rxjs';
import { Planet } from "../models/planet.model";
import { Character } from "../models/character.model";

@Injectable({
  providedIn: 'root'
})
export class SwapiService {
  private apiUrl = 'https://swapi.dev/api/';
  public charactersList = [];

  constructor(private http: HttpClient) {
  }

  // getCharacters(): Observable<any> {
  //   let characters = this.http.get<any>(`${this.apiUrl}/people`);
  //
  //   return characters;
  // }

  getCharacters(): Observable<Character[]> {
    return this.http.get<any>(`${this.apiUrl}/people`).pipe(
      map((data) =>
        data.results.map((result: any) => new Character(
          result))
      )
    );
  }

  getCharacterData(characterId:number): Observable<Character[]> {
    return this.http.get<any>(`${this.apiUrl}/people/${characterId}/`);
  }

  getPlanets(): Observable<Planet[]> {
    return this.http.get<any>(`${this.apiUrl}/planets`).pipe(
      map((data) =>
        data.results.map((result: any) => new Planet(
          result))
      )
    );
  }

  getPlanetName(planetUrl: string): Observable<any> {
    const planetId = planetUrl.split('/').filter(Boolean).pop();

    return this.http.get<Planet>(`${this.apiUrl}/planets/${planetId}/`).pipe(
      map(data => data.name)
    );
  }

}
