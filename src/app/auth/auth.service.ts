import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, delay, finalize, map, of, retry, tap, throwError } from 'rxjs';
import { User } from '../models';


const ACCESS_TOKEN = "access_token";


interface Message {
  message: string;
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
  ): Observable<any> {

    const request = this.http.post<User>('http://localhost:8080/signin', {
      username, password,
    }).pipe(
      tap((user) => {
        localStorage.setItem(ACCESS_TOKEN, user.access_token);
        this.isLoggedIn = true;
      }),
    );

    return request;
  }

  logout() {
    // TODO: Logout
    this.isLoggedIn = false;
    localStorage.removeItem(ACCESS_TOKEN);
    // return new Promise(r => setTimeout(() => {
    //   this.isLoggedIn = false;
    //   localStorage.removeItem(ACCESS_TOKEN);
    //   return r(true);
    // }, 2500));
  }

  refresh(): Observable<boolean>{
    const accessToken = localStorage.getItem(ACCESS_TOKEN);

    if (!accessToken) {
      return of(false);
      return new Observable<boolean>(observer => {
        observer.next(false);
      });
    };

    this.refreshing = true;

    const request = this.http.get<Message>('http://localhost:8080/welcome').pipe(
      map<Message, boolean>((value, index) => {
        // TODO: Update user state based on value
        return true;
      }),
      finalize(()=>{
        this.refreshing = false;
      }),
    );

    return request;
  }
}
