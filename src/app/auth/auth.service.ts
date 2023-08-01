import { Injectable } from '@angular/core';
import { Observable, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;

  isLoading = false;
  constructor() { }
  async isAuthenticated(): Promise<boolean> {
    this.isLoading = true;
    return new Promise(r => setTimeout(() => {
      this.isLoading = false;
      return r(this.isLoggedIn);
    }, 2500));
  }


  async login(): Promise<boolean> {
    return new Promise(r => setTimeout(() => {
      this.isLoading = false;
      this.isLoggedIn = true;
      return r(false);
    }, 2500));
  }
}
