import { Component } from '@angular/core';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent {
  items = [
    { title: 'Nombre', content: '' },
    { title: 'Stock', content: '' },
    { title: 'Fotos', content: '' },
    { title: 'Precio', content: '' },
    { title: 'Caracteristicas Principales', content: '' },
    { title: 'Caracteristicas Secundarias', content: '' },
    { title: 'Garantia', content: '' },
    { title: 'Categoria', content: '' },
    { title: 'Formas de pago', content: '' },
    { title: 'Descripción', content: '' }
  ];

  formData = {
    nombre: '',
    stock: '',
    fotos: '',
    precio: '',
    carcateristicasPrincipales: '',
    carcateristicasSecundarias: '',
    garantia: '',
    categoria: '',
    formasDePago: '',
    descripcion: ''
  };
}
