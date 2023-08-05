import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth/auth.guard';
import { userGuard } from './auth/user.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {
    path: "",
    // canMatch: [userGuard],
    // canMatch: [() => {
    //   console.log("CAN MATCH");
    //   return false; }],
    // loadComponent: () => import('./home/home.component').then(v => v.HomeComponent),
    component: HomeComponent,
    title: "Home page",
    canActivate: [authGuard]
  },
  {
    path: "login",
    // loadComponent: () => import('./login/login.component').then(v => v.LoginComponent),
    component: LoginComponent,
    title: "Login page",
    // canMatch: [() => true],
  },
  {
    path: "registration",
    component: RegistrationComponent,
    title: "Registration page"
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
