import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tienda principal BCI';
  auth!: AuthService;
  constructor(private authService: AuthService, private rourter: Router) {

  }

  logout(): void {
    this.auth.logout();
    this.rourter.navigate(['login']);
  }
}
