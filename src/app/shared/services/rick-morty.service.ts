import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ICharacters } from '../models/characters.model';
import { mapBkToCharacters } from '../utils/mappers/characters.mapper';

@Injectable()
export class RickMortyService {

  constructor(
    private httpClient: HttpClient
  ) { }
  getCharacters():Observable<ICharacters[]> {
    return this.httpClient.get<any>('https://rickandmortyapi.com/api/character').pipe(map(character => {
      return mapBkToCharacters(character);
    })) 
  }
}
