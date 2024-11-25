import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.page.html',
  styleUrls: ['./cursos.page.scss'],
})

export class CursosPage implements OnInit {

  btnCart: any;
  containerCartProducts: any;
  cartInfo: any;
  rowProduct: any;
  productsList: any;
  allProducts: any[] = [];
  valorTotal: any;
  countProducts: any;
  cartEmpty: any;
  cartTotal: any;
  btnComprar: any;  // Referencia al botón de "Ir a comprar"

  constructor() { }

  ngOnInit() {
    // Seleccionar los elementos del DOM
    this.btnCart = document.querySelector('.container-cart-icon');
    this.containerCartProducts = document.querySelector('.container-cart-products');
    this.cartInfo = document.querySelector('.cart-product');
    this.rowProduct = document.querySelector('.row-product');
    this.productsList = document.querySelector('.container-items');
    this.valorTotal = document.querySelector('.total-pagar');
    this.countProducts = document.querySelector('#contador-productos');
    this.cartEmpty = document.querySelector('.cart-empty');
    this.cartTotal = document.querySelector('.cart-total');
    this.btnComprar = document.querySelector('.btn-comprar');  // Seleccionamos el botón "Ir a comprar"

    // Inicialmente ocultamos el botón "Ir a comprar"
    this.btnComprar.style.display = 'none';

    // Agregar eventos
    this.btnCart.addEventListener('click', this.toggleCart.bind(this));
    this.productsList.addEventListener('click', this.addProductToCart.bind(this));
    this.rowProduct.addEventListener('click', this.removeProductFromCart.bind(this));
  }

  toggleCart() {
    this.containerCartProducts.classList.toggle('hidden-cart');
  }

  addProductToCart(e: any) {
    if (e.target.classList.contains('btn-add-cart')) {
      const product = e.target.parentElement;

      const infoProduct = {
        quantity: 1,
        title: product.querySelector('h2').textContent,
        price: product.querySelector('p').textContent,
      };

      const exists = this.allProducts.some(product => product.title === infoProduct.title);

      if (exists) {
        const products = this.allProducts.map(product => {
          if (product.title === infoProduct.title) {
            product.quantity++;
            return product;
          } else {
            return product;
          }
        });
        this.allProducts = [...products];
      } else {
        this.allProducts = [...this.allProducts, infoProduct];
      }

      this.showHTML();
    }
  }

  removeProductFromCart(e: any) {
    if (e.target.classList.contains('icon-close')) {
      const product = e.target.parentElement;
      const title = product.querySelector('p').textContent;

      this.allProducts = this.allProducts.filter(product => product.title !== title);

      this.showHTML();
    }
  }

  showHTML() {
    if (!this.allProducts.length) {
      this.cartEmpty.classList.remove('hidden');
      this.rowProduct.classList.add('hidden');
      this.cartTotal.classList.add('hidden');
      this.btnComprar.style.display = 'none';  // Ocultamos el botón cuando el carrito está vacío
    } else {
      this.cartEmpty.classList.add('hidden');
      this.rowProduct.classList.remove('hidden');
      this.cartTotal.classList.remove('hidden');
      this.btnComprar.style.display = 'block';  // Mostramos el botón cuando hay productos
    }

    // Limpiar HTML
    this.rowProduct.innerHTML = '';

    let total = 0;
    let totalOfProducts = 0;

    this.allProducts.forEach(product => {
      const containerProduct = document.createElement('div');
      containerProduct.classList.add('cart-product');

      containerProduct.innerHTML = `
            <div class="info-cart-product" display: in>
                <span class="cantidad-producto-carrito">${product.quantity}</span>
                <p class="titulo-producto-carrito">${product.title}</p>
                <span class="precio-producto-carrito">${product.price}</span>
            </div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="icon-close" width="25" height="25"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>
        `;

      this.rowProduct.append(containerProduct);

      total += product.quantity * parseFloat(product.price.slice(1)); // Corrección aquí
      totalOfProducts += product.quantity;
    });

    this.valorTotal.innerText = `$${total.toFixed(2)}`; // Formatear el total a dos decimales
    this.countProducts.innerText = totalOfProducts;
  }
}
