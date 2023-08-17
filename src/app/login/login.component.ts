import { Component, LOCALE_ID, inject } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import '@angular/localize/init';
import { catchError, finalize } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

interface LoginForm {
  name: FormControl<string>;

  password?: FormControl<string>;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  isLogged = false;
  loginLoading = false;
  hide = true;

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
    return $localize`Field is required`;
  }


  constructor(public authService: AuthService, private _router: Router, private _snackBar: MatSnackBar) {
  }

  async login() {
    this.loginLoading = true;
    const { name, password } = this.loginForm.value;


    this.authService.login(name!, password!)
      .pipe(
        catchError((e: HttpErrorResponse) => {
          this._snackBar.open(`${e.message}`, undefined, {
            verticalPosition: 'top',
            horizontalPosition: "right",
            duration: 3000,
          })
          throw e;
        }),
        finalize(() => {
          this.loginLoading = false;
        }),
      ).subscribe(
        () => {
          this._router.navigate(["/"], { replaceUrl: true });
        }
      );
  }
}
