import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user/user.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { MovieComponent } from './movie/movie.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AuthGuard } from './auth.guard';

const routes: Routes = [
	{ path: 'user', component: UserComponent },
	{ path: 'home', component: HomeComponent },
	{ path: 'movie/:id', component: MovieComponent },
	{ path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
	{ path: 'meet-the-team', component: TeamComponent},
	{ path: '', redirectTo: '/home', pathMatch: 'full'}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ],
  providers: [ AuthGuard ] 
})
export class AppRoutingModule { }
