import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

interface charactersArray {
  info(count: number,
       next: string,
       pages: number,
       prev: string):object

  results: [character]
}

interface character {
  created: string,
  episode: [string],
  gender: string,
  id: number,
  image: string,

  location(name: string,
           url: string):object

  name: string,

  origin(name: string,
         url: string):object

  species: string,
  status: string,
  type: string,
  url: string
}


@Injectable({
  providedIn: 'root'
})

export class RequestsService {

  constructor(private http: HttpClient) {}

  public getRickMorty(){
    return this.http.get('https://rickandmortyapi.com/api/character')
  }
}
