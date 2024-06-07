import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../servicios/productos.service';

@Component({
  selector: 'app-gondola-productos',
  templateUrl: './gondola-productos.component.html',
  styleUrl: './gondola-productos.component.css'
})
export class GondolaProductosComponent implements OnInit {

  // Variables para mostrar cierta cantidad de productos
  productosPorPagina: number = 9
  paginaActual = 1
  productosAMostrar: any[] = []

  primerPagina: boolean = true
  ultimaPagina: boolean = false

  // Variables para el manejo de ventana del producto
  mostrarVentana: boolean = false
  id_producto: number = 0

  constructor(
    public productosServicio: ProductosService,
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
  }

  //Manejo cantidad de productos por página
  productosMostrar(): any[] {
    const inicio = (this.paginaActual - 1) * this.productosPorPagina
    const fin = inicio + this.productosPorPagina
    return this.productosServicio.productos.slice(inicio, fin)
  }

  paginaAnterior() {
    if(this.paginaActual > 1) {
      this.paginaActual--
      if(this.paginaActual == 1) {
        this.primerPagina = true
        this.ultimaPagina = false
      } else if(this.paginaActual > 1) {
        this.primerPagina = true
        this.ultimaPagina = true
      }
    }
    this.productosAMostrar = this.productosMostrar()
  }

  paginaSiguiente() {
    const ultimaPagina = Math.ceil(this.productosServicio.productos.length / this.productosPorPagina)
    if(this.paginaActual < ultimaPagina) {
      this.paginaActual++
      if(this.paginaActual == ultimaPagina) {
        this.primerPagina = false
        this.ultimaPagina = true
      } else if(this.paginaActual > 1) {
        this.primerPagina = false
      }
    }
    this.productosAMostrar = this.productosMostrar()
  }
}
