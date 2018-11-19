import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuteursComponent } from './auteurs/auteurs.component';
import { LivresComponent } from './livres/livres.component';
import {HttpModule} from '@angular/http';
import {AuteursService} from './auteurs.service';
import { AddAuteursComponent } from './add-auteurs/add-auteurs.component';
import {FormsModule} from '@angular/forms';
import { EditAuteursComponent } from './edit-auteurs/edit-auteurs.component';

@NgModule({
  declarations: [
    AppComponent,
    AuteursComponent,
    LivresComponent,
    AddAuteursComponent,
    EditAuteursComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [AuteursService],
  bootstrap: [AppComponent]
})
export class AppModule { }
