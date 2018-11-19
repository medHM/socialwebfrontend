import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {map} from 'rxjs/operators';
import {Auteur} from '../model/model.auteur';

@Injectable({
  providedIn: 'root'
})
export class AuteursService {

  constructor(public http: Http) {
  }


  getAuteurs() {
    return this.http.get("http://localhost:8080/auteurs")
    .pipe(map(resp => resp.json()))
    }

  getAuteur(id:number) {
    return this.http.get("http://localhost:8080/auteurs"/+id)
      .pipe(map(resp => resp.json()))
  }

    saveAuteur(auteur:Auteur){
    return this.http.post("http://localhost:8080/auteurs",auteur)
     .pipe(map(resp => resp.json()))
    }
}
