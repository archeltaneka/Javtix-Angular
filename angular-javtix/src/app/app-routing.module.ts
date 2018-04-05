import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
	{ path: 'user', component: UserComponent },
	{ path: 'home', component: HomeComponent },
	{ path: 'meet-the-team', component: TeamComponent},
	{ path: '', redirectTo: '/home', pathMatch: 'full'}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
