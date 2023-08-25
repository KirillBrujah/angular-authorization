import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';
import { userGuard } from './auth/user.guard';
import { notLoggedGuard } from './auth/not-logged.guard';
import { loggedGuard } from './auth/logged.guard';
import {
  LoginComponent,
  MainComponent,
  PageNotFoundComponent
} from './ui/pages';

const routes: Routes = [
  {
    path: "",
    // canMatch: [userGuard],
    // canMatch: [() => {
    //   console.log("CAN MATCH");
    //   return false; }],
    // loadComponent: () => import('./home/home.component').then(v => v.HomeComponent),
    component: MainComponent,
    title: "Main page",
    // canActivate: [notLoggedGuard]
  },
  {
    path: "login",
    // loadComponent: () => import('./login/login.component').then(v => v.LoginComponent),
    component: LoginComponent,
    title: "Login page",
    // canActivate: [loggedGuard],
    // canMatch: [() => true],
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
