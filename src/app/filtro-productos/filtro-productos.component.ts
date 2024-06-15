import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductosService } from '../servicios/productos.service';
import { IProduct } from '../gondola-productos/productos';
import { filter } from 'rxjs';

@Component({
  selector: 'app-filtro-productos',
  templateUrl: './filtro-productos.component.html',
  styleUrl: './filtro-productos.component.css'
})
export class FiltroProductosComponent implements OnInit{
  
  private _listFilter: string = '';
  @Output() productosFiltrados = new EventEmitter<any[]>();
  filteredProducts: any[]=[];

  constructor(public productosServicio: ProductosService) {} // Cambiado a public
  
  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this._listFilter ? this.performFilter(this.listFilter) : this.productosServicio.productos;
    this.productosFiltrados.emit(this.filteredProducts) //agregado
  }

  performFilter(filterBy: string): any[] {
    filterBy = filterBy.trim().toLowerCase(); // Limpiar y convertir a minúsculas
    return this.productosServicio.productos.filter((producto: any) =>
      producto.nombre.trim().toLowerCase().startsWith(filterBy)
    );
  }
  

  ngOnInit(): void {
    this.filteredProducts = this.productosServicio.productos
    this.productosFiltrados.emit(this.filteredProducts) //agregado
  }

  rango: number = 0

  get obtenerRango(): number {
    return this.rango
  }

  set obtenerRango(value: any){
    this.rango = value
  }

  obtenerPrecioMayor(): number{
    return Math.max(...this.productosServicio.precios)
  }

  obtenerPrecioMenor(): number {
    return Math.min(...this.productosServicio.precios)
  }

  
}
