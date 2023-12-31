import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  isLogged = false;
  constructor(private _router: Router, private _authService: AuthService) {
    // this.isLogged = _authService.isAuthenticated();
  }

  async logout() {
    this._authService.logout();
    this._router.navigate(['/login']);
  }
}
