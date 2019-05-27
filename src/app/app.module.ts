import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TweetListComponent } from "./components/tweet-list/tweet-list.component";
import { TweetComponent } from "./components/tweet/tweet.component";
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http'; 

import {HomeComponent} from './components/home/home.component';
import {UserComponent} from './components/user/user.component';
import { HeaderComponent } from './components/header/header.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    TweetListComponent,
    TweetComponent,
    PageNotFoundComponent,
    HomeComponent,
    UserComponent,
    HeaderComponent,
    ProfileComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}