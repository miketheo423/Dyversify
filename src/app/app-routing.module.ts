import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './auth/login/login.component'
import { SignupComponent } from './auth/signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GroupComponent } from './dashboard/group/group.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
    // { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: '', component: DashboardComponent, children: [
      { path: 'group/:id', component: GroupComponent }
    ]},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: SignupComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
