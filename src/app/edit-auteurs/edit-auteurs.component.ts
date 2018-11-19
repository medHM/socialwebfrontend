import { Component, OnInit } from '@angular/core';
import {Auteur} from '../../model/model.auteur';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-auteurs',
  templateUrl: './edit-auteurs.component.html',
  styleUrls: ['./edit-auteurs.component.css']
})
export class EditAuteursComponent implements OnInit {

  auteur:Auteur=new Auteur();
  constructor(public activatedRoute:ActivatedRoute) {
    console.log("****************************");
    console.log(activatedRoute.snapshot.params['id']);
    console.log("****************************");
  }

  ngOnInit() {
  }

  updateAuteur(){

  }
}
