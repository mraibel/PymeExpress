import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../servicios/productos.service';

@Component({
  selector: 'app-gondola-productos',
  templateUrl: './gondola-productos.component.html',
  styleUrls: ['./gondola-productos.component.css']
})
export class GondolaProductosComponent implements OnInit {

  productosPorPagina: number = 9;
  paginaActual: number = 1;
  productosFiltrados: any[] = [];
  productosAMostrar: any[] = [];

  primerPagina: boolean = true;
  ultimaPagina: boolean = false;

  mostrarVentana: boolean = false;
  id_producto: number = 0;

  constructor(public productosServicio: ProductosService) {}

  toggleVentana(id_producto: number): void {
    this.mostrarVentana = !this.mostrarVentana;
    this.id_producto = id_producto;
  }

  receiveData(data: boolean): void {
    this.mostrarVentana = false;}
  ngOnInit(): void {
    this.productosAMostrar = this.productosMostrar();}
  productosMostrar(): any[] {
    const inicio = (this.paginaActual - 1) * this.productosPorPagina;
    const fin = inicio + this.productosPorPagina;
    return this.productosFiltrados.length > 0 ? this.productosFiltrados.slice(inicio, fin) : this.productosServicio.productos.slice(inicio, fin);
  }

  addItem(newItems: any[]): void {
    this.productosFiltrados = newItems;
    this.paginaActual = 1;
    this.productosAMostrar = this.productosMostrar();
  }

  paginaAnterior(): void {
    if (this.paginaActual > 1) {
      this.paginaActual--;
      this.actualizarEstadoPagina();
    }}
  paginaSiguiente(): void {
    const ultimaPagina = Math.ceil((this.productosFiltrados.length > 0 ? this.productosFiltrados.length : this.productosServicio.productos.length) / this.productosPorPagina);
    if (this.paginaActual < ultimaPagina) {
      this.paginaActual++;
      this.actualizarEstadoPagina();
    } }

  private actualizarEstadoPagina(): void {
    const ultimaPagina = Math.ceil((this.productosFiltrados.length > 0 ? this.productosFiltrados.length : this.productosServicio.productos.length) / this.productosPorPagina);
    this.primerPagina = this.paginaActual === 1;
    this.ultimaPagina = this.paginaActual === ultimaPagina;
    this.productosAMostrar = this.productosMostrar();
  }
}
