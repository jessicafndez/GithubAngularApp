import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Users } from '../interfaces/users';

@Injectable()
export class UsersServiceService {

  private baseUrl: string = 'https://api.github.com/';

  constructor(private http: Http) { }

  getAll(): Observable<Users[]> {
    let characters = this.http
      .get(`${this.baseUrl}/people`, {headers: this.getHeaders()})
      .map(mapCharacters);
    return characters;
  }

  get(id: number): Observable<Users> {
    let character = this.http
      .get(`${this.baseUrl}/people/${id}`, {headers: this.getHeaders()})
      .map(mapCharacter);
    return character;
  }

  private getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
}

function mapCharacters(response: Response): Users[] {
  return response.json().results.map(toCharacter);
}

function mapCharacter(response: Response): Users {
  return toCharacter(response.json());
}

function toCharacter(characterData: any) {
  let character = <Users>({
    id: getCharacterId(characterData),
    name: characterData.name,
    height: Number.parseInt(characterData.height),
    mass: Number.parseInt(characterData.mass),
    birth_year: characterData.birth_year,
    hair_color: characterData.hair_color,
    skin_color: characterData.skin_color,
    eye_color: characterData.eye_color,
    gender: characterData.gender,
    url: characterData.url
  });
  return character;
}

function getCharacterId(c: any) {
  let characterId = c.url.replace('https://api.github.com/user/','').replace('/','');
  return characterId;
}

