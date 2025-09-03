import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-logged-layout',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './logged-layout.html',
  styleUrl: './logged-layout.scss',
  standalone: true
})
export class LoggedLayout {
  currentUrl = '';

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
