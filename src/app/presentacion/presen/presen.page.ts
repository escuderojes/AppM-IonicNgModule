import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presen',
  templateUrl: './presen.page.html',
  styleUrls: ['./presen.page.scss'],
})

export class PresenPage implements OnInit {

  constructor() { }

  ngOnInit() {
    // Seleccionar el ícono del menú y el contenedor del menú
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.querySelector('.menu');

    if (menuToggle && menu) {
      // Añadir evento de clic al ícono del menú
      menuToggle.addEventListener('click', () => {
        // Alternar la clase 'active' para mostrar/ocultar el menú
        menu.classList.toggle('active');
      });
    }
  }
}