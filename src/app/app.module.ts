import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { FixedSidebarLeftComponent } from './fragments/fixed-sidebar-left/fixed-sidebar-left.component';
import { ProfileSettingsResponsiveComponent } from './fragments/profile-settings-responsive/profile-settings-responsive.component';
import { FixedSidebarLeftResponsiveComponent } from './fragments/fixed-sidebar-left-responsive/fixed-sidebar-left-responsive.component';
import { FixedSidebarRightComponent } from './fragments/fixed-sidebar-right/fixed-sidebar-right.component';
import { FixedSidebarRightResponsiveComponent } from './fragments/fixed-sidebar-right-responsive/fixed-sidebar-right-responsive.component';
import { HeaderBPComponent } from './fragments/header-bp/header-bp.component';
import { HeaderBpResponsiveComponent } from './fragments/header-bp-responsive/header-bp-responsive.component';
import { MainHeaderComponent } from './fragments/main-header/main-header.component';
import { WindowPopupChatComponent } from './fragments/window-popup-chat/window-popup-chat.component';
import { BackToTopComponent } from './fragments/back-to-top/back-to-top.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { YourProfileComponent } from './fragments/your-profile/your-profile.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { NewsFeedFormComponent } from './news-feed-form/news-feed-form.component';
import { NewsFeedItemsGridComponent } from './news-feed-items-grid/news-feed-items-grid.component';
import {FormsModule} from '@angular/forms';
import { CommentComponent } from './comment/comment.component';
import {CommentService} from './shared/comment.service';
import {HttpClientModule} from '@angular/common/http';
import {PostService} from './shared/post.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonalInformationComponent,
    FixedSidebarLeftComponent,
    ProfileSettingsResponsiveComponent,
    FixedSidebarLeftResponsiveComponent,
    FixedSidebarRightComponent,
    FixedSidebarRightResponsiveComponent,
    HeaderBPComponent,
    HeaderBpResponsiveComponent,
    MainHeaderComponent,
    WindowPopupChatComponent,
    BackToTopComponent,
    AccountSettingsComponent,
    YourProfileComponent,
    NewsFeedComponent,
    NewsFeedFormComponent,
    NewsFeedItemsGridComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CommentService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
