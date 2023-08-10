import { Component, LOCALE_ID, inject } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


interface LoginForm {
  name: FormControl<string>;

  password?: FormControl<string>;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  // providers: [
  //   AuthService,
  // ],
})
export class LoginComponent {

  loginForm = new FormGroup<LoginForm>({
    name: new FormControl('', {nonNullable: true, validators: Validators.required}),
    password: new FormControl('', {nonNullable: true, validators: Validators.required}), 
  });

  
  isLogged = false;
  loginLoading = false;
  hide = true;
  constructor(public authService: AuthService, private _router: Router) {
    // this.isLogged = authService.isAuthenticated();
  }

  login(/* name: string, password: string */): VoidFunction {
    console.log(this.loginForm.value);

    return () => {
      console.log(this.loginForm.value);
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
