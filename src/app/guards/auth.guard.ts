import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { auth } from '../firebase-config';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  async canActivate(): Promise<boolean> {
    // Retorna una promesa para esperar la verificación de autenticación
    return new Promise((resolve) => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          resolve(true);  // Permite acceder a la ruta
        } else {
          this.router.navigate(['/error']);  // Redirige si no está autenticado
          resolve(false);  // Bloquea el acceso
        }
      });
    });
  }
}
