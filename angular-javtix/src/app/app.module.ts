import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { NowShowingComponent } from './now-showing/now-showing.component';
import { CinemasComponent } from './cinemas/cinemas.component';
import { AdsComponent } from './ads/ads.component';
import { UserComponent } from './user/user.component';
import { MovieComponent } from './movie/movie.component';


@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    NavigationComponent,
    SearchbarComponent,
    NowShowingComponent,
    CinemasComponent,
    AdsComponent,
    UserComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
