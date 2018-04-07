import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AllService } from './all.service';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { SignupComponent } from './signup/signup.component';
import { MovieComponent } from './movie/movie.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    TeamComponent,
    SignupComponent,
    MovieComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AllService],
  bootstrap: [AppComponent]
})
export class AppModule { }
