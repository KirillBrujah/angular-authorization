import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, delay, retry, throwError } from 'rxjs';
import { User } from '../models/user';


const ACCESS_TOKEN = "access_token";


interface PageModel {
  page: number;
  total: number;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;

  isLoading = false;

  constructor(private http: HttpClient) { }

  isAuthenticated(): boolean {
    // return false;
    return this.isLoggedIn;

    // this.isLoading = true;
    // return new Promise(r => setTimeout(() => {
    //   this.isLoading = false;
    //   return r(this.isLoggedIn);
    // }, 2500));
  }


  private handleError(error: HttpErrorResponse) {
    console.log(error);
    return throwError(() => new Error("I have a bad feeling about this"));
  }


  async login(
    username: string,
    password: string
  ): Promise<boolean> {
    this.isLoading = true;
    try {
      // const request = this.http.get('http://localhost:3000/auth');
      // const result = await fetch('http://localhost:3000/auth');
      // const result = await fetch('http://localhost:8080/welcome');


      // const result = await fetch('http://localhost:8080/welcome');


      // const request = this.http.get<PageModel>('https://reqres.in/api/users?page=2');
      const request = this.http.post('http://localhost:8080/signin', {
        username, password,
      }).pipe(
        retry(1),
        catchError(this.handleError));
      // const request = this.http.get('http://localhost:8080/welcome')



      request.subscribe((result: User) => {
        console.log("GET RESULT");
        console.log(result);
      });
      // console.log(result);
      this.isLoggedIn = true;
      localStorage.setItem(ACCESS_TOKEN, "qwerty");

      return true;

      // console.log(request);
    } catch (e) {
      alert('ERROR');
      return false;
      //   this.isLoggedIn = true;
      //   localStorage.setItem(ACCESS_TOKEN, "qwerty");
      //  //
    }
    finally {
      this.isLoading = false;
    }
  }

  async logout(): Promise<boolean> {
    // TODO: Logout
    return new Promise(r => setTimeout(() => {
      this.isLoggedIn = false;
      localStorage.removeItem(ACCESS_TOKEN);
      return r(true);
    }, 2500));
  }

  async refresh(): Promise<boolean> {
    const accessToken = localStorage.getItem(ACCESS_TOKEN);

    if (!accessToken) return false;

    this.isLoading = true;

    try {
      const request = await this.http.get('http://localhost:3000/auth');
      console.log(request);
    } catch (e) {
      //
    }


    return new Promise(r => setTimeout(() => {
      this.isLoading = false;
      this.isLoggedIn = true;
      return r(false);
    }, 2500));



    // TODO: Refresh
  }
}
