import { Component, OnInit } from '@angular/core';
import { auth, db } from '../../firebase-config';
import { doc, getDoc, updateDoc } from 'firebase/firestore';  // Importar getDoc
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.page.html',
  styleUrls: ['./editar-perfil.page.scss'],
})
export class EditarPerfilPage implements OnInit {
  userData: any = {
    nombres: '',
    usuario: '',
    telefono: '',
    fechaNacimiento: '',
    genero: '',
    direccion: '',
    pais: '',
    ciudad: '',
    descripcion: ''
  };

  constructor(private router: Router) { }

  ngOnInit() {
    const user = auth.currentUser;
    if (user) {
      this.loadUserData(user.uid);
    }
  }

  async loadUserData(uid: string) {
    const userDoc = doc(db, 'users', uid);
    const docSnap = await getDoc(userDoc);  // Aquí usamos getDoc para obtener los datos
    if (docSnap.exists()) {
      this.userData = docSnap.data();
    }
  }

  async saveUserData() {
    const user = auth.currentUser;
    if (user) {
      const userDoc = doc(db, 'users', user.uid);
      await updateDoc(userDoc, this.userData);

      // Redirigir a la página de confirmación después de guardar los datos
      this.router.navigate(['/enviado']);
    }
  }
}
