import { Component, LOCALE_ID, inject } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import '@angular/localize/init';


class LoginModel {
  constructor(
    public name: string,
    public password: string,
  ) { }
}

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
  isLogged = false;
  loginLoading = false;
  hide = true;

  // loginModel = {
  //   name: '',
  //   password: '',
  // };

  loginModel = new LoginModel('', '');

  loginForm = new FormGroup<LoginForm>({
    name: new FormControl('', {
      nonNullable: true,
      // validators: Validators.compose([Validators.required, Validators.minLength(4)]),
    }),
    password: new FormControl('', {
      nonNullable: true,
      // validators: Validators.required,
    }),
  });


  // name= new FormControl('', {
  //   nonNullable: true,
  //   validators: Validators.compose([Validators.required, Validators.minLength(4)]),
  // });
  // password= new FormControl('', { nonNullable: true, validators: Validators.required });


  // loginForm = new FormGroup<LoginForm>({
  //   name: new FormControl('', {nonNullable: true, validators: Validators.required}),
  //   password: new FormControl('', {nonNullable: true, validators: Validators.required}), 
  // });

  getErrorMessage(): string {
    // console.log(this.loginForm.errors);
    // console.log(this.loginForm.get('name')?.errors);
    // console.log(this.loginForm.get('password')?.errors);
    // return '2';
    return $localize`Field is required`;
  }


  constructor(public authService: AuthService, private _router: Router) {
  }

  async login(/* name: string, password: string */) {
    this.loginLoading = true;
    const {name, password} = this.loginForm.value;
    this.authService.login(name!, password!).then((result) => {
      if (!result) return;
      console.log("IN THEN");
      // this._router.navigate(["/"], {replaceUrl: true});      
    }).finally(() => {
      this.loginLoading = false;
    });

  }
}
