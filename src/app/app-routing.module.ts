import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuteursComponent} from './auteurs/auteurs.component';
import {LivresComponent} from './livres/livres.component';
import {AddAuteursComponent} from './add-auteurs/add-auteurs.component';
import {EditAuteursComponent} from './edit-auteurs/edit-auteurs.component';

const routes: Routes = [
  { path:'auteurs', component:AuteursComponent},
  { path:'livres', component:LivresComponent},
  { path:'add-auteurs', component:AddAuteursComponent},
  { path:'editAuteurs/:id', component:EditAuteursComponent},
  { path: '', redirectTo:'/auteurs', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
