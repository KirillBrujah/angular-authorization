import { Component, inject } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  // providers: [
  //   AuthService,
  // ],
})
export class LoginComponent {
  isLogged = false;
  loginLoading = false;
  hide = true;
  constructor(public authService: AuthService, private _router: Router) {
    // this.isLogged = authService.isAuthenticated();
  }
  
  login(name: string,  password: string): VoidFunction {

    return () => {
      console.log({name, password});
      // return;
      
      this.loginLoading = true;
      this.authService.login().then(() => {
        console.log("IN THEN");
        this.loginLoading = false;
        // this._router.navigate(["/"], {replaceUrl: true});      
      });     
      // this.isLogged = this.authService.isAuthenticated();
    };
  }
}
