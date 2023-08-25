import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  title: string;


  private getTitle(): string {
    const titles = new Map<string, string>([
      ["/", $localize`Home`]
    ]);

    return titles.get(this._router.url) ?? "undef";
  }



  constructor(private _router: Router) {
    this.title = this.getTitle();
  }

}
