import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from './productos';
import { ProductosService } from './productos.service';

@Component({
  selector: 'app-gondola-productos',
  templateUrl: './gondola-productos.component.html',
  styleUrl: './gondola-productos.component.css'
})
export class GondolaProductosComponent implements OnInit {
  
  productos: IProduct [] = [];
  
  constructor(private productosServicios: ProductosService){

  }

  ngOnInit(): void {
    this.productos = this.productosServicios.getProductos()
  }
  
}
