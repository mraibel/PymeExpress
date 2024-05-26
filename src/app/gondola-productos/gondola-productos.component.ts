import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from './productos';
import { ProductosService } from './productos.service';

@Component({
  selector: 'app-gondola-productos',
  templateUrl: './gondola-productos.component.html',
  styleUrl: './gondola-productos.component.css'
})
export class GondolaProductosComponent implements OnInit {
  
  productos: IProduct [] = []
  categorias: string[] = []

  // Variables para mostrar cierta cantidad de productos
  productosPorPagina: number = 9
  paginaActual = 1
  productosAMostrar: IProduct[] = []

  // Variables para el manejo de ventana del producto
  mostrarVentana: boolean = false
  id_producto: number = 0

  constructor(
    private productosServicios: ProductosService,
  ) {}
  
  // Manejo de ventana
  toggleVentana(id_producto: number) : void {
    this.mostrarVentana = !this.mostrarVentana
    this.id_producto = id_producto
  }
  
  receiveData(data: boolean): void {
    this.mostrarVentana = false
  }
  
  // Lo primero que carga al renderizar el componente
  ngOnInit(): void {
    this.productos = this.productosServicios.getProductos()
    this.productosAMostrar = this.productosMostrar()
    this.productos.forEach((e) => {
      if(!this.categorias.includes(e.categoria)){
        this.categorias.push(e.categoria)
      }
    })
  }

  //Manejo cantidad de productos por página
  productosMostrar(): IProduct[] {
    const inicio = (this.paginaActual - 1) * this.productosPorPagina
    const fin = inicio + this.productosPorPagina
    return this.productos.slice(inicio, fin)
  }

  paginaAnterior() {
    if(this.paginaActual > 1) {
      this.paginaActual--
    }
    this.productosAMostrar = this.productosMostrar()
  }

  paginaSiguiente() {
    const ultimaPagina = Math.ceil(this.productos.length / this.productosPorPagina)
    if(this.paginaActual < ultimaPagina) {
      this.paginaActual++
    }
    this.productosAMostrar = this.productosMostrar()
  }
}
