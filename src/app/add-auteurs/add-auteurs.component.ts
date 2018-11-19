import { Component, OnInit } from '@angular/core';
import {Auteur} from '../../model/model.auteur';
import {AuteursService} from '../auteurs.service';

@Component({
  selector: 'app-add-auteurs',
  templateUrl: './add-auteurs.component.html',
  styleUrls: ['./add-auteurs.component.css']
})
export class AddAuteursComponent implements OnInit {
  auteur:Auteur=new Auteur();
  constructor(public auteursService:AuteursService) { }

  ngOnInit() {
  }

  saveAuteur(){
    this.auteursService.saveAuteur(this.auteur)
      .subscribe(data => {
        console.log(data)
      }, err => {
        console.log(err);
      })
  }

}
