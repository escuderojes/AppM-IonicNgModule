import { Component } from '@angular/core';
import { User } from '../../models/User';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../firebase-config'; // Importa auth desde firebase-config
import { setDoc, doc } from 'firebase/firestore';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  user: User = {
    usuario: '',
    nombres: '',
    email: '',
    password: ''
  };

  constructor(
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController
  ) { }

  async register(user: User) {
    if (this.formValidation()) {
      const loading = await this.loadingCtrl.create({
        message: 'Espere por favor...',
      });
      await loading.present();

      try {
        // Registro del usuario con Firebase Authentication
        const userCredential = await createUserWithEmailAndPassword(auth, user.email, user.password);
        const userId = userCredential.user.uid;

        // Guardamos los datos del usuario en Firestore
        await setDoc(doc(db, 'users', userId), {
          usuario: user.usuario,
          nombres: user.nombres,
          email: user.email
        });

        loading.dismiss();
        this.showToast('Usuario registrado exitosamente.');
        this.navCtrl.navigateRoot('/principal');
      } catch (error: any) {
        loading.dismiss();
        let errorMessage = error.message || 'Hubo un error al registrar el usuario.';
        this.showToast(errorMessage);
      }
    }
  }

  formValidation(): boolean {
    if (!this.user.usuario) {
      this.showToast('Ingrese un nombre de usuario');
      return false;
    }
    if (!this.user.nombres) {
      this.showToast('Ingrese sus nombres');
      return false;
    }
    if (!this.user.email) {
      this.showToast('Ingrese un email');
      return false;
    }
    if (!this.user.password) {
      this.showToast('Ingrese una contraseña');
      return false;
    }
    return true;
  }

  async showToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 4000,
    });
    toast.present();
  }
}
