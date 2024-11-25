import { Component } from '@angular/core';
import { ToastController, LoadingController, NavController } from '@ionic/angular';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = ''; // Declarar la propiedad email
  password: string = ''; // Declarar la propiedad password

  constructor(
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController
  ) { }

  async login() {
    if (this.formValidation()) {
      const loading = await this.loadingCtrl.create({
        message: 'Espere por favor...',
      });
      await loading.present();

      try {
        const auth = getAuth();
        // Iniciar sesión con Firebase Authentication
        await signInWithEmailAndPassword(auth, this.email, this.password);
        loading.dismiss();
        this.showToast('Inicio de sesión exitoso.');
        this.navCtrl.navigateRoot('/principal'); // Redirigir a la página principal
      } catch (error: any) {
        loading.dismiss();
        let errorMessage = error.message || 'Hubo un error al iniciar sesión.';
        this.showToast(errorMessage);
      }
    }
  }

  formValidation(): boolean {
    if (!this.email) {
      this.showToast('Ingrese un email');
      return false;
    }
    if (!this.password) {
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
