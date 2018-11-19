import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import { map } from 'rxjs/operators';
import {AuteursService} from '../auteurs.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auteurs',
  templateUrl: './auteurs.component.html',
  styleUrls: ['./auteurs.component.css']
})
export class AuteursComponent implements OnInit {
  auteur = {nom: "med", prenom: "jamali"};
  pageAuteurs: any;

  constructor(public http: Http, public  auteursService:AuteursService,
              public  router:Router) {
  }

  ngOnInit() {
  this.auteursService.getAuteurs()
    .subscribe(data => {
      this.pageAuteurs = data;
    }, err => {
      console.log(err);
    })
    }

  onEditAuteur(id:number){
  this.router.navigate(['editAuteurs',id]);
  }
  }
