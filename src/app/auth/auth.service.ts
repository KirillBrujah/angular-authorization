import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, delay, finalize, retry, tap, throwError } from 'rxjs';
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
  refreshing = false;

  constructor(private http: HttpClient) { }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  login(
    username: string,
    password: string
  ) : Observable<any> {
    
    const request = this.http.post<User>('http://localhost:8080/signin', {
      username, password,
    }).pipe(
      tap((user)=> {
        localStorage.setItem(ACCESS_TOKEN, user.access_token);
        this.isLoggedIn = true;    
      }),
    );

    return request;
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

    this.refreshing = true;

    try {
      const request = await this.http.get('http://localhost:3000/auth');
      console.log(request);
    } catch (e) {
      //
    }


    return new Promise(r => setTimeout(() => {
      this.refreshing = false;
      this.isLoggedIn = true;
      return r(false);
    }, 2500));



    // TODO: Refresh
  }
}
