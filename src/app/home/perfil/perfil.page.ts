import { Component, OnInit } from '@angular/core';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../../firebase-config';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  userData: any = null;

  constructor() { }

  async ngOnInit() {
    await this.loadUserData();
  }

  async loadUserData() {
    const user = auth.currentUser; // Obtener el usuario autenticado
    if (user) {
      const userDoc = doc(db, 'users', user.uid); // Referencia al documento del usuario
      const userSnapshot = await getDoc(userDoc);

      if (userSnapshot.exists()) {
        this.userData = userSnapshot.data(); // Guardar los datos en userData
      } else {
        console.error('No se encontró el documento del usuario.');
      }
    } else {
      console.error('No hay un usuario autenticado.');
    }
  }
}
