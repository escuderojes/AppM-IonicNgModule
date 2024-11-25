import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { auth } from '../app/firebase-config';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  isAuthenticated = false; // Estado para verificar si el usuario está autenticado

  constructor(private router: Router) {
    auth.onAuthStateChanged((user) => {
      this.isAuthenticated = !!user; // Actualiza el estado dependiendo si hay un usuario autenticado
      if (!user) {
        this.router.navigate(['/presen']);
      }
    });
  }

  // Método para cerrar sesión
  logout() {
    auth.signOut().then(() => {
      this.router.navigate(['/presen']);
    }).catch((error) => {
      console.error("Error al cerrar sesión", error);
    });
  }
}

