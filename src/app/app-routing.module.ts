import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PersonalInformationComponent} from './personal-information/personal-information.component';
import {AccountSettingsComponent} from './account-settings/account-settings.component';
import {NewsFeedComponent} from './news-feed/news-feed.component';
import {YourProfileComponent} from './fragments/your-profile/your-profile.component';
import {NewsFeedFormComponent} from './news-feed-form/news-feed-form.component';

const routes: Routes = [
  { path:'PersonalInformation', component:PersonalInformationComponent},
  { path:'AccountSettings', component:AccountSettingsComponent},
  { path:'NewsFeed', component:NewsFeedComponent},
  { path:'NewsFeedForm', component:NewsFeedFormComponent},
  { path:'YourProfil', component:YourProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
