import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../services/auth-service';
import { inject } from '@angular/core';
@Component({
  selector: 'app-logged-layout',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './logged-layout.html',
  styleUrl: './logged-layout.scss',
  standalone: true
})
export class LoggedLayout {
  currentUrl = '';
  authservice = inject(AuthService);
  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.currentUrl = this.router.url; // guarda la URL actual
    });
  }

  isContactos(): boolean {
    return this.currentUrl.includes('contactos');
  }
  isGrupos(): boolean {
    return this.currentUrl.includes('grupos');
  }
}
