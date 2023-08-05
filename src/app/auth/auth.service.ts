import { Injectable } from '@angular/core';
import { Observable, delay } from 'rxjs';


const ACCESS_TOKEN = "access_token"; 

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;

  isLoading = false;

  constructor() { }

  isAuthenticated(): boolean {
    // return false;
    return this.isLoggedIn;

    // this.isLoading = true;
    // return new Promise(r => setTimeout(() => {
    //   this.isLoading = false;
    //   return r(this.isLoggedIn);
    // }, 2500));
  }


  async login(): Promise<boolean> {
    return new Promise(r => setTimeout(() => {
      this.isLoading = false;
      this.isLoggedIn = true;
      localStorage.setItem(ACCESS_TOKEN, "qwerty");
      return r(true);
    }, 2500));
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
    return new Promise(r => setTimeout(() => {
      this.isLoading = false;
      this.isLoggedIn = true;
      return r(false);
    }, 2500));



    // TODO: Refresh
  }
}
